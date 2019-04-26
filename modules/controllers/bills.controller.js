import { BillPresent } from "../presenters/bills.present"
import { MsgModel } from "../msg.protrotype"

export const createNewBill = async (req, res, next) => {
  try {
    const bodys = req.body
    const res_data = await new BillPresent(req.mysql_db).createNewBill(bodys)
    res.json(res_data)
  } catch (error) {
    next(error)
  }
}

export const getAllBill = async (req, res, next) => {
  try {
    const id_user = req.query.id_user
    let datas
    if (id_user) {
      datas = await new BillPresent(req.mysql_db).getAllBillOfUser(id_user)
      // console.log(datas)
    } else {
      datas = new MsgModel("You don't input param id_user.", 404, [])
    }
    res.json(datas)

    // next()
  } catch (error) {
    next(error)
  }
}

export const updateBillMoney = async (req, res, next) => {
  try {
    const billMoneyUpdate = req.body.money
    const id_bill = req.query.id_bill
    let datas
    if (id_bill) {
      datas = await new BillPresent(req.mysql_db).updateBillMoney(
        id_bill,
        billMoneyUpdate
      )
    } else {
      datas = new MsgModel("You don't input param id_bill.", 404, [])
    }

    res.json(datas)
  } catch (error) {
    next(error)
  }
}
export const updateAllDataOfBill = async (req, res, next) => {
  try {
    const { name_bill, detail } = req.body
    const id_bill = req.query.id_bill
    const dataZip = { name_bill, detail }
    const msgFromP = await presenterBill.updateBillData(dataZip, id_bill)
    res.json(msgFromP)
  } catch (error) {
    next(error)
  }
}

export const deletDataFromBill = async (req, res, next) => {
  try {
    const msgPresent = await presenterBill.deleteBillOfUser(id_bill)
    res.json(msgPresent)
  } catch (error) {
    next(error)
  }
}
