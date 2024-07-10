import { ReactElement } from "react";

import useFetch from "../../hooks/useFetch";

import { Idea } from "../../types";

import IdeaCard from "../Card/IdeaCard";
import SkeletonList from "./SkeletonList";

import { Stack, Button, Typography } from "@mui/material";

interface Props {
  title: string;
  data?: Idea[];
}

const IdeasList = ({ title, data }: Props): ReactElement => {
  const { data: freshIdeas, isLoading, error, request } = useFetch("");

  const getNewIdeasHandler = () => {
    request();
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
        {freshIdeas.map((idea) => (
          <IdeaCard key={idea.idea} idea={idea} />
        ))}
      </Stack>
      <Button onClick={getNewIdeasHandler} variant="contained" size="large">
        Get New Ideas
      </Button>
    </>
  );
};

export default IdeasList;
