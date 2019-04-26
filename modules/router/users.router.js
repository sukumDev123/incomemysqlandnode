import {
  getByUser,
  updateByUser,
  deleteByUser,
  createNewUser
} from "../controllers/users.controller"

export const user_router = router => {
  router.get("/onceUser", getByUser)
  router.post("/newUser", createNewUser)
  router.put("/updateUser", updateByUser)
  router.delete("/deleteUser", deleteByUser)
  return router
}
