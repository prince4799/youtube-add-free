
// import { Box, Button, ButtonGroup, Drawer, TextField, Typography } from "@mui/material";
// import RemoveIcon from "@mui/icons-material/Remove";
// import AddIcon from "@mui/icons-material/Add";
// import React, { useState, useEffect } from "react";
// import { TextFieldsOutlined } from "@mui/icons-material";
// import { useLogin, useSignUP } from "./utilities/customHooks";
// import TopBar from "./components/AppBar";
// import { AppForm } from "./components/AppForm";

// const useTime = () => {
//   const getCurrentTime = () => {
//     const date = new Date(); //;
//     const utcOffset = 5.5 * 60 * 60 * 1000; // IST is UTC +5:30
//     const istDate = new Date(date.getTime() + utcOffset);

//     return `${istDate.getUTCHours()}:${istDate.getUTCMinutes()}:${istDate.getUTCSeconds()}`;
//   };

//   const [currentTime, setCurrentTime] = useState(getCurrentTime);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTime(getCurrentTime());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const setMyTime = (timeString) => {
//     setCurrentTime(timeString);
//   };

//   return [currentTime, setMyTime];
// };

// export default function App() {
// console.log("running");


//   return (
//     <>
//     <TopBar/>
//     <AppForm/>
//     </>
//   );
// }


import React, { useEffect, useState } from "react";
import { Box, TextField, Button } from "@mui/material";

export default function App() {
  const [url, setUrl] = useState("");

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
              src={url}
              title="YouTube Embed"
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





