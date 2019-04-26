import * as bC from "../controllers/bills.controller"

export const bills_router = router => {
  router.post("/createNewBill", bC.createNewBill)
  router.get("/getAllId", bC.getAllBill)

  return router
}
