export type Idea = { idea: string; category: string };

export type CompletedChallenge = Idea & { completedAt: Date };

export type Achievements = { [category: string]: number };

export type AchievementResponse = {
  category: string;
  count: number;
};
