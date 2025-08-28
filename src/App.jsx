

import React, { useEffect, useState } from "react";
import { Box, TextField, Button, Alert } from "@mui/material";

export default function App() {
  const [url, setUrl] = useState("");
  //https://youtube.com/shorts/QqbCyc67e64?si=lHS4cALjCmMFukZL

  useEffect(()=>{
    alert("Watch this short to know how it works.")
    setUrl(`https://www.youtube.com/embed/QqbCyc67e64`)
  },[])

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
          {url && (
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
              allowFullScreen
            />
          )}
        </Box>
      </Box>
    </>
  );
}





