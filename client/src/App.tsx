import { Idea } from "./types";

import IdeasList from "./components/IdeasList/IdeasList";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Divider } from "@mui/material";

const dumbIdeasData: Idea[] = [
  { idea: "Learn how to fold a paper crane", category: "Education" },
  { idea: "Make a bucket list", category: "Busywork" },
  { idea: "Do something you used to do as a kid", category: "Relaxation" },
  { idea: "Listen to your favorite album", category: "Music" },
];

const myDumbIdeaList: Idea[] = [
  { idea: "Make homemade ice cream" },
  { idea: "Listen to your favorite album", category: "Music" },
  { idea: "Clean out your cat" },
];

function App() {
  return (
    <>
      <IdeasList title="Choose fresh ideas to do" data={dumbIdeasData} />

      <Divider sx={{ m: 3 }} />

      <IdeasList title="Ideas in my list" data={myDumbIdeaList} />

      <Divider sx={{ m: 2 }} />

      <Stack
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Button variant="contained" size="large">
          Click
        </Button>
        <Button variant="outlined">Click</Button>
      </Stack>
    </>
  );
}

export default App;
