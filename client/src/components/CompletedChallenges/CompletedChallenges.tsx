import { ReactElement } from "react";

import { CompletedChallenge } from "../../types";

import { formatTime } from "../../utils/formatTime";

import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  CircularProgress,
} from "@mui/material";

import { StyledTableCell, StyledTableRow } from "./StyledTableElements";

interface Props {
  completedIdeas: CompletedChallenge[];
  loadingStorage: boolean;
}

const CompletedChallenges = ({
  completedIdeas,
  loadingStorage,
}: Props): ReactElement => {
  const title = "Completed challenges";

  if (loadingStorage) {
    return (
      <>
        <Typography variant="h5">{title}</Typography>
        <CircularProgress />
      </>
    );
  }

  if (completedIdeas.length === 0) {
    return (
      <>
        <Typography variant="h5" marginBottom={2}>
          {title}
        </Typography>
        <Typography variant="body1" marginBottom={2}>
          No completed challenges yet
        </Typography>
      </>
    );
  }

  return (
    <>
      <Typography variant="h5" marginBottom={2}>
        {title}
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
};

export default CompletedChallenges;
