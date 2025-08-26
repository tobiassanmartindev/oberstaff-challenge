import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    dialogNewUser: false,
    dialogViewUser: false,

    users: [],
    filteredUsers: [],
    userSelected: null,
    userCopied: false,

    infiniteScroll: false,
    loadingUsers: false,
    searchFilter: '',
    sortOption: null,
    cachedUsers: 0,

    errorMessage: false,
  }),

  actions: {
    // =====================
    // Dialog Management
    // =====================
    toggleNewUserDialog() {
      this.dialogNewUser = !this.dialogNewUser
    },

    toggleViewUserDialog(user) {
      this.userSelected = user
      this.dialogViewUser = !this.dialogViewUser
    },

    // =====================
    // User Management
    // =====================
    async fetchUsers() {
      this.loadingUsers = true
      this.errorMessage = false
      try {
        const response = await fetch('https://randomuser.me/api/?results=3')

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const { results } = await response.json()
        this.users.push(...results)
        this.filteredUsers.push(...results)

        this.cacheData()
        this.loadingUsers = false
      } catch (error) {
        console.error('Error fetching users:', error)
        this.errorMessage = true
        return []
      }
    },

    createUser(user) {
      this.users.unshift(user)
      this.filteredUsers.unshift(user)
      this.cacheData()
    },

    filterUsers(filter) {
      this.searchFilter = filter
      const normalizedFilter = filter.toLowerCase()

      this.filteredUsers = this.users.filter((user) => {
        const name = `${user.name.first} ${user.name.last}`.toLowerCase()
        const country = user.location.country.toLowerCase()
        return name.includes(normalizedFilter) || country.includes(normalizedFilter)
      })

      this.cacheData()
    },

    sortUsers(sortOption) {
      this.sortOption = sortOption

      const sortStrategies = {
        'name-asc': (a, b) => this.fullName(a).localeCompare(this.fullName(b)),
        'name-desc': (a, b) => this.fullName(b).localeCompare(this.fullName(a)),
        'country-asc': (a, b) => this.country(a).localeCompare(this.country(b)),
        'country-desc': (a, b) => this.country(b).localeCompare(this.country(a)),
      }

      const sortFn = sortStrategies[sortOption?.code]
      if (sortFn) {
        this.filteredUsers.sort(sortFn)
      }

      this.cacheData()
    },

    clearUsers() {
      this.users = []
      this.filteredUsers = []
      this.searchFilter = ''
      this.sortOption = null
      this.cachedUsers = 0

      this.clearCache()
      this.fetchUsers()
    },

    // =====================
    // Clipboard & Export
    // =====================
    async copyUser() {
      if (!this.userSelected) return

      try {
        await navigator.clipboard.writeText(JSON.stringify(this.userSelected, null, 2))
        this.userCopied = true

        setTimeout(() => {
          this.userCopied = false
        }, 2000)
      } catch (error) {
        console.error('Error copying user to clipboard:', error)
      }
    },

    exportUsers() {
      const dataStr = JSON.stringify(this.filteredUsers, null, 2)
      const blob = new Blob([dataStr], { type: 'application/json' })
      const url = URL.createObjectURL(blob)

      const link = document.createElement('a')
      link.href = url
      link.download = 'users.json'
      link.click()

      URL.revokeObjectURL(url)
    },

    // =====================
    // Cache Management
    // =====================
    cacheData() {
      localStorage.setItem('users', JSON.stringify(this.users))
      localStorage.setItem('filteredUsers', JSON.stringify(this.filteredUsers))
      localStorage.setItem('cachedFilter', this.searchFilter)
      localStorage.setItem('cachedSort', JSON.stringify(this.sortOption))

      this.cachedUsers = this.filteredUsers.length
    },

    restoreCache() {
      try {
        const localUsers = JSON.parse(localStorage.getItem('users')) || []
        const localFiltered = JSON.parse(localStorage.getItem('filteredUsers')) || []
        const localFilter = localStorage.getItem('cachedFilter')
        const localSort = JSON.parse(localStorage.getItem('cachedSort'))

        if (localUsers.length) this.users = localUsers
        this.filteredUsers = localFiltered.length ? localFiltered : [...this.users]
        this.cachedUsers = this.filteredUsers.length

        if (localFilter) this.searchFilter = localFilter
        if (localSort) this.sortOption = localSort
      } catch (error) {
        console.error('Error restoring cache:', error)
      }
    },

    clearCache() {
      localStorage.removeItem('users')
      localStorage.removeItem('filteredUsers')
      localStorage.removeItem('cachedFilter')
      localStorage.removeItem('cachedSort')
      this.cachedUsers = 0
    },

    // =====================
    // Helpers
    // =====================
    fullName(user) {
      return `${user.name.first} ${user.name.last}`.toLowerCase()
    },

    country(user) {
      return user.location.country.toLowerCase()
    },
    getCachData() {
      if (this.cachedUsers === 0) {
        this.restoreCache()
        if (this.cachedUsers === 0) {
          this.fetchUsers()
        }
      }
    },
  },
})
