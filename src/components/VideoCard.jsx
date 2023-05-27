import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import Grid from "@mui/material/Grid";
import { CheckCircle } from "@mui/icons-material";

import {
  // eslint-disable-next-line
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  // console.log(videoId, snippet);
  return (
    <Card
      sx={{
        width: { md: "400px", xs: "400px" },
        boxShadow: "none",
        borderRadius: "50px",
        ml: ".65rem",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 400, height: 228 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "100px" }}>
        <Grid container direction="column">
          <Grid item>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
              <Typography variant="subtitle1" fontWeight="bold" color="#fff">
                {snippet?.title.slice(0, 49) || demoVideoTitle.slice(0, 60)}
              </Typography>
            </Link>
          </Grid>
          <Grid item sx={{ mt: "10px" }}>
            <Link
              to={
                snippet?.channelId
                  ? `/channel/${snippet?.channelId}`
                  : demoChannelUrl
              }
            >
              <Typography variant="subtitle2" fontWeight="bold" color="gray">
                {snippet?.channelTitle || demoChannelTitle}
                <CheckCircle sx={{ fontSize: 12, color: "#1e1e", ml: "5px" }} />
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
