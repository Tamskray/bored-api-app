import { Router } from "express";

import { getAllIdeas, updateIdeas } from "../controllers/ideas";

export default (router: Router) => {
  router.get("/ideas", getAllIdeas);
  router.post("/ideas", updateIdeas);
};
