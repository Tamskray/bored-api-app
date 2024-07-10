import { ReactElement } from "react";

import { Idea } from "../../types";

import {
  Card,
  CardActionArea,
  Typography,
  Divider,
  CardContent,
} from "@mui/material";

interface Props {
  idea: Idea;
}

function IdeaCard({ idea }: Props): ReactElement {
  const onClickHandler = () => {
    console.log(idea.idea, idea.category);
  };

  return (
    <Card
      key={idea.idea}
      variant="outlined"
      sx={{ maxWidth: 200, minWidth: 120 }}
    >
      <CardActionArea onClick={onClickHandler}>
        <CardContent>
          <Typography gutterBottom variant="body1" component="div">
            {idea.idea}
          </Typography>

          {idea?.category && (
            <>
              <Divider />
              <Typography
                sx={{ width: "100%" }}
                variant="h6"
                color="text.primary"
              >
                {idea.category}
              </Typography>
            </>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default IdeaCard;
