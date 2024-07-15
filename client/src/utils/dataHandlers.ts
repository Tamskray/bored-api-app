import axios from "axios";

import {
  AchievementResponse,
  Achievements,
  CompletedChallenge,
  Idea,
} from "../types";

export const storageDataHandler = async (
  myIdeasList: Idea[],
  achievements: Achievements,
  completedIdeas: CompletedChallenge[]
) => {
  try {
    await axios.post(`${import.meta.env.VITE_MY_API_URL}/ideas`, myIdeasList);
    await axios.post(
      `${import.meta.env.VITE_MY_API_URL}/achievements`,
      Object.entries(achievements).map(([category, count]) => ({
        category,
        count,
      }))
    );
    await axios.post(
      `${import.meta.env.VITE_MY_API_URL}/completed-ideas`,
      completedIdeas
    );

    console.log("Data stored successfully");
  } catch (error) {
    console.log(error);
  }
};

export const pullDataHandler = async (
  setMyIdeasList: (ideas: Idea[]) => void,
  setAchievements: (achievements: Achievements) => void,
  setCompletedIdeas: (completedIdeas: CompletedChallenge[]) => void
) => {
  try {
    const [ideasResponse, achievementsResponse, completedIdeasResponse] =
      await Promise.all([
        axios.get<Idea[]>(`${import.meta.env.VITE_MY_API_URL}/ideas`),
        axios.get<AchievementResponse[]>(
          `${import.meta.env.VITE_MY_API_URL}/achievements`
        ),
        axios.get<CompletedChallenge[]>(
          `${import.meta.env.VITE_MY_API_URL}/completed-ideas`
        ),
      ]);

    setMyIdeasList(ideasResponse.data);
    setAchievements(
      achievementsResponse.data.reduce((acc, achievement) => {
        acc[achievement.category] = achievement.count;
        return acc;
      }, {} as Achievements)
    );
    setCompletedIdeas(completedIdeasResponse.data);

    console.log("Data pulled successfully");
  } catch (error) {
    console.log(error);
  }
};
