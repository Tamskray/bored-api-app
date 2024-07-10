import { ReactElement } from "react";

import {
  Button,
  CircularProgress,
  Divider,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";

interface Props {
  title: string;
}

const SkeletonList = ({ title }: Props): ReactElement => {
  return (
    <>
      <Typography variant="h5">{title}</Typography>
      <CircularProgress />

      <Stack
        spacing={{ xs: 1, md: 4 }}
        direction={{ xs: "column", sm: "row" }}
        justifyContent="center"
        alignItems="center"
        m={1}
      >
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} variant="rectangular" width={160} height={120} />
        ))}
      </Stack>
      <Button variant="contained" size="large">
        Get New Ideas
      </Button>
      <Divider sx={{ m: 3 }} />
    </>
  );
};

export default SkeletonList;
