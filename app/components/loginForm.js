import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../auth/firebase-config';
import { useRouter } from 'next/navigation';
import {CircularProgress} from '@mui/material';
import Fade from '@mui/material';

export default function LoginForm({handleClickClose, handleClickOpen, open}){
    const router = useRouter();
    const [isChecked, setChecked] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const logourl = '/Logo.jpg';
    const [openRegister, setOpenRegister] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
    const handleOpenRegister = () =>{
        handleClickClose();
        setOpenRegister(true);  
        handleClickOpen();
        setError('');
    }
    const handleCloseRegister = () =>{
        handleClickClose();
        setOpenRegister(false);
        handleClickOpen();
        setError('');
    }

    const handleRegistration = async () =>{
        setLoading(true);
        try{
            const userCred = await createUserWithEmailAndPassword(auth, email, password);
            const token = await userCred.user.getIdToken();
            await fetch('http://localhost:5082/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    email: userCred.user.email,
                    phone: phone || '', 
                }),
            })
        }
        catch(error){
            console.log(error);
            if (error.code === 'auth/email-already-in-use') {
                setError("Email already in use. Please try another email.");
            }
            else if (error.code === 'auth/invalid-email') {
                setError("Invalid email format. Please enter a valid email.");
            }
            else if (error.code === 'auth/weak-password') {
                setError("Weak password. Please enter a stronger password.");
            }
            else {
                setError("An error occurred during registration. Please try again.");
            }
        }
        finally {
            setLoading(false);
        }
    }
    const handleLogin = async () =>{
        setLoading(true);
       try{
        const userCred = await signInWithEmailAndPassword(auth, email, password);
        const token = await userCred.user.getIdToken();
        if (token) {
            router.push('/overview-page');
        }

        
        }
       catch(error){
        console.log(error);
        if (error.code === 'auth/user-not-found') {
            setError("User not found. Please check your email or register.");
        }
        else if (error.code === 'auth/invalid-credential') {
            setError("Invalid credentials. Please check your email and password.");
        }
        else {
            setError("An error occurred during login. Please try again."); 
        }
        }
        finally {
            setLoading(false);
        }
}

    const HandleFormPopup = () => {
        const isEmailError = error.toLowerCase().includes("email");
        const isPasswordError = error.toLowerCase().includes("password");
        const isPhoneError = error.toLowerCase().includes("phone");

        if (openRegister) {
            return (
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
                        placeholder="Email here..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        fullWidth
                        variant="standard"
                        error={isEmailError}
                        helperText={isEmailError ? error : ""}
                    />
                    <TextField
                        required
                        margin="dense"
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        placeholder="Password here..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        fullWidth
                        variant="standard"
                        error={isPasswordError}
                        helperText={isPasswordError ? error : ""}
                    />
                    <TextField
                        margin="dense"
                        id="phone"
                        name="phone"
                        label="Phone Number (optional)"
                        type="text"
                        placeholder="Phone number here..."
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        fullWidth
                        variant="standard"
                        error={isPhoneError}
                        helperText={isPhoneError ? error : ""}
                    />

                    <DialogContentText>
                        Already have an account?
                        <Button onClick={handleCloseRegister}>
                            Login Here
                        </Button>
                    </DialogContentText>

                    <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
                        <Button
                            variant="contained"
                            color="info"
                            sx={{ padding: "10px", paddingLeft: "100px", paddingRight: "100px" }}
                            onClick={handleRegistration}
                            disabled={loading}
                        >
                            {loading ? <CircularProgress size={24} /> : "Register"}
                        </Button>
                    </DialogActions>
                </>
            );
        } else {
            return (
                <>
                    <DialogContentText>
                        * Please provide the Email and Password to log in to the web application
                    </DialogContentText>

                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="email"
                        name="email"
                        label="Email Address"
                        type="email"
                        placeholder="Email here..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        fullWidth
                        variant="standard"
                        error={isEmailError}
                        helperText={isEmailError ? error : ""}
                    />
                    <TextField
                        required
                        margin="dense"
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        placeholder="Password here..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        fullWidth
                        variant="standard"
                    />

                    <DialogContentText>
                        Don't have an account yet?
                        <Button onClick={handleOpenRegister}>
                            Register Here
                        </Button>
                    </DialogContentText>

                    <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
                        <Button
                            variant="contained"
                            color="info"
                            sx={{ padding: "10px", paddingLeft: "100px", paddingRight: "100px" }}
                            onClick={handleLogin}
                            disabled={loading}
                            type='submit'  
                        >
                            {loading ? <CircularProgress size={24} /> : "Login"}
                        </Button>
                    </DialogActions>
                </>
            );
        }
        };
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
                   <img
                    src="/Logo.jpg"
                    alt="Financial Tracker Logo"
                    style={{
                        width: "150px", height: "auto"}}
                    />
                </div>
                <hr></hr>
                <DialogContent>
                    {HandleFormPopup()}
                </DialogContent>
            </Dialog>
        </div>
       
    );
}
