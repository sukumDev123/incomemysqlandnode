import chai from "chai"
import { MysqlConnect } from "../../config/lib/mysql"
import { SaveMoneyPresent } from "../presenters/save.present"

const expect = chai.expect
const mySql = new MysqlConnect().getMysqlDb()
const presenterSave = new SaveMoneyPresent(mySql)
const id_saveMoney = 999
describe("Testing Presenter Save Money.", () => {
  //   it("Testing create user :", async () => {
  //     try {
  //       const zip = {
  //         name_want: "Gucci",
  //         point_money: 30000,
  //         now_money: 0,
  //         id_user: 1
  //       }
  //       const msg = await presenterSave.createNewSaveMoney(zip)
  //       console.log({ msg })
  //       expect(msg.status).to.equal(200)
  //     } catch (error) {
  //       console.log({ error })
  //     }
  //   })
  it("Testing create user for test case id_user = 1 and id_saveMoney = 999", async () => {
    try {
      const zip = {
        name_want: "Test",
        point_money: 1000,
        now_money: 0,
        id_user: 1,
        id_saveMoney: id_saveMoney
      }
      const msg = await presenterSave.createNewTestSaveMoney(zip)
      expect(msg.status).to.equal(200)
    } catch (error) {
      console.log({ error })
    }
  })
  it("Testing get all save money by id user : 1.", async () => {
    try {
      const id_user = 1
      const datas = await presenterSave.getAllSaveMoneyDataFromIdUser(id_user)
      expect(datas.status).to.equal(200)
    } catch (error) {
      console.log({ error })
    }
  })
  it("Testing get once save money by id save money : 999.", async () => {
    try {
      const datas = await presenterSave.getOnceSaveMoneyDataFromIdSaveMoney(
        id_saveMoney
      )
      expect(datas.status).to.equal(200)
    } catch (error) {
      console.log({ error })
    }
  })
  it("Testing delete all save money by id save money : 999.", async () => {
    try {
      const datas = await presenterSave.deleteSaveMoney(id_saveMoney)
      expect(datas.status).to.equal(200)
    } catch (error) {
      console.log({ error })
    }
  })
  it("Testing check id bill 999 has deleted.", async () => {
    try {
      const asd = await presenterSave.getOnceSaveMoneyDataFromIdSaveMoney(
        id_saveMoney
      )
      expect(asd.data).to.equal(undefined)
    } catch (error) {
      console.log({ error })
    }
  })
})
