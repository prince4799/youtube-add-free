import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { Height, Language, Padding, AccountCircleRounded } from '@mui/icons-material';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import airBnbImage from '../assets/airbnb.png'
import { Chip } from '@mui/material';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar sx={{
            backgroundColor: '#fff',
            width: '100%',
            boxShadow: '0 0 10px 0 #e0e0e0',
            padding: 1,
            height: 80,
            display: 'flex',
            justifyContent: 'space-between',
            paddingInline: { xs: "0px !important", md: "55px !important", lg: "55px !important" },
        }}
         position="fixed"
        >
            <Container maxWidth="xl" >
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    <Box
                        component="img"
                        sx={{
                            height: { xs: 20, md: 32, lg: 32 },
                            display: "block", // Prevent flex issues
                            margin: { xs: "0 auto", md: "0" }, // Centers only on xs
                            width: "auto", // Prevent stretching
                            maxWidth: "100%", // Ensure responsiveness
                        }}
                        alt="The house from the offer."
                        src={airBnbImage}
                    />


                    <Box component={'div'} sx={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 0.5,
                        marginRight: 2,
                        display: { xs: "none", md: "flex" },
                    }} >
                        <Box sx={styles.chipsContainer}>
                            <Chip
                                sx={{
                                    // backgroundColor: "#fff",
                                    "&:hover": {
                                        backgroundColor: "#F7F7F7", // Change to any color you want
                                    },

                                    "& .MuiChip-label": {
                                        fontSize: "14px",
                                        fontWeight: "600",
                                        color: "#333",
                                    },
                                    ...styles.chips
                                }}
                                onClick={() => console.log("Chip clicked")}
                                label="Airbnb your home"

                            />

                        </Box>
                        <Box sx={styles.chipsContainer} >

                            <Chip
                                label={<Language sx={{ alignSelf: 'center', fontSize: 20 }} />} // Ensures correct size
                                sx={{
                                    // backgroundColor: "#fff",
                                    "&:hover": {
                                        backgroundColor: "#F7F7F7", // Change to any color you want
                                    },
                                    ...styles.chips
                                }}
                                onClick={() => console.log("Chip clicked")}
                            />

                        </Box>
                        <Box
                            sx={{
                                // backgroundColor: "#fff",
                                border: "1px solid #ccc", // Correct border format
                                width: 80,
                                height: 45,
                                borderRadius: 50,
                                "&:hover": {
                                    boxShadow: "0px 4px 4px 0px rgba(146, 144, 144, 0.5)", // Bottom shadow only
                                    cursor: "pointer",
                                },
                                gap: 1,
                                ...styles.chipsContainer,
                            }}
                            component={'button'}
                        >
                            <Box
                                sx={{

                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: "#fff",
                                }}
                            >
                                <MenuIcon sx={{ fontSize: 20, color: "#000", }} />
                            </Box>
                            <Box
                                sx={{

                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: "#fff",

                                }}
                            >
                                <AccountCircleRounded sx={{ fontSize: 30, color: "#000", }} />
                            </Box>
                        </Box>


                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
const TopBar = ResponsiveAppBar;
export default TopBar;

const styles = {
    chipsContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
        // padding: { xs: 1, md: 1, lg: 1 },

    },
    chips: {
        height: 45,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: "#fff",

    }
}
