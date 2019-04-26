import { SaveMoneyModel } from "../models/save.model"
import { MsgModel } from "../msg.protrotype"

export class SaveMoneyPresent {
  constructor(db) {
    this.smM = new SaveMoneyModel(db)
  }

  /**
   *
   * @param {*} id_user
   * @returns {MsgModel} data is array.
   */
  async getAllSaveMoneyDataFromIdUser(id_user) {
    try {
      const getAll = await this.smM.getAllSaveMoneyFromIdUser(id_user)
      return new MsgModel(
        `Get all data from id_user is ${id_user} `,
        200,
        getAll
      )
    } catch (error) {
      const msgErr = new MsgModel(`${error}`, 500, [])
      return Promise.reject(msgErr)
    }
  }

  /**
   *
   * @param {*} id_saveMoney
   * @returns {MsgModel} data is object.
   */
  async getOnceSaveMoneyDataFromIdSaveMoney(id_saveMoney) {
    try {
      const getOnce = await this.smM.getOneSaveMoneyFromIdSaveMoney(
        id_saveMoney
      )
      return new MsgModel(
        `Get Once data from id_saveMoney is ${id_saveMoney} .`,
        200,
        getOnce[0]
      )
    } catch (error) {
      const msgErr = new MsgModel(`${error}`, 500, [])
      return Promise.reject(msgErr)
    }
  }
  checkE({ name_want, point_money, id_user }) {
    return [name_want, point_money, id_user].filter(d => d).length === 3
  }
  async createNewSaveMoney({ name_want, point_money, now_money, id_user }) {
    try {
      const zip = { name_want, point_money, now_money, id_user }
      if (this.checkE(zip)) {
        await this.smM.createNewSaveMoney(zip)
        return new MsgModel(`Creating new save money.`, 200, [])
      }
      return new MsgModel(`Some fild is empty.`, 404, [])
    } catch (error) {
      const msgErr = new MsgModel(`${error}`, 500, [])
      return Promise.reject(msgErr)
    }
  }
  async createNewTestSaveMoney({
    name_want,
    point_money,
    now_money,
    id_user,
    id_saveMoney
  }) {
    try {
      const getIdNotHave = await this.smM.getOneSaveMoneyFromIdSaveMoney(
        id_saveMoney
      )
      // console.log(getIdNotHave.length)
      if (!getIdNotHave.length) {
        const zip = {
          name_want,
          point_money,
          now_money,
          id_user,
          id_saveMoney
        }
        await this.smM.createNewSaveMoneyTestCase(zip)
        return new MsgModel("new .", 200, [])
      }
      return new MsgModel("Have one.", 200, [])
    } catch (error) {
      const msgErr = new MsgModel(`${error}`, 500, [])
      return Promise.reject(msgErr)
    }
  }
  async addSaveMoneyNow(id_saveMoney, now_money = 0) {
    try {
      await this.smM.addNewSaveMoneyExists(id_saveMoney, now_money)
      return new MsgModel("Add now money success.", 200, [])
    } catch (error) {
      const msgErr = new MsgModel(`${error}`, 500, [])
      return Promise.reject(msgErr)
    }
  }
  async deleteSaveMoney(id_saveMoney) {
    try {
      await this.smM.deleteSaveMoney(id_saveMoney)
      return new MsgModel("delete money success.", 200, [])
    } catch (error) {
      const msgErr = new MsgModel(`${error}`, 500, [])
      return Promise.reject(msgErr)
    }
  }
}
