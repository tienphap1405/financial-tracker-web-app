import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';
import Image from 'next/image';

export default function LoginForm({handleClickClose, handleClickOpen, open}){
    const [isChecked, setChecked] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const logourl = '/Logo.jpg';


    return(
        <div>
            <Button
                variant="contained"
                onMouseEnter={() => setChecked(true)}
                onMouseLeave={() => setChecked(false)}
                onClick={handleClickOpen}
                sx={{
                    transition: "transform 0.3s ease-in-out",
                    transform: isChecked ? "scale(1.05)" : "scale(1)",
                    px: 4,
                    py: 1.5,
                    bgcolor: "white",
                    color: "black",
                    "&:hover": { bgcolor: "grey.100" },
                }}
            >
                Get Started
            </Button>
            <Dialog
                open={open}
                onClose={handleClickClose}
                slotProps={{
                paper: {
                    component: 'form',
                    onSubmit: (event) => {
                    event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        const email = formJson.email;
                        console.log(email);
                        handleClickClose();
                    },
                },
                }}
            >
                <div className='flex justify-end items-center'>
                    <DialogTitle sx={{fontWeight: "bold"}}>Financial Tracker Web Application</DialogTitle>
                    <Button sx={{ padding: "20px", margin: "5px", borderRadius: "100%"}} onClick={handleClickClose}>X</Button>
                </div>
                
                <div className='flex flex-col items-center'>
                    <Image width={150} height={150} src={logourl} alt="Financial Tracker Logo"></Image>
                </div>
                <hr></hr>
                <DialogContent>
                    <DialogContentText>
                        * Please provide the Email and Password to log in to the web application
                    </DialogContentText>
                    
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="email"
                        label="Email Address"
                        type="email"
                        placeholder='Email here...'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="password"
                        name="password"
                        placeholder='Password here...'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        label="Password"
                        type="password"
                        fullWidth
                        variant="standard"
                    />
                    
                </DialogContent>
                <DialogActions sx={{display: "flex", justifyContent: "center"}}>
                    <Button sx={{backgroundColor: "black", padding: "10px", paddingLeft: "100px", paddingRight:"100px"}} type="submit">Login</Button>
                </DialogActions>
            </Dialog>
        </div>
       
    );
}