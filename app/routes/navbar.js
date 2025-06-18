"use client";

import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Drawer, Button } from '@mui/material';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Image from 'next/image';

export default function Navbar() {
    const logourl = '/Logo.jpg';
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    const DrawerList = (
        <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>

          <List>
            {['Overview', 'Daily Details', 'Monthly Details', 'Input Expenses'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Goals'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
    );
    return (       
        <nav className="bg-white shadow-lg text-black flex flex-row p-5 items-center">            
            <button onClick={toggleDrawer(true)}><Image width={80} height={80} src={logourl} alt="Financial Tracker Logo"></Image></button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <Image className='ml-20' width={150} height={150} src={logourl} alt="Financial Tracker Logo"></Image>
                <hr></hr>
                {DrawerList}
                <Button>Logout</Button>
            </Drawer>
            
            <h1 className="font-bold text-4xl ml-10 pt-2 pr-5 border-b-4 ">Dashboard</h1>
        </nav>
    );
    }
