'use client';

import { AppBar, Toolbar, Typography, Avatar, Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, CssBaseline } from '@mui/material';
import logo from '@/pictures/logoacit.png';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ComputerIcon from '@mui/icons-material/Computer';
import SettingsIcon from '@mui/icons-material/Settings';


const drawerWidth = 240;

export default function Navbar() {
    return (
        <>
            <Box display={'flex'}>
                <CssBaseline />
                <AppBar position="fixed" elevation={0} sx={{backgroundColor: '#000000',borderBottom: '1px solid #00363a',zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <Toolbar sx={{ justifyContent: 'space-between' }}>

                        {/* Logo + Nombre */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Avatar
                                src={logo.src}
                                alt="ACIT"
                                sx={{
                                    width: 48,
                                    height: 48,
                                }}
                            />

                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#00e5ff',
                                    fontWeight: 700,
                                    letterSpacing: '0.15em',
                                }}
                            >
                                ACIT
                            </Typography>
                        </Box>

                        {/* Usuario */}
                        <Avatar
                            sx={{
                                width: 40,
                                height: 40,
                                bgcolor: '#00e5ff',
                                color: '#000',
                                fontWeight: 600,
                            }}
                        >
                            U
                        </Avatar>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                    }}
                >
                    <Toolbar />
                    <Box sx={{ overflow: 'auto' }}>
                        <List>
                            {[
                                { text: 'Dashboard', icon: <DashboardIcon /> },
                                { text: 'Equipos', icon: <ComputerIcon /> },
                                { text: 'Configuración', icon: <SettingsIcon /> },
                            ].map((item) => (
                                <ListItemButton
                                    key={item.text}
                                    sx={{
                                        color: '#80deea',
                                        '&:hover': {
                                            bgcolor: '#00363a',
                                            boxShadow: 'inset 4px 0 0 #00e5ff',
                                        },
                                    }}
                                >
                                    <ListItemIcon sx={{ color: '#00e5ff' }}>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            ))}
                        </List>
                    </Box>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />
                </Box>
            </Box>
        </>
    );
}
