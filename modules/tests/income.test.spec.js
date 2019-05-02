import chai from "chai"
import { MysqlConnect } from "../../config/lib/mysql"
import { IncomePresenter } from "../presenters/income.present"

const expect = chai.expect
const mySql = new MysqlConnect().getMysqlDb()
const id_user = 1
describe("Testing Income Presenter.", () => {
  it("Test create new income bill.", async () => {
    try {
      const data = {
        id_type: 1,
        detail: "123",
        price: 100,
        id_user: id_user
      }
      const msg = await new IncomePresenter(mySql).createNewIncome(data)
      expect(msg.status).to.equal(200)
    } catch (error) {
      console.log({ error })
    }
  })
  it("Test get All income list from id user.", async () => {
    try {
      const datas = await new IncomePresenter(mySql).getAllIncomeFromUser(
        id_user
      )
      const datasShow = datas.data
      console.log({ datasShow })

      expect(datas.status).to.equal(200)
    } catch (error) {
      console.log({ error })
    }
  })
  it("Test get Once income list from id income.", async () => {
    try {
      const id_income = 1
      const datas = await new IncomePresenter(mySql).getOnceIncomeFromIdIncome(
        id_income
      )
      console.log({ datas })
      expect(datas.status).to.equal(200)
    } catch (error) {
      console.log({ error })
    }
  })
})
