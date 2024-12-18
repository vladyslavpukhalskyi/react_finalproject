import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

import { fetchFromAPI } from '../../utils/fetchFromAPI';
import Sidebar from './components/Sidebar';
import Videos from './components/Videos';

const Feed = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState(categoryName || "New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (categoryName) setSelectedCategory(categoryName);

    fetchFromAPI(`search?part=snippet&q=${categoryName || selectedCategory}&maxResults=50`)
      .then((data) => setVideos(data.items))
      .catch((error) => console.error('Error fetching videos:', error));
  }, [categoryName, selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    navigate(`/category/${category}`);
  };

  useEffect(() => {
    document.body.classList.add('disable-scroll');
    return () => {
      document.body.classList.remove('disable-scroll');
    };
  }, []);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={handleCategoryChange}
        />

        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: '#fff' }}>
          Copyright 2024 PuMel Co.
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
          {selectedCategory} <span style={{ color: '#F31503' }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
