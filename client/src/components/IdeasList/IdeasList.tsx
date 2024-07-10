import {
  Dispatch,
  ReactElement,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import useFetch from "../../hooks/useFetch";

import { Idea } from "../../types";

import IdeaCard from "../Card/IdeaCard";
import SkeletonList from "./SkeletonList";

import { Stack, Button, Typography, Divider } from "@mui/material";

interface Props {
  myIdeasList: Idea[];
  setMyIdeasList: Dispatch<SetStateAction<Idea[]>>;
}

const IdeasList = ({ myIdeasList, setMyIdeasList }: Props): ReactElement => {
  const { data: freshIdeas, isLoading, error, request } = useFetch("");
  const [displayedIdeas, setDisplayedIdeas] = useState<Idea[]>([]);

  const title = "Choose fresh ideas to do";

  useEffect(() => {
    if (freshIdeas && freshIdeas.length > 0) {
      setDisplayedIdeas(freshIdeas.slice(0, 4));
    }
  }, [freshIdeas]);

  const getNewIdeasHandler = () => {
    request();
  };

  const ideaClickHandler = (idea: Idea) => {
    if (!myIdeasList.includes(idea)) {
      setMyIdeasList([...myIdeasList, idea]);
    }

    const updatedDisplayedIdeas = displayedIdeas.filter(
      (item) => item !== idea
    );
    setDisplayedIdeas(updatedDisplayedIdeas);

    if (updatedDisplayedIdeas.length === 0) {
      request();
    }
  };

  if (isLoading) {
    return <SkeletonList title={title} />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Typography variant="h5">{title}</Typography>
      <Stack
        spacing={{ xs: 1, md: 4 }}
        direction={{ xs: "column", sm: "row" }}
        justifyContent="center"
        alignItems="center"
        m={1}
      >
        {displayedIdeas.map((idea) => (
          <IdeaCard
            key={idea.idea}
            idea={idea}
            ideaClickHandler={ideaClickHandler}
          />
        ))}
      </Stack>
      <Button onClick={getNewIdeasHandler} variant="contained" size="large">
        Get New Ideas
      </Button>
      <Divider sx={{ m: 3 }} />
    </>
  );
};

export default IdeasList;
