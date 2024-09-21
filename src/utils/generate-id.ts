import { db } from '../db/index'

export function generateId() {
  return db.usersDB.length + 1
}