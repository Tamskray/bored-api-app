export type Idea = { idea: string; category: string };

export type CompletedChallenge = Idea & { completedAt: Date }

export type Achievements = {[category: string]: number}