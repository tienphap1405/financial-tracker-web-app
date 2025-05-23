import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';
import Image from 'next/image';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../auth/firebase-config';

export default function LoginForm({handleClickClose, handleClickOpen, open}){
    const [isChecked, setChecked] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const logourl = '/Logo.jpg';
    const [openRegister, setOpenRegister] = useState(false);

    const handleOpenRegister = () =>{
        handleClickClose();
        setOpenRegister(true);
        handleClickOpen();
    }
    const handleCloseRegister = () =>{
        handleClickClose();
        setOpenRegister(false);
        handleClickOpen();
    }
    const handleRegistration = async () =>{
        try{
            const userCred = await createUserWithEmailAndPassword(auth, email, password);
        }
        catch(error){
            console.log(error);
            alert("Error: " + error.message);
        }
    }
    const handleLogin = async () =>{
       try{
        const userCred = await signInWithEmailAndPassword(auth, email, password);
        const token = await userCred.user.getIdToken();

       }
       catch(error){
        console.log(error);
        alert("Error: " + error.message);
       }
    }

    const HandleFormPopup= () =>{
        if(openRegister === true){
            return(
                <>
                    <DialogContentText>
                        * Please provide the Email and Password to create an account
                    </DialogContentText>
                    
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="email"
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
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="phone"
                        name="phone"
                        placeholder='Phone number here...'
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        label="phone"
                        type="phone"
                        fullWidth
                        variant="standard"
                    />
                    <DialogContentText>
                        Already have account?
                        <Button onClick={handleCloseRegister}>Login here</Button>
                    </DialogContentText> 
                    <DialogActions sx={{display: "flex", justifyContent: "center"}}>
                        <Button variant='contained' color='info' sx={{ padding: "10px", paddingLeft: "100px", paddingRight:"100px"}} type="submit" onClick={handleRegistration}>Register</Button>
                    </DialogActions>
                </>
            );
        }
        else{
            return(
                <>
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
                    <DialogContentText>
                        Dont have account yet?
                        <Button onClick={handleOpenRegister}>Register here</Button>
                    </DialogContentText> 
                    <DialogActions sx={{display: "flex", justifyContent: "center"}}>
                        <Button variant='contained' color='info' sx={{ padding: "10px", paddingLeft: "100px", paddingRight:"100px" }} type="submit" onClick={handleLogin}>Login</Button>
                    </DialogActions>
                </>
            );
        }
    }
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
                <div className='flex justify-end items-center mr-5'>
                    <DialogTitle sx={{fontWeight: "bold"}}>Financial Tracker Web Application</DialogTitle>
                    <Button sx={{ padding: "20px", margin: "5px", borderRadius: "100%"}} onClick={handleClickClose}>X</Button>
                </div>
                
                <div className='flex flex-col items-center'>
                    <Image width={150} height={150} src={logourl} alt="Financial Tracker Logo"></Image>
                </div>
                <hr></hr>
                <DialogContent>
                    <HandleFormPopup/> 
                </DialogContent>
            </Dialog>
        </div>
       
    );
}