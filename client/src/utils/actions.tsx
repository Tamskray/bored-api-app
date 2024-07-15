import { Achievements, CompletedChallenge, Idea } from "../types";

import { storageDataHandler, pullDataHandler } from "./dataHandlers";

import SaveIcon from "@mui/icons-material/Save";
import GetAppIcon from "@mui/icons-material/GetApp";

export const createActions = (
  myIdeasList: Idea[],
  achievements: Achievements,
  completedIdeas: CompletedChallenge[],
  setMyIdeasList: (ideas: Idea[]) => void,
  setAchievements: (achievements: Achievements) => void,
  setCompletedIdeas: (completedIdeas: CompletedChallenge[]) => void
) => [
  {
    icon: <SaveIcon />,
    name: "Save",
    onClick: () => {
      storageDataHandler(myIdeasList, achievements, completedIdeas);
    },
  },
  {
    icon: <GetAppIcon />,
    name: "Pull",
    onClick: () => {
      pullDataHandler(setMyIdeasList, setAchievements, setCompletedIdeas);
    },
  },
];
