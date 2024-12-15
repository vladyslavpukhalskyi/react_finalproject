import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import { fetchFromAPI } from '../../utils/fetchFromAPI';
import Videos from './components/Videos';

const Feed = ({ selectedCategory, setSelectedCategory }) => {
  const { categoryName } = useParams(); // отримуємо назву категорії з URL
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (categoryName) setSelectedCategory(categoryName);

    fetchFromAPI(`search?part=snippet&q=${categoryName || selectedCategory}&maxResults=50`)
      .then((data) => setVideos(data.items))
      .catch((error) => console.error('Error fetching videos:', error));
  }, [categoryName, selectedCategory]);

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
        {selectedCategory} <span style={{ color: '#F31503' }}>videos</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default Feed;
