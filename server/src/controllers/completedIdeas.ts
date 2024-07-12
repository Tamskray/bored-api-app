import { Request, Response } from "express";

import {
  addCompletedIdeas,
  deleteAllCompletedIdeas,
  getCompletedIdeas,
} from "../models/completedIdeas";

export const getAllCompletedIdeas = async (req: Request, res: Response) => {
  try {
    const completedIdeas = await getCompletedIdeas();
    return res.status(200).json(completedIdeas);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const updateCompletedIdeas = async (req: Request, res: Response) => {
  try {
    const completedIdeas = req.body;
    await deleteAllCompletedIdeas();

    const newCompletedIdeas = await addCompletedIdeas(completedIdeas);
    return res.status(200).json(newCompletedIdeas);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
