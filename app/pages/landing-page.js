"use client";
import { useState } from "react";
import { Box, Typography, Button, Fade } from "@mui/material";
// Removed unused import: import { Button } from "@headlessui/react";

export default function LandingPage() {
    const [isChecked, setChecked] = useState(false);

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
                            fontSize: { xs: "2rem", md: "3.75rem" }
                        }}
                    >
                        Welcome to Your Financial Journey
                    </Typography>
                    
                    <Typography 
                        variant="h6" 
                        sx={{ 
                            mb: 4,
                            maxWidth: "600px",
                            mx: "auto",
                            fontSize: { xs: "1rem", md: "1.25rem" }
                        }}
                    >
                        Discover your current financial state and manage your financial effectively
                    </Typography>

                    <Button
                        variant="contained"
                        onMouseEnter={() => setChecked(true)}
                        onMouseLeave={() => setChecked(false)}
                        sx={{
                            transition: "transform 0.3s ease-in-out",
                            transform: isChecked ? "scale(1.05)" : "scale(1)",
                            px: 4,
                            py: 1.5,
                            bgcolor: "white",    
                            color: "black",      
                            "&:hover": {
                                bgcolor: "grey.100", 
                            },
                        }}
                    >
                        Get Started
                    </Button>
                </Box>
            </Fade>
        </Box>
    );
}