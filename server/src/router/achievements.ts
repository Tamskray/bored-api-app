import { Router } from "express";

import {
  getAllAchievements,
  updateAchievements,
} from "../controllers/achievements";

export default (router: Router) => {
  router.get("/achievements", getAllAchievements);
  router.post("/achievements", updateAchievements);
};
