import { Router } from "express";

import {
  getAllCompletedIdeas,
  updateCompletedIdeas,
} from "../controllers/completedIdeas";

export default (router: Router) => {
  router.get("/completed-ideas", getAllCompletedIdeas);
  router.post("/completed-ideas", updateCompletedIdeas);
};
