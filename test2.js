import React, { useEffect, useState } from "react";
import { Box, TextField, Button, ButtonGroup, Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

const CHABHI = "AIzaSyBXNDnDGQYT_gc8HOhSQ8t46UNdqNjXKIE";

export default function App() {
  const [url, setUrl] = useState("");
  const [mode, setMode] = useState("video");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    alert("Watch this short to know how it works.");
    setUrl(`https://www.youtube.com/embed/QqbCyc67e64`);
  }, []);

  const goFullscreen = () => {
    const iframe = document.getElementById("ytplayer");
    if (iframe?.requestFullscreen) iframe.requestFullscreen();
    else if (iframe?.webkitRequestFullscreen) iframe.webkitRequestFullscreen(); // Safari
    else if (iframe?.msRequestFullscreen) iframe.msRequestFullscreen(); // IE11
  };

  const createURL = (text) => {
    if (text.includes("&si=")) text = text.split("&si=")[0];
    if (text.includes("?si=")) text = text.split("?si=")[0];

    if (text.includes("&list=") || text.includes("?list=")) {
      const id = text.includes("&list=") ? text.split("&list=")[1] : text.split("?list=")[1];
      setUrl(`https://www.youtube.com/embed/videoseries?list=${id}`);
      return;
    }

    if (text.includes("?v=")) {
      const id = text.split("?v=")[1];
      setUrl(`https://www.youtube.com/embed/${id}`);
      return;
    }

    const index = text.lastIndexOf("/");
    const id = text.slice(index + 1);
    setUrl(`https://www.youtube.com/embed/${id}`);
  };

  const searchYouTube = async () => {
    if (!searchQuery) return;

    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
        searchQuery
      )}&type=video&maxResults=12&key=${CHABHI}`
    );
    const data = await res.json();
    setSearchResults(data.items || []);
  };

  const handleVideoClick = (videoId) => {
    setUrl(`https://www.youtube.com/embed/${videoId}`);
    setSearchResults([]); // hide results after selection
    setSearchQuery(""); // optional: clear search bar
  };

  return (
    <Box sx={{ padding: 2 }}>
      {/* Main URL Input */}
      <TextField
        sx={{ marginBlock: 1, width: "90%", alignSelf: "center" }}
        label="YouTube URL"
        variant="outlined"
        value={url}
        onChange={(event) => createURL(event.target.value)}
      />

      {/* YouTube Search Bar */}
      <TextField
        sx={{ marginBlock: 1, width: "90%", alignSelf: "center" }}
        label="Search YouTube"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") searchYouTube();
        }}
      />
      <Button variant="contained" sx={{ mb: 2 }} onClick={searchYouTube}>
        Search
      </Button>

      {/* Search Results Grid */}
      <Grid container spacing={2}>
        {searchResults.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id.videoId}>
            <Card
              sx={{ cursor: "pointer" }}
              onClick={() => handleVideoClick(item.id.videoId)}
            >
              <CardMedia
                component="img"
                height="140"
                image={item.snippet.thumbnails.medium.url}
                alt={item.snippet.title}
              />
              <CardContent>
                <Typography variant="body2">{item.snippet.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Controls */}
      <ButtonGroup sx={{ margin: 2 }}>
        <Button
          variant={mode === "video" ? "contained" : "outlined"}
          onClick={() => {
            setMode("video");
            goFullscreen();
          }}
        >
          Back-ground
        </Button>
        <Button
          variant={mode === "pip" ? "contained" : "outlined"}
          onClick={() => {
            setMode("pip");
            goFullscreen();
          }}
        >
          Video + PiP
        </Button>
      </ButtonGroup>

      {/* Video Player */}
      <Box
        sx={{
          width: "100vw",
          height: "80vh",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <iframe
          id="ytplayer"
          src={`${url}?enablejsapi=1&autoplay=1`}
          title="YouTube Embed"
          style={{
            width: "100%",
            height: "100%",
            border: "1px solid grey",
          }}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </Box>
    </Box>
  );
}


// backup 



import React, { useEffect, useState } from "react";
import { Box, TextField, Button, Alert, ButtonGroup } from "@mui/material";

export default function App() {
  const [url, setUrl] = useState("");
  const [mode,setMode]= useState('video')
  //https://youtube.com/shorts/QqbCyc67e64?si=lHS4cALjCmMFukZL

  useEffect(()=>{
    alert("Watch this short to know how it works.")
    setUrl(`https://www.youtube.com/embed/QqbCyc67e64`)
  },[])

  const goFullscreen = () => {
    const iframe = document.getElementById("ytplayer");
    if (iframe.requestFullscreen) iframe.requestFullscreen();
    else if (iframe.webkitRequestFullscreen) iframe.webkitRequestFullscreen(); // Safari
    else if (iframe.msRequestFullscreen) iframe.msRequestFullscreen(); // IE11
  };

  const createURL = (text) => {

    if (text.includes("&si="))
      text = text.split("&si=")[0]

    if (text.includes("?si="))
      text = text.split("?si=")[0]

    if (text.includes("&list=")) {
      let id = text.split("&list=")[1];
      setUrl(() => {
        // console.log("-=list=-", `https://www.youtube.com/embed/videoseries?list=${id}`);
        return `https://www.youtube.com/embed/videoseries?list=${id}`
      });
      return;
    }
    if (text.includes("?list=")) {
      let id = text.split("?list=")[1];
      setUrl(() => {
        // console.log("-=list=-", `https://www.youtube.com/embed/videoseries?list=${id}`);
        return `https://www.youtube.com/embed/videoseries?list=${id}`
      });
      return
    }
    if (text.includes("?v=")) {
      let id = text.split("?v=")[1];
      setUrl(() => {
        // console.log("-==-", `https://www.youtube.com/embed/${id}`);
        return `https://www.youtube.com/embed/${id}`
      });
      return
    }

    let index = text.lastIndexOf('/');
    let id= text.slice(index);
    setUrl(() => {
      console.log("-==-", `https://www.youtube.com/embed/${id}`);
      return `https://www.youtube.com/embed/${id}`
    });



  };


  return (
    <>
      <TextField
        sx={{
          marginBlock: 1,
          width: "90%",
          alignSelf: "center",
        }}
        id="outlined-basic"
        label="YouTube URL"
        variant="outlined"
        onChange={(event) => {
          createURL(event.target.value);
        }}
      />
 {/* Controls */}
 <ButtonGroup sx={{ margin: 2 }}>
        <Button
          variant={mode === "video" ? "contained" : "outlined"}
          onClick={() => {setMode("video");goFullscreen() }}
        >
          Back-ground
        </Button>
        <Button
          variant={mode === "pip" ? "contained" : "outlined"}
          onClick={() => {setMode("pip");goFullscreen()}}
        >
          Video + PiP
        </Button>
      </ButtonGroup>

      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width:  "100%",
            height:  "100%",
            transform: "none",
            transformOrigin: "center",
            transition: "transform 0.3s ease",
          }}
        >
          {url && mode == 'pip' && (
            <iframe
              // src={url}
              src={`${url}?enablejsapi=1&autoplay=1`}
              title="YouTube Embed"
              allow="autoplay; encrypted-media; picture-in-picture"
              style={{
                width: "100%",
                height: "100%",
                border: "1px solid grey",
              }}
              allowFullScreen={true}
            />
          )}

          {url && mode=='video' && (
            <iframe
              src={url}
              title="YouTube Embed"
              style={{
                width: "100%",
                height: "100%",
                border: "1px solid grey",
              }}
              allowFullScreen={true}
            />
          )}
        </Box>
      </Box>
    </>
  );
}








