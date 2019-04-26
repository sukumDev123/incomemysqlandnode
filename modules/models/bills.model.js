export class BillModel {
  constructor(db) {
    this.db = db
  }

  async createBill({ name_bill, price_bill, id_users, detail }) {
    try {
      const scriptInsert = `INSERT INTO tb_bill(name_bill , price_bill , id_users , detail,create_at) VALUES (?,?,?,? , ?)`
      const [rows] = await this.db.query(scriptInsert, [
        name_bill,
        price_bill,
        id_users,
        detail,
        +new Date()
      ])
      return rows
    } catch (error) {
      return Promise.reject(error)
    }
  }
  async createBillForTestCase({
    id_bill,
    name_bill,
    price_bill,
    id_users,
    detail
  }) {
    try {
      const scriptInsert = `INSERT INTO tb_bill(id_bill , name_bill , price_bill , id_users , detail , create_at) VALUES (?,?,?,?,? , ?)`
      const [rows] = await this.db.query(scriptInsert, [
        id_bill,
        name_bill,
        price_bill,
        id_users,
        detail,
        +new Date()
      ])
      return rows
    } catch (error) {
      return Promise.reject(error)
    }
  }
  async getOnceBillByIdBill(_id_bill) {
    try {
      const sql = "SELECT * FROM tb_bill where id_bill = ?"
      const [rows] = await this.db.query(sql, [_id_bill])
      return rows
    } catch (error) {
      return Promise.reject(error)
    }
  }
  async getAllBillById(id_users) {
    try {
      const scriptGetData = `SELECT * FROM tb_bill WHERE id_users = ?`
      const [rows] = await this.db.query(scriptGetData, [id_users])
      return rows
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async updateNewBillByIdAndMoney(_id_bill, money_) {
    try {
      const scriptsMoneyBill =
        "UPDATE tb_bill SET price_bill = ? WHERE id_bill = ?"
      const [rows] = await this.db.query(scriptsMoneyBill, [money_, _id_bill])
      return rows
    } catch (error) {
      return Promise.reject(error)
    }
  }
  async updateBillData({ name_bill, detail }, _id_bill) {
    try {
      const scriptUpdateBill =
        "UPDATE tb_bill SET name_bill = ? , detail = ? WHERE id_bill = ?"
      const [rows] = await this.db.query(scriptUpdateBill, [
        name_bill,
        detail,
        _id_bill
      ])
      return rows
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async deleteBillData(_id_bill) {
    try {
      const scriptDeleteBill = "DELETE FROM tb_bill WHERE id_bill = ? "
      const [rows] = await this.db.query(scriptDeleteBill, [_id_bill])
      return rows
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async buyBill(_id_bill) {
    try {
      const scriptBillUpdate =
        "UPDATE tb_bill set create_at = ? WHERE id_bill = ?"
      const [rows] = await this.db.query(scriptBillUpdate, [
        +new Date(),
        _id_bill
      ])
      return rows
    } catch (error) {
      return Promise.reject(error)
    }
  }
}
