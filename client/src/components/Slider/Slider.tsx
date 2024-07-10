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
} from "@mui/material";

interface Props {
  data: Idea[];
}

type Direction = "right" | "left" | undefined;

const Slider = ({ data: myDumbIdeaList }: Props): ReactElement => {
  const [cards, setCards] = useState<ReactElement[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState<Direction>("left");

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const cardsPerPage = isSmallScreen ? 1 : 3;

  const totalPages = Math.ceil(myDumbIdeaList.length / cardsPerPage);

  const duplicateCards = myDumbIdeaList.map((idea) => (
    <IdeaCard key={idea.idea} idea={idea} />
  ));

  useEffect(() => {
    setCards(duplicateCards);
  }, []);

  useEffect(() => {
    const maxPage = Math.ceil(myDumbIdeaList.length / cardsPerPage) - 1;
    if (currentPage > maxPage) {
      setCurrentPage(maxPage);
    }
  }, [cardsPerPage, currentPage, myDumbIdeaList.length]);

  const nextPageHandler = () => {
    setSlideDirection("left");
    // setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPageHandler = () => {
    setSlideDirection("right");
    // setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <>
      <Typography variant="h5">Ideas in my list</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
          height: "150px",
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
                alignContent="center"
                justifyContent="center"
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
    </>
  );
};

export default Slider;
