import { ReactElement, useEffect, useState } from "react";

import { Idea } from "../../types";

import IdeaCard from "../Card/IdeaCard";
import { LeftNav, RightNav } from "./NavigationBtns";

import {
  Box,
  Stack,
  Slide,
  Typography,
  useMediaQuery,
  useTheme,
  Divider,
  CircularProgress,
} from "@mui/material";

interface Props {
  data: Idea[];
  myIdeaClickHandler: (idea: Idea) => void;
  loadingStorage: boolean;
}

type Direction = "right" | "left" | undefined;

const Slider = ({
  data: myIdeasList,
  myIdeaClickHandler,
  loadingStorage,
}: Props): ReactElement => {
  const [cards, setCards] = useState<ReactElement[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState<Direction>("left");

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const cardsPerPage = isSmallScreen ? 1 : 3;

  const totalPages = Math.ceil(myIdeasList.length / cardsPerPage);

  const duplicateCards = myIdeasList.map((idea) => (
    <IdeaCard
      key={idea.idea}
      idea={idea}
      ideaClickHandler={myIdeaClickHandler}
    />
  ));

  const title = "Ideas in my list";

  useEffect(() => {
    setCards(duplicateCards);

    if (duplicateCards.length > 0) setCurrentPage(0);
  }, [myIdeasList]);

  useEffect(() => {
    const maxPage = Math.ceil(myIdeasList.length / cardsPerPage) - 1;
    if (currentPage > maxPage) {
      setCurrentPage(maxPage);
    }
  }, [cardsPerPage, currentPage, myIdeasList.length]);

  const nextPageHandler = () => {
    setSlideDirection("left");
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPageHandler = () => {
    setSlideDirection("right");
    setCurrentPage((prevPage) => prevPage - 1);
  };

  if (loadingStorage) {
    return (
      <>
        <Typography variant="h5">{title}</Typography>
        <CircularProgress />
      </>
    );
  }

  if (myIdeasList.length === 0) {
    return (
      <>
        <Typography variant="h5">{title}t</Typography>
        <Typography variant="body1">The list is empty for now</Typography>
        <Divider sx={{ m: 3 }} />
      </>
    );
  }

  return (
    <>
      <Typography variant="h5">{title}</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
          height: "170px",
          overflowX: "hidden",
        }}
      >
        <LeftNav pageHandler={prevPageHandler} currentPage={currentPage} />

        {Array.from({ length: totalPages }, (_, pageIndex) => (
          <Box
            key={`page-${pageIndex}`}
            sx={{
              width: "100%",
              height: "100%",
              display: currentPage === pageIndex ? "flex" : "none",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Slide direction={slideDirection} in={currentPage === pageIndex}>
              <Stack
                spacing={2}
                direction="row"
                // alignContent="center"
                // justifyContent="center"
              >
                {cards.slice(
                  pageIndex * cardsPerPage,
                  pageIndex * cardsPerPage + cardsPerPage
                )}
              </Stack>
            </Slide>
          </Box>
        ))}

        <RightNav
          pageHandler={nextPageHandler}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </Box>
      <Typography variant="body1" color="text.primary">
        {currentPage + 1}/{totalPages}
      </Typography>
      <Divider sx={{ m: 3 }} />
    </>
  );
};

export default Slider;
