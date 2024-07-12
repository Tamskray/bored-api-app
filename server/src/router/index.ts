import { Router } from "express";

import ideas from "./ideas";
import achievements from "./achievements";
import completedIdeas from "./completedIdeas";

const router = Router();

export default (): Router => {
  ideas(router);
  achievements(router);
  completedIdeas(router);

  return router;
};
