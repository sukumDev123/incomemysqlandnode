import {
  getAllSaveMoney,
  getOnceSaveMoney,
  createNewSaveMoney,
  deleteSaveMoneyData
} from "../controllers/save.controller"

export const saveMoneyRouter = router => {
  router.get("/getAllSaveMoneyData", getAllSaveMoney)
  router.get("/getOnceSaveData", getOnceSaveMoney)
  router.post("/createNewSaveDataMoney", createNewSaveMoney)
  router.delete("/deleteSaveMoney", deleteSaveMoneyData)
  return router
}
