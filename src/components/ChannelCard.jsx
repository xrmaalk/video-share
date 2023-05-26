// eslint-disable-next-line
import { Link } from "react-router-dom";
// eslint-disable-next-line
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
// eslint-disable-next-line
import { CheckCircle } from "@mui/icons-material";
// eslint-disable-next-line
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail }) => (
  <Box
    sx={{
      boxShadow: "none",
      borderRadius: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: { xs: "100%", md: "555px" },
      height: "326px",
      margin: "auto",
      marginTop: "-93px",
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <CardMedia
          image={
            channelDetail?.snippet?.thumbnails?.medium?.url ||
            demoProfilePicture
          }
          alt={channelDetail?.snippet?.title}
          sx={{
            borderRadius: "50%",
            height: "180px",
            width: "180px",
            border: ".25rem solid #e3e3e3",
            marginTop: 12,
          }}
        />
        <Typography variant="h6" sx={{ mt: "1rem" }}>
          {channelDetail?.snippet?.title}
          <CheckCircle sx={{ fontSize: 16, color: "#1e1e", ml: "5px" }} />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography variant="h6" sx={{ mt: "1rem" }}>
            {parseInt(
              channelDetail?.statistics?.subscriberCount
            ).toLocaleString()}{" "}
            subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;
