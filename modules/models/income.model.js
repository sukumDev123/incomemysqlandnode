const name_tb = `tb_income`
export class IncomeModel {
  constructor(db) {
    this.db = db
  }
  async getAllIncomeFromUser(id_user) {
    try {
      const sql = `select * from ${name_tb} where id_user = ? `
      const [rows] = await this.db.query(sql, [id_user])
      return rows
    } catch (error) {
      return Promise.reject(error)
    }
  }
  async getOnceIncomeFromidIncome(id_income) {
    try {
      const sql = `select * from ${name_tb} where id_income=?`
      const [rows] = await this.db.query(sql, [id_income])
      return rows
    } catch (error) {
      return Promise.reject(error)
    }
  }
  async createNewIncome({ id_type, detail, price, id_user }) {
    try {
      const sql = `insert into tb_income(id_type,detail,price , id_user,date_create) values (? , ? , ? , ? , ?)`
      const [rows] = await this.db.query(sql, [
        id_type,
        detail,
        price,
        id_user,
        +new Date()
      ])
      return rows
    } catch (error) {
      return Promise.reject(error)
    }
  }
  async deleteIncomeFromIdIncome(id_income) {
    try {
      const sql = `delete from tb_income where id_income = ?`
      const [rows] = await this.db.query(sql, [id_income])
      return rows
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

// `id_income``id_type``detail``price``date_create`
