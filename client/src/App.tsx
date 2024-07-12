import { ReactElement } from "react";

import axios from "axios";

import useStorageState from "./hooks/useStorageState";

import {
  Idea,
  Achievements,
  CompletedChallenge,
  AchievementResponse,
} from "./types";

import IdeasList from "./components/IdeasList/IdeasList";
import Slider from "./components/Slider/Slider";
import AchievementsList from "./components/Achievements/AchievementsList";
import CompletedChallenges from "./components/CompletedChallenges/CompletedChallenges";
import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";

import SaveIcon from "@mui/icons-material/Save";
import GetAppIcon from "@mui/icons-material/GetApp";

function App(): ReactElement {
  const [myIdeasList, setMyIdeasList, loadingIdeas] = useStorageState<Idea[]>(
    "myIdeasList",
    []
  );
  const [achievements, setAchievements, loadingAchievements] =
    useStorageState<Achievements>("achievements", {});
  const [completedIdeas, setCompletedIdeas, loadingCompletedIdeas] =
    useStorageState<CompletedChallenge[]>("completedIdeas", []);

  const myIdeaClickHandler = (idea: Idea) => {
    setMyIdeasList(myIdeasList.filter((item) => item !== idea));

    setAchievements((prevCategories) => {
      const category = idea.category;
      const newCount = (prevCategories[category] || 0) + 1;
      return {
        ...prevCategories,
        [category]: newCount,
      };
    });

    const completedIdea = {
      ...idea,
      completedAt: new Date(),
    };

    setCompletedIdeas((prevCompletedIdeas) => [
      ...prevCompletedIdeas,
      completedIdea,
    ]);
  };

  const storageDataHandler = async () => {
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

  const pullDataHandler = async () => {
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

  const actions = [
    {
      icon: <SaveIcon />,
      name: "Save",
      onClick: () => {
        storageDataHandler();
      },
    },
    {
      icon: <GetAppIcon />,
      name: "Pull",
      onClick: () => {
        pullDataHandler();
      },
    },
  ];

  return (
    <>
      <Box
        sx={{
          height: 200,
          transform: "translateZ(0px)",
          flexGrow: 1,
          position: "fixed",
          bottom: 16,
          right: 16,
        }}
      >
        <SpeedDial
          ariaLabel="storage-pull-data-actions"
          icon={<SpeedDialIcon />}
          direction="up"
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={action.onClick}
            />
          ))}
        </SpeedDial>
      </Box>

      <IdeasList myIdeasList={myIdeasList} setMyIdeasList={setMyIdeasList} />
      <Slider
        data={myIdeasList}
        myIdeaClickHandler={myIdeaClickHandler}
        loadingStorage={loadingIdeas}
      />
      <AchievementsList
        achievements={achievements}
        loadingStorage={loadingAchievements}
      />
      <CompletedChallenges
        completedIdeas={completedIdeas}
        loadingStorage={loadingCompletedIdeas}
      />
    </>
  );
}

export default App;
