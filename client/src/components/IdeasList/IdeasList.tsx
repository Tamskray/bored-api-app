import { ReactElement } from "react";

import { Idea } from "../../types";

import IdeaCard from "../Card/IdeaCard";

import Stack from "@mui/material/Stack";

interface Props {
  title: string;
  data: Idea[];
}

const IdeasList = ({ title, data }: Props): ReactElement => {
  return (
    <>
      <h2>{title}</h2>
      <Stack
        spacing={{ xs: 2, md: 4 }}
        direction={{ xs: "column", sm: "row" }}
        justifyContent="center"
        alignItems="center"
        m={2}
      >
        {data.map((idea) => (
          <IdeaCard idea={idea} />
        ))}
      </Stack>
    </>
  );
};

export default IdeasList;
