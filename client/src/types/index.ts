import { ReactNode } from "react";

export type Idea = { idea: string; category: string };

export type CompletedChallenge = Idea & { completedAt: Date };

export type Achievements = { [category: string]: number };

export type AchievementResponse = {
  category: string;
  count: number;
};

export type Action = {
  icon: ReactNode;
  name: string;
  onClick: () => void;
};
