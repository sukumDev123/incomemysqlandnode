export class UserModel {
  constructor(database) {
    this.db = database
  }

  async createNewUser({ name, password, email }) {
    try {
      const insertNewUser = `INSERT INTO tb_users(name , password , email) values (?,?,?)`
      const [rows] = await this.db.query(insertNewUser, [name, password, email])
      return rows
    } catch (error) {
      return Promise.reject(error)
    }
  }
  async checkUserIsDontHave(email) {
    try {
      const scriptCheck = `SELECT  email from tb_users where email = ?`
      const [rows] = await this.db.query(scriptCheck, [email])
      return rows.length
    } catch (error) {
      return Promise.reject(error)
    }
  }
  async getOnceUser(_id_user) {
    try {
      const selectUser = `SELECT * FROM tb_users WHERE id_user = ?`
      const [rows] = await this.db.query(selectUser, [_id_user])
      return rows
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async deleteOnceUser(_id_user) {
    try {
      const delete_user = `DELETE FROM tb_users WHERE id_user = ?`
      const [rows] = await this.db.query(delete_user, [_id_user])
      return rows
    } catch (error) {
      return Promise.reject(error)
    }
  }
  async updateOnceUser(_id_user, { name, email }) {
    try {
      const update_data = `UPDATE tb_users SET name = ? , email = ? WHERE id_user = ?`
      const [rows] = await this.db.query(update_data, [name, email, _id_user])
      return rows
    } catch (error) {
      return Promise.reject(error)
    }
  }
}
