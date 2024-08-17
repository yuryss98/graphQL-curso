const { usersDB } = require('../db/index')

module.exports = {
  generateId() {
    return usersDB.length + 1
  }
}