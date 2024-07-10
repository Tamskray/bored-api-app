import { ReactElement } from "react";

import { Achievements } from "../../types";

import { Box, Divider, Grid, Stack, Typography } from "@mui/material";

interface Props {
  achievements: Achievements;
}

const AchievementsList = ({ achievements }: Props): ReactElement => {
  return (
    <>
      <Box sx={{ mt: 2 }}>
        <Typography gutterBottom variant="h5">
          Achievements
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
