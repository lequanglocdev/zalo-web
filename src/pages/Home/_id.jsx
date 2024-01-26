import React from "react";
import Container from "@mui/material/Container";
import TabBar from "./TabBar/TabBar";
import ContentChat from "./ContentChat/ContentChat";

const Home = () => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ height: "100vh", display: "flex" }}
    >
      <TabBar />
      <ContentChat />
    </Container>
  );
};

export default Home;
