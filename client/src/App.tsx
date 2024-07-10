import { Idea } from "./types";

import IdeasList from "./components/IdeasList/IdeasList";
import Slider from "./components/Slider/Slider";

import { Button, Stack, Divider } from "@mui/material";

const dumbIdeasData: Idea[] = [
  { idea: "Learn how to fold a paper crane", category: "Education" },
  { idea: "Make a bucket list", category: "Busywork" },
  { idea: "Do something you used to do as a kid", category: "Relaxation" },
  { idea: "Listen to your favorite album", category: "Music" },
];

const myDumbIdeaList: Idea[] = [
  { idea: "Make homemade ice cream" },
  { idea: "Listen to your favorite album", category: "Music" },
  { idea: "Clean out your cat2" },
  { idea: "Clean out your cat3" },
  { idea: "Clean out your cat4" },
  { idea: "Clean out your cat5" },
  { idea: "Clean out your catt" },
  { idea: "Clean out your catttt" },
  { idea: "Clean out your cat55" },
  { idea: "Clean out your cat23" },
  { idea: "Clean out your cat11" },
  { idea: "Clean out your cat12" },
  { idea: "Clean out your cat13" },
  { idea: "Clean out your cat122" },
];

function App() {
  return (
    <>
      <IdeasList title="Choose fresh ideas to do" />

      <Divider sx={{ m: 3 }} />

      <Slider data={myDumbIdeaList} />

      <Divider sx={{ m: 2 }} />

      <Stack
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Button variant="outlined">Click</Button>
      </Stack>
    </>
  );
}

export default App;
