
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


import React, { useState } from "react";
import { Box, TextField } from "@mui/material";

// let id='jB2MW5ZR8qU'

export default function App() {
  const [id, setId]=useState('vqcmef3-MukVkkAn')
let url=`https://www.youtube.com/embed/${id}`
let url2='https://blog.logrocket.com/building-structuring-node-js-mvc-application/'
  return (
    <>
     <TextField
                sx={{
                  marginBlock: 1,
                  width: '90%',
                  alignSelf: 'center',
              
                }}
                id="outlined-basic"
                label="UserName"
                variant="outlined"
                value={id}
                onChange={(event) => setId(event.target.value)}
              />
    <Box
    sx={{
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
    }}
  >
    <iframe
      src={url}
      title="WebTab"
      style={{
        width: "100%",
        height: "100%",
        border: "1px solid grey",
      }}
    />
  </Box>
    </>
    

  );
}



