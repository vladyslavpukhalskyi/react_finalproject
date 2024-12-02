import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import Videos from './Videos';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
      .catch((error) => console.error("Error fetching search results:", error));
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      {videos.length > 0 ? (
        <>
          <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
            Search Results for: <span style={{ color: '#F31503' }}>{searchTerm}</span>
          </Typography>
          <Videos videos={videos} />
        </>
      ) : (
        <Typography variant="h6" sx={{ color: 'gray', textAlign: 'center', mt: 2 }}>
          No results found for "<span style={{ color: '#F31503' }}>{searchTerm}</span>". Try searching for something else.
        </Typography>
      )}
    </Box>
  );
};

export default SearchFeed;
