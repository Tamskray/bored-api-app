import mongoose from "mongoose";

const achievementsSchema = new mongoose.Schema({
  category: { type: "String", required: true },
  count: { type: "Number", required: true },
});

export const AchievementsModel = mongoose.model(
  "Achievements",
  achievementsSchema
);

export const getAchievements = () => AchievementsModel.find();
export const addAchievements = (
  achievements: { category: string; count: number }[]
) => AchievementsModel.insertMany(achievements);
export const deleteAllAchievements = () => AchievementsModel.deleteMany({});
