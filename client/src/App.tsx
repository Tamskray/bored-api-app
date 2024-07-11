import { ReactElement } from "react";

import useStorageState from "./hooks/useStorageState";

import { Idea, Achievements, CompletedChallenge } from "./types";

import IdeasList from "./components/IdeasList/IdeasList";
import Slider from "./components/Slider/Slider";
import AchievementsList from "./components/Achievements/AchievementsList";
import CompletedChallenges from "./components/CompletedChallenges/CompletedChallenges";

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

  return (
    <>
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
