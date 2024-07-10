export type Idea = { idea: string; category: string };

export type CompletedChallenge = {
    idea: string; 
    category: string; 
    completedAt: Date
}

export type Achievements = {[category: string]: number}