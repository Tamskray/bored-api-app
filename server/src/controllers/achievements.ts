import { Request, Response } from "express";

import {
  addAchievements,
  deleteAllAchievements,
  getAchievements,
} from "../models/achievements";

export const getAllAchievements = async (req: Request, res: Response) => {
  try {
    const achievements = await getAchievements();
    return res.status(200).json(achievements);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const updateAchievements = async (req: Request, res: Response) => {
  try {
    const achievements = req.body;
    await deleteAllAchievements();

    const newAchievements = await addAchievements(achievements);
    return res.status(200).json(newAchievements);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
