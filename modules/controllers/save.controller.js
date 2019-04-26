export const createNewSaveMoney = async (req, res, next) => {
  try {
    const zip = req.body
    const msg = await presenterSave.createNewSaveMoney(zip)
    res.json(msg)
  } catch (error) {
    next(error)
  }
}

export const getAllSaveMoney = async (req, res, next) => {
  try {
    const { id_user } = req.query
    const datas = await presenterSave.getAllSaveMoneyDataFromIdUser(id_user)
    res.json(datas)
  } catch (error) {
    next(error)
  }
}
export const getOnceSaveMoney = async (req, res, next) => {
  try {
    const { id_saveMoney } = req.query
    const data = await presenterSave.getOnceSaveMoneyDataFromIdSaveMoney(
      id_saveMoney
    )
    res.json(data)
  } catch (error) {
    next(error)
  }
}

export const deleteSaveMoneyData = async (req, res, next) => {
  try {
    const { id_saveMoney } = req.query
    const msg = await presenterSave.deleteSaveMoney(id_saveMoney)
    res.json(msg)
  } catch (error) {
    next(error)
  }
}
