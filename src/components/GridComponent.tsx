import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";

interface Position {
  left: number;
  top: number;
  width: number;
  height: number;
}

interface WordData {
  word: string;
  color: string;
  position: Position;
}

const GridContainer = styled("div")({
  position: "relative",
  width: "100%",
  height: "100vh",
});

const WordCard = styled(Card)<{ cardColor: string }>(({ theme, cardColor }) => ({
  position: "absolute",
  backgroundColor: cardColor,
  color: cardColor === '#000000' ? '#FFFFFF' : theme.palette.getContrastText(cardColor),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: theme.shadows[6],
  },
}));

const GridComponent: React.FC = () => {
  const [data, setData] = useState<WordData[]>([]);

  useEffect(() => {
    // Retrieve the data from localStorage
    const storedData = localStorage.getItem("hintData");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  return (
    <GridContainer>
      {data.length > 0 ? (
        data.map((item, index) => (
          <WordCard
            key={index}
            cardColor={item.color === 'black' ? '#000000' : (item.color === 'red' ? '#FF0000' : (item.color === 'blue' ? '#0000FF' : (item.color === 'gray' ? '#808080' : item.color))) }
            style={{
              left: item.position.left,
              top: item.position.top,
              width: item.position.width,
              height: item.position.height,
            }}
          >
            <CardContent>
              <Typography variant="h5" align="center">
                {item.word}
              </Typography>
            </CardContent>
          </WordCard>
        ))
      ) : (
        <Typography variant="h6" align="center" sx={{ marginTop: '20%' }}>
          No data available.
        </Typography>
      )}
    </GridContainer>
  );
};

export default GridComponent;
