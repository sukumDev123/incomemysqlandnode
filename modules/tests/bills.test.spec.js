import chai from "chai"
import { MysqlConnect } from "../../config/lib/mysql"
import { BillPresent } from "../presenters/bills.present"
const expect = chai.expect
const mySql = new MysqlConnect().getMysqlDb()
const presenterBill = new BillPresent(mySql)
describe("Testing Presenter Bill", () => {
  it("Test Presenter for create new bill for test id = 1923", async () => {
    try {
      const createNew = {
        id_bill: 1923,
        name_bill: "Test",
        price_bill: "test",
        id_users: "1",
        detail: "test"
      }
      const msg = await presenterBill.createBillForTestCase(createNew)
      expect(msg.status).to.equal(200)
    } catch (error) {
      console.log(error)
    }
  })
  it("Test Presenter updateBillMoney id_bill 1923 : ", async () => {
    try {
      const id_bills = 1923
      const price = 400
      await presenterBill.updateBillMoney(id_bills, price)
      const dataToNow = await presenterBill.getOnceBillByIdBill(id_bills)
      expect(dataToNow.data.price_bill)
    } catch (error) {
      console.log(error)
    }
  })
  it("Test Presenter updateBillData name_bill and detail id_bill 1923 : ", async () => {
    try {
      const name_bill = "NetFilx"
      const detail = "NetFilx is platfrom to view many movie or serices."
      const id_bill = 1923
      const dataZip = { name_bill, detail }
      const data = await presenterBill.updateBillData(dataZip, id_bill)
      const dataBill = await presenterBill.getOnceBillByIdBill(id_bill)
      expect(dataBill.data.name_bill).to.equal(name_bill)
      expect(dataBill.data.detail).to.equal(detail)
      expect(data.status).to.equal(200)
    } catch (error) {
      console.log(error)
    }
  })

  it("Test Presenter updateBillData name_bill id_bill 1923 : ", async () => {
    try {
      const name_bill = "NetFilx"
      const detail = ""
      const id_bill = 1923
      const dataZip = { name_bill, detail }
      const data = await presenterBill.updateBillData(dataZip, id_bill)
      expect(data.message).to.equal("Data not have to update.")
      expect(data.status).to.equal(304)
    } catch (error) {
      console.log(error)
    }
  })
  it("Test Buy bill is 1923 date now.", async () => {
    try {
      const id_bill = 1923
      const buyNow = await presenterBill.buyBillInfor(id_bill)
      expect(buyNow.status).to.equal(200)
    } catch (error) {
      console.log(error)
    }
  })

  it("Test presenter deleteBillOfUser id_bill = 1923", async () => {
    try {
      const id_bill = 1923
      await presenterBill.deleteBillOfUser(id_bill)
      const id_bill_e_1923_is_empty = await presenterBill.getOnceBillByIdBill(
        id_bill
      )
      expect(id_bill_e_1923_is_empty.data).to.equal(undefined)
    } catch (error) {
      console.log({ error })
    }
  })
})
