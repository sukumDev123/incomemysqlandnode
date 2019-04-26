import chai from "chai"
import chatHttp from "chai-http"
import { init } from "../../config/lib/express"
// chai.use(chatHttp)
// const expect = chai.expect
// const app = init()
const expect = chai.expect
const app = init()
describe("Get /users", () => {
  // it("users/newUser", done => {
  //   const dataBody = {
  //     name: "Test1",
  //     password: "test_",
  //     email: "test__",
  //     id: 100
  //   }
  //   chai
  //     .request(app)
  //     .post("/api/users/newUser")
  //     .send(dataBody)
  //     .then(res => {
  //       const bodys = res.body
  //       console.log(bodys)
  //       done()
  //     })
  //     .catch(err => {
  //       console.log(err)
  //       done()
  //     })
  // })
  // it("users/getAll", done => {
  //   chai
  //     .request(app)
  //     .get("/api/users/onceUser")
  //     .query({ id_user: 1 })
  //     .end(function(err, res) {
  //       expect(err).to.be.null
  //       expect(res).to.have.status(200)
  //       const datas = res.body.data
  //       expect(datas[0].name).to.equal("sukum")
  //       done()
  //     })
  // })
  // it("users/deleteUser", done => {
  //   chai
  //     .request(app)
  //     .delete("/api/users/deleteUser")
  //     .query({ id_user:  })
  //     .then(res => {
  //       console.log(res.body)
  //       done()
  //     })
  //     .catch(err => console.log(err))
  // })
})
