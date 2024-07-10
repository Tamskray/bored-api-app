import { IconButton } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

interface Props {
  pageHandler: () => void;
  currentPage: number;
  totalPages?: number;
}

export const LeftNav = ({ pageHandler, currentPage }: Props) => {
  return (
    <IconButton
      onClick={pageHandler}
      sx={{ margin: 1 }}
      disabled={currentPage === 0}
    >
      <NavigateBeforeIcon />
    </IconButton>
  );
};

export const RightNav = ({
  pageHandler,
  currentPage,
  totalPages = 0,
}: Props) => {
  return (
    <IconButton
      onClick={pageHandler}
      sx={{ margin: 1 }}
      disabled={currentPage >= totalPages - 1}
    >
      <NavigateNextIcon />
    </IconButton>
  );
};
