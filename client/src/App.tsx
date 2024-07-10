import { useEffect, useState } from "react";

import { Idea, Achievements, CompletedChallenge } from "./types";

import IdeasList from "./components/IdeasList/IdeasList";
import Slider from "./components/Slider/Slider";
import AchievementsList from "./components/Achievements/AchievementsList";

import {
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import { formatTime } from "./utils";

import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function App() {
  const [myIdeasList, setMyIdeasList] = useState<Idea[]>([]);
  const [achievements, setAchievements] = useState<Achievements>({});
  const [completedIdeas, setCompletedIdeas] = useState<CompletedChallenge[]>(
    []
  );

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
      <Slider data={myIdeasList} myIdeaClickHandler={myIdeaClickHandler} />
      <AchievementsList achievements={achievements} />

      <Typography variant="h5" marginBottom={2}>
        Completed challenges
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Idea</StyledTableCell>
              <StyledTableCell>Category</StyledTableCell>
              <StyledTableCell>When</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {completedIdeas.map((row) => (
              <StyledTableRow key={row.idea}>
                <StyledTableCell>{row.idea}</StyledTableCell>
                <StyledTableCell>{row.category}</StyledTableCell>
                <StyledTableCell>{formatTime(row.completedAt)}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default App;
