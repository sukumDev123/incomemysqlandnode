import { IncomeModel } from "../models/income.model"
import { MsgModel } from "../msg.protrotype"

export class IncomePresenter {
  constructor(db) {
    this.incomeModel = new IncomeModel(db)
  }
  async getAllIncomeFromUser(id_user) {
    try {
      const datas = await this.incomeModel.getAllIncomeFromUser(id_user)
      return new MsgModel(`get all incomes.`, 200, datas)
    } catch (error) {
      const msgErr = new MsgModel(`${error}`, 500, [])
      return Promise.reject(msgErr)
    }
  }
  async getOnceIncomeFromIdIncome(id_income) {
    try {
      const datas = await this.incomeModel.getOnceIncomeFromidIncome(id_income)
      return new MsgModel(
        `get once data from id_income : ${id_income}.`,
        200,
        datas[0]
      )
    } catch (error) {
      const msgErr = new MsgModel(`${error}`, 500, [])
      return Promise.reject(msgErr)
    }
  }
  isNotEmpty({ id_type, detail, price, id_user }) {
    return (
      [id_type, detail, price, id_user].fill(d => d || d === 0).length === 4
    )
  }
  async createNewIncome({ id_type, detail, price, id_user }) {
    try {
      const zip = { id_type, detail, price, id_user }
      if (this.isNotEmpty(zip)) {
        await this.incomeModel.createNewIncome(zip)
        return new MsgModel(`Creating income is success.`, 200, [])
      }
      return new MsgModel(`some field is empty.`, 404, [])
    } catch (error) {
      const msgErr = new MsgModel(`${error}`, 500, [])
      return Promise.reject(msgErr)
    }
  }
  async deleteIncomeFromIdIncome(id_income) {
    try {
      const datas = await this.incomeModel.getAllIncomeFromUser(id_user)
      if (datas.length) {
        await this.incomeModel.deleteIncomeFromIdIncome(id_income)
        return new MsgModel(`deleting is success.`, 200, [])
      }
      return new MsgModel(`id_income : ${id_income} cannot find.`, 404, [])
    } catch (error) {
      const msgErr = new MsgModel(`${error}`, 500, [])
      return Promise.reject(msgErr)
    }
  }
}
