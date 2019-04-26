export class SaveMoneyModel {
  constructor(db) {
    this.db = db
  }
  async createNewSaveMoney({ name_want, point_money, now_money, id_user }) {
    try {
      const sqlInert = `insert into tb_saveMoney(name_want  , point_money , now_money , create_at , id_user) values (?,?,?,?,?)`
      const [rows] = await this.db.query(sqlInert, [
        name_want,
        point_money,
        now_money,
        +new Date(),
        id_user
      ])
      return rows
    } catch (error) {
      return Promise.reject(error)
    }
  }
  async createNewSaveMoneyTestCase({
    name_want,
    point_money,
    now_money,
    id_user,
    id_saveMoney
  }) {
    try {
      const sqlInert = `insert into tb_saveMoney(id_saveMoney , name_want  , point_money , now_money , create_at , id_user) values (? , ?,?,?,?,?)`
      const [rows] = await this.db.query(sqlInert, [
        id_saveMoney,
        name_want,
        point_money,
        now_money,
        +new Date(),
        id_user
      ])
      return rows
    } catch (error) {
      return Promise.reject(error)
    }
  }
  async addNewSaveMoneyExists(id_saveMoney, now_money) {
    try {
      const updateSaveMoneyNow = `update tb_saveMoney set now_money = now_money + ? where id_saveMoney=?`
      const [rows] = await this.db.query(updateSaveMoneyNow, [
        now_money,
        id_saveMoney
      ])
      return rows
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async deleteSaveMoney(id_saveMoney) {
    try {
      const deleteSaveMoneyV = `delete from tb_saveMoney where id_saveMoney = ?`
      const [rows] = await this.db.query(deleteSaveMoneyV, [id_saveMoney])
      return rows
    } catch (error) {
      return Promise.reject(error)
    }
  }
  async getAllSaveMoneyFromIdUser(id_user) {
    try {
      const getAllSaveMoney = `select * from tb_saveMoney where id_user = ?`
      const [rows] = await this.db.query(getAllSaveMoney, [id_user])
      return rows
    } catch (error) {
      return Promise.reject(error)
    }
  }
  async getOneSaveMoneyFromIdSaveMoney(id_saveMoney) {
    try {
      const getOnceSaveMoneyScript = `select * from tb_saveMoney where id_saveMoney = ?`
      const [rows] = await this.db.query(getOnceSaveMoneyScript, [id_saveMoney])
      return rows
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

// `name_want``id_saveMoney``point_money``now_money``create_at``id_user`
