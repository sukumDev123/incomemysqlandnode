import { UserPresent } from "../presenters/users.present"

export const createNewUser = async (req, res, next) => {
  try {
    const db = req.mysql_db
    const res_data = await new UserPresent(db).createUser(req.body)
    res.json(res_data)
  } catch (error) {
    next(error)
  }
}

export const getByUser = async (req, res, next) => {
  try {
    const db = req.mysql_db
    const id_user = req.query.id_user
    const res_data = await new UserPresent(db).getUserData(id_user)
    res.json(res_data)
  } catch (error) {
    next(error)
  }
}

export const deleteByUser = async (req, res, next) => {
  try {
    const db = req.mysql_db
    const id_user = req.query.id_user
    const res_data = await new UserPresent(db).deleteUserData(id_user)
    res.json(res_data)
  } catch (error) {
    next(error)
  }
}

export const updateByUser = async (req, res, next) => {
  try {
    const db = req.mysql_db
    const id_user = req.query.id_user
    const res_data = await new UserPresent(db).updateUserData(id_user)
    res.json(res_data)
  } catch (error) {
    next(error)
  }
}
