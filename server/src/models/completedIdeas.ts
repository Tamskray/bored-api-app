import mongoose from "mongoose";

const completedIdeasSchema = new mongoose.Schema({
  idea: { type: "String", required: true },
  category: { type: "String", required: true },
  completedAt: { type: "Date", required: true },
});

export const CompletedIdeasModel = mongoose.model(
  "CompletedIdeas",
  completedIdeasSchema
);

export const getCompletedIdeas = () => CompletedIdeasModel.find();
export const addCompletedIdeas = (
  completedIdeas: { idea: string; category: string; completedAt: Date }[]
) => CompletedIdeasModel.insertMany(completedIdeas);
export const deleteAllCompletedIdeas = () => CompletedIdeasModel.deleteMany({});
