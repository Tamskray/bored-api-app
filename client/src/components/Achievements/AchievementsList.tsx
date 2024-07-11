import { ReactElement } from "react";

import { Achievements } from "../../types";

import {
  Box,
  CircularProgress,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

interface Props {
  achievements: Achievements;
  loadingStorage: boolean;
}

const AchievementsList = ({
  achievements,
  loadingStorage,
}: Props): ReactElement => {
  const title = "Achievements";

  if (loadingStorage) {
    return (
      <>
        <Typography variant="h5">{title}</Typography>
        <CircularProgress />
      </>
    );
  }

  if (Object.keys(achievements).length === 0) {
    return (
      <>
        <Typography variant="h5" marginBottom={2}>
          {title}
        </Typography>
        <Typography variant="body1" marginBottom={2}>
          No Achievements yet
        </Typography>
        <Divider sx={{ m: 3 }} />
      </>
    );
  }

  return (
    <>
      <Box sx={{ mt: 2 }}>
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {Object.entries(achievements).map(([category, count]) => (
            <Grid item key={category} xs={4} sm={3}>
              <Stack direction="column" alignItems="center" spacing={1}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "primary.main",
                    color: "primary.contrastText",
                  }}
                >
                  <Typography variant="h6">{count}</Typography>
                </Box>
                <Typography variant="body2">{category}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Divider sx={{ m: 3 }} />
    </>
  );
};

export default AchievementsList;
