import { Box, Button, ButtonGroup, Drawer, TextField, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import React, { useState, useEffect } from "react";
import { TextFieldsOutlined } from "@mui/icons-material";
import { useLogin, useSignUP } from "../utilities/customHooks"

const useTime = () => {
  const getCurrentTime = () => {
    const date = new Date(); //;
    const utcOffset = 5.5 * 60 * 60 * 1000; // IST is UTC +5:30
    const istDate = new Date(date.getTime() + utcOffset);

    return `${istDate.getUTCHours()}:${istDate.getUTCMinutes()}:${istDate.getUTCSeconds()}`;
  };

  const [currentTime, setCurrentTime] = useState(getCurrentTime);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const setMyTime = (timeString) => {
    setCurrentTime(timeString);
  };

  return [currentTime, setMyTime];
};

export const AppForm = () => {

  const [loginDetails, setLoginDetails, clearLogin, loginRequest] = useLogin({ username: '', password: '' });
  const [signupDetails, setSignUpDetails, clearSignUp, signUpRequest] = useSignUP({ fName: '', lName: '', password: '' })
  const [time, setTime] = useTime();
  const [signUpClicked, setSignUpClicked] = useState(false);
  return (

    <Box
      // component="div"
      sx={{
        // height: "80vh",
        width: { xs: "80%", md: "45%" },
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        boxShadow: "0px 5px 10px #f8f8f8",
        borderRadius: 5,
        flexDirection: 'column',
        //   position: 'absolute',
        marginInline: { xs: "8%", md: "22%", lg: '24%' },
        marginBlock: { xs: "20vh", md: "30vh", lg: '30vh' },
        // paddingBlock: 2,
        justifySelf: 'center',
        border: "0.5px solid rgb(201, 198, 198)"

      }}
    >
      {!signUpClicked ? <>
        <Typography
          sx={{
            fontWeight: '600',
            fontSize: 16,
            borderBottom: "1px solid rgba(201, 198, 198, 0.5)",
            width: '100%',
            textAlign: 'center',
            textAlignLast: 'center',
            paddingBlock: 2.5
          }}
        >
          Login to you account
        </Typography>

        <Typography variant="h6"
          sx={{
            width: '90%',
            textAlign: 'left',
            paddingBlock: 2.5,
            marginTop: 2,
            fontWeight: '550',
          }}
        >
          Welcome to Airbnb
        </Typography>
        <Box sx={{
          flexDirection: 'column',
          display: 'flex',
          width: '100%'
        }}>

          <TextField
            sx={style.textField}
            id="outlined-basic"
            label="UserName"
            variant="outlined"
            value={loginDetails.user}
            onChange={(event) => setLoginDetails({ userName: event.target.value })}
          />
          <TextField
            sx={style.textField}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            value={loginDetails.key}
            onChange={(event) => setLoginDetails({ password: event.target.value })}
          />
        </Box></> :
        <>
          <Typography
            sx={{
              fontWeight: '600',
              fontSize: 16,
              borderBottom: "1px solid rgba(201, 198, 198, 0.5)",
              width: '100%',
              textAlign: 'center',
              textAlignLast: 'center',
              paddingBlock: 2.5
            }}
          >
            Create new account
          </Typography>
          
          <Typography variant="h6"
              sx={{
                width: '90%',
                textAlign: 'left',
                paddingBlock: 2.5,
                marginTop: 2,
                fontWeight: '550',
              }}
            >
              Welcome to Airbnb
            </Typography>
          <Box sx={{
            flexDirection: 'column',
            display: 'flex',
            width: '100%'
          }}>
            <TextField
              sx={style.textField}
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              value={signupDetails.firstName}  // Fix here (was loginDetails.fName)
              onChange={(event) => setSignUpDetails({ fName: event.target.value })}
            />
            <TextField
              sx={style.textField}
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              value={signupDetails.lastName}  // Fix here (was loginDetails.lName)
              onChange={(event) => setSignUpDetails({ lName: event.target.value })}
            />
            <TextField
              sx={style.textField}
              id="outlined-basic"
              label="Password"
              variant="outlined"
              value={signupDetails.key}  // Fix here (was loginDetails.password)
              onChange={(event) => setSignUpDetails({ password: event.target.value })}
            />

          </Box></>
      }

      <Box variant="div" component={'div'}
        sx={{
          // position: 'absolute',
          display: 'flex',
          marginTop: { xs: '40%', md: '10%', lg: '10%' },
          paddingY: { xs: 2, md: 2, lg: 2 },
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          flexDirection: 'column',

        }}
      >
        <Button
          sx={{
            width: "72%",
            paddingY: { xs: 1.5, md: 2, lg: 2 },
            fontSize: { xs: "0.875rem", md: "1rem" },
            justifySelf: 'flex-end'
          }}
          onClick={(e) => {
            e.preventDefault()

            if (signUpClicked !== false) {
              clearSignUp()
              setSignUpClicked((prev) => signUpClicked ? false : prev)
            }
            else {
              loginRequest()
            }
          }
          }
          variant="contained">{signUpClicked ? 'Login To account' : 'Login'}</Button>
        <Button
          sx={{
            width: "72%",
            marginTop: 1,
            paddingY: { xs: 1.5, md: 2, lg: 2 },
            fontSize: { xs: "0.875rem", md: "1rem" },
            justifySelf: 'flex-end'
          }}
          onClick={(e) => {
            e.preventDefault()
            if (signUpClicked == false) {
              clearLogin()
              setSignUpClicked(true)
            }
            else {
              signUpRequest()
            }

          }}
          variant="outlined">{signUpClicked ? 'SIGNUP' : 'CREATE NEW ACCOUNT'}</Button>
      </Box>

    </Box>
  )
}

const style = {
  textField: {
    marginBlock: 1,
    width: '90%',
    alignSelf: 'center',

  }
}