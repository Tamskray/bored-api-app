import { ReactElement } from "react";

import { Idea } from "../../types";

import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";

interface Props {
  idea: Idea;
}

function IdeaCard({ idea }: Props): ReactElement {
  return (
    <Card
      key={idea.idea}
      sx={{ maxWidth: 200, minWidth: 100, p: 2 }}
      variant="outlined"
    >
      <Typography gutterBottom variant="body1" component="div">
        {idea.idea}
      </Typography>

      {idea.category && (
        <>
          <Divider />
          <Typography variant="h6" color="text.primary">
            {idea.category}
          </Typography>
        </>
      )}
    </Card>
  );
}

export default IdeaCard;
