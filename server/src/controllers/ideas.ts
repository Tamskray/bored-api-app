import { Request, Response } from "express";

import { addIdeas, deleteAllIdeas, getIdeas } from "../models/ideas";

export const getAllIdeas = async (req: Request, res: Response) => {
  try {
    const ideas = await getIdeas();
    return res.status(200).json(ideas);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const updateIdeas = async (req: Request, res: Response) => {
  try {
    const ideas = req.body;
    await deleteAllIdeas();

    const newIdeas = await addIdeas(ideas);
    return res.status(200).json(newIdeas);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
