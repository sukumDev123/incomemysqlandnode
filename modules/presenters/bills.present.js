import { BillModel } from "../models/bills.model"
import { MsgModel } from "../msg.protrotype"
export class BillPresent {
  constructor(db) {
    this.billModel = new BillModel(db)
  }

  async getAllBillOfUser(_id_user) {
    try {
      const data = await this.billModel.getAllBillById(_id_user)
      const msg = `Find data from user id : ${_id_user}`
      if (data.length) {
        return new MsgModel(`${msg} size of data is ${data.length}`, 200, data)
      }
      return new MsgModel(`${msg} , data is empty.`, 200, [])
    } catch (error) {
      const msgErr = new MsgModel(`${error}`, 500, [])
      return Promise.reject(msgErr)
    }
  }
  async getOnceBillByIdBill(_id_bill) {
    try {
      if (_id_bill) {
        const datas = await this.billModel.getOnceBillByIdBill(_id_bill)
        return new MsgModel(
          `Find data by id_bill : ${_id_bill} `,
          200,
          datas[0]
        )
      }
      return Promise.reject(new MsgModel("Id bill is null", 404, []))
    } catch (error) {
      const msgErr = new MsgModel(`${error}`, 500, [])
      return Promise.reject(msgErr)
    }
  }
  async deleteBillOfUser(_id_bill) {
    try {
      const findUser = await this.billModel.getOnceBillByIdBill(_id_bill)
      if (findUser.length) {
        await this.billModel.deleteBillData(_id_bill)
        return new MsgModel(
          `This id bill is ${_id_bill} has deleted. `,
          200,
          []
        )
      }
      return new MsgModel(`This id bill is empty.`, 404, [])
    } catch (error) {
      const msgErr = new MsgModel(`${error}`, 500, [])
      return Promise.reject(msgErr)
    }
  }
  checkIsNotEmpty(name_bill, price_bill, id_users, detail) {
    return [name_bill, price_bill, id_users, detail].filter(d => d).length === 4
  }
  async createNewBill(data) {
    try {
      const { name_bill, price_bill, id_users, detail } = data
      if (this.checkIsNotEmpty(name_bill, price_bill, id_users, detail)) {
        await this.billModel.createBill({
          name_bill,
          price_bill,
          id_users,
          detail
        })

        return new MsgModel(`Creating new bill's success.`, 200, [])
      }
      return new MsgModel(`Some fild is empty.`, 404, [])
    } catch (error) {
      const msgErr = new MsgModel(`${error}`, 500, [])
      return Promise.reject(msgErr)
    }
  }
  async updateBillMoney(id_bill, money_) {
    try {
      await this.billModel.updateNewBillByIdAndMoney(id_bill, money_)
      return new MsgModel(`Billing price is updated success.`, 200, [])
    } catch (error) {
      const msgErr = new MsgModel(`${error}`, 500, [])
      return Promise.reject(msgErr)
    }
  }

  async buyBillInfor(_id_bill) {
    try {
      await this.billModel.buyBill(_id_bill)
      return new MsgModel(`Billing is saled success.`, 200, [])
    } catch (error) {
      const msgErr = new MsgModel(`${error}`, 500, [])
      return Promise.reject(msgErr)
    }
  }
  async updateBillData({ name_bill, detail }, _id_bill) {
    try {
      // await this.
      // console.log({ name_bill, detail })
      if (name_bill && detail && _id_bill) {
        await this.billModel.updateBillData({ name_bill, detail }, _id_bill)
        return new MsgModel(`Billing is information success.`, 200, [])
      }
      return new MsgModel("Data not have to update.", 304, [])
    } catch (error) {
      const msgErr = new MsgModel(`${error}`, 500, [])
      return Promise.reject(msgErr)
    }
  }
  async createBillForTestCase(data) {
    try {
      // createBillForTestCase
      const datasid = await this.billModel.getOnceBillByIdBill(data.id_bill)
      if (!datasid.length) {
        await this.billModel.createBillForTestCase(data)
        return new MsgModel("New", 200, [])
      }
      // console.log(datasid)
      return new MsgModel("Have 1", 200, [])
    } catch (error) {
      const msgErr = new MsgModel(`${error}`, 500, [])
      return Promise.reject(msgErr)
    }
  }
}
