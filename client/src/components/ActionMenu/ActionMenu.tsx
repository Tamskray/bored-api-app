import { ReactElement } from "react";

import { Action } from "../../types";

import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";

interface Props {
  actions: Action[];
}

const ActionMenu = ({ actions }: Props): ReactElement => {
  return (
    <Box
      sx={{
        height: 200,
        transform: "translateZ(0px)",
        flexGrow: 1,
        position: "fixed",
        bottom: 16,
        right: 16,
      }}
    >
      <SpeedDial
        ariaLabel="storage-pull-data-actions"
        icon={<SpeedDialIcon />}
        direction="up"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.onClick}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default ActionMenu;
