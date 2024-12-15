import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import Layout from "./common/Layout";
import { Feed, VideoDetail, ChannelDetail, SearchFeed } from "./common";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            }
          >
            <Route
              index
              element={
                <Feed
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              }
            />
            <Route path="video/:id" element={<VideoDetail />} />
            <Route path="channel/:id" element={<ChannelDetail />} />
            <Route path="search/:searchTerm" element={<SearchFeed />} />
            <Route
              path="category/:categoryName"
              element={
                <Feed
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              }
            />
          </Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
