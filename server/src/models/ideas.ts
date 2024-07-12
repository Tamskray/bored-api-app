import mongoose from "mongoose";

const ideasSchema = new mongoose.Schema({
  idea: { type: "String", required: true },
  category: { type: "String", required: true },
});

export const IdeasModel = mongoose.model("Ideas", ideasSchema);

export const getIdeas = () => IdeasModel.find();
export const addIdeas = (ideas: { idea: string; category: string }[]) =>
  IdeasModel.insertMany(ideas);
export const deleteAllIdeas = () => IdeasModel.deleteMany({});
