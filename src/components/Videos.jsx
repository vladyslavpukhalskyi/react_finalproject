import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";


const Videos = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap="wrap"
    justifyContent="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}

    </Stack>
  )
}

export default Videos

// import React from 'react';

// const Videos = ({ videos }) => {
//   console.log(videos);

//   return (
//     <div>
//       {videos?.length ? (
//         videos.map((video, index) => (
//           <div key={index}>
//             {/* Відображення інформації про відео */}
//             <h3>{video.snippet.title}</h3>
//             <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
//           </div>
//         ))
//       ) : (
//         <p>No videos found</p>
//       )}
//     </div>
//   );
// };

// export default Videos;