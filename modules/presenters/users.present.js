import { UserModel } from "../models/users.model"
import { MsgModel } from "../msg.protrotype"

export class UserPresent {
  constructor(db) {
    this.db_connect = new UserModel(db)
  }

  checkUserIsNotE(name, password, email) {
    return [name, password, email].filter(x => x).length === 3
  }
  async checkUserNotexisted(email) {
    try {
      const check = await this.db_connect.checkUserIsDontHave(email)
      if (check) return false
      return true
    } catch (error) {
      return Promise.reject(error)
    }
  }
  async createUser(dataUser) {
    try {
      const { name, password, email } = dataUser
      const checkUserIsDontHave = await this.checkUserNotexisted(email)
      if (checkUserIsDontHave) {
        if (this.checkUserIsNotE(name, password, email)) {
          await this.db_connect.createNewUser({ name, password, email })
          return new MsgModel(`Inserting is success.`, 200, [])
        }
        return new MsgModel(`Something is empty.`, 404, [])
      }
      return new MsgModel(`The Emaill address is existed`, 404, [])

      // console.log(checkUserIsDontHave)
    } catch (error) {
      const dataM = new MsgModel(`${error}`, 500, [])
      return Promise.reject(dataM)
    }
  }
  async getUserData(_id_user) {
    try {
      const data = await this.db_connect.getOnceUser(_id_user)
      return new MsgModel(`Seleting is success`, 200, data)
    } catch (error) {
      const dataM = new MsgModel(`${error}`, 500, [])
      return Promise.reject(dataM)
    }
  }
  async deleteUserData(_id_user) {
    try {
      await this.db_connect.deleteOnceUser(_id_user)
      return new MsgModel(`Deleting is success.`, 200, [])
    } catch (error) {
      const dataM = new MsgModel(`${error}`, 500, [])
      return Promise.reject(dataM)
    }
  }
  async updateUserData(_id_user, data) {
    try {
      await this.db_connect.updateOnceUser(_id_user, data)
      return new MsgModel(`Updating is sucess.`, 200, [])
    } catch (error) {
      const dataM = new MsgModel(`${error}`, 500, [])
      return Promise.reject(dataM)
    }
  }
}
