import * as bC from "../controllers/bills.controller"

export const bills_router = router => {
  router.post("/createNewBill", bC.createNewBill)
  router.get("/getAllId", bC.getAllBill)
  router.put("/updateMoneyPayBill", bC.updateBillMoney)
  router.put("/updateBilldata", bC.updateAllDataOfBill)
  // router.put("/updateDateOfBillBuy" , bC.)
  router.delete("/deleteBillData", bC.deletDataFromBill)
  return router
}
