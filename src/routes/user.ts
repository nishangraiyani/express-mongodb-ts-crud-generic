import { Router } from "express";
import { GenericService } from "../services/generic.service";
import { UserModel, userSchema } from "../models/user.model";
import { UserService } from "../services/user.service";

const router = Router();
const userServices = new UserService(UserModel);

router.post("/", userServices.create);

router.get("/", userServices.getAll);

router.get("/:id", userServices.getById);

router.put("/:id", userServices.update);

router.delete("/:id", userServices.delete);

export const userRouter = router;
