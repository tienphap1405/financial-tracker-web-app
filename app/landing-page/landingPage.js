"use client";
import { useState } from "react";
import { Box, Typography, Fade } from "@mui/material";
import LoginForm from "../components/loginForm";

export default function LandingPage() {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () =>{
        setOpen(true);
    }
    const handleClickClose = () =>{
        setOpen(false);
    }
    return (
        <Box
        sx={{
            backgroundImage: "url('/Background-Landing.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
            bgcolor: "grey.900",
        }}
        >
        <Box
            sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: "rgba(0, 0, 0, 0.5)",
            pointerEvents: "none",
            }}
        />
            <Fade in={true} timeout={1000}>
                <Box
                sx={{
                    position: "relative",
                    zIndex: 1,
                    textAlign: "center",
                    color: "white",
                    px: 2,
                }}
                >
                    <Typography
                        variant="h2"
                        component="h1"
                        sx={{
                        mb: 2,
                        fontWeight: "bold",
                        fontSize: { xs: "2rem", md: "3.75rem" },
                        }}
                    >
                        Welcome to Your Journey
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                        mb: 4,
                        maxWidth: "600px",
                        mx: "auto",
                        fontSize: { xs: "1rem", md: "1.25rem" },
                        }}
                    >
                        Manage your expense effectively
                    </Typography>
                    <LoginForm handleClickClose={handleClickClose} handleClickOpen={handleClickOpen} open={open}/>
                </Box>
            </Fade>
        </Box>
    );
}