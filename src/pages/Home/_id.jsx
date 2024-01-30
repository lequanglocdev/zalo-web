import React from "react";
import Container from "@mui/material/Container";
import TabBar from "./TabBar/TabBar";
import ContentChat from "./ContentChat/ContentChat";
import { mockData } from "../../apis/mock-data";
const Home = () => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ height: "100vh", display: "flex" }}
    >
      <TabBar message = {mockData?.message}/>
      <ContentChat />
    </Container>
  );
};

export default Home;
