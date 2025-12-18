'use client';

import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ComputerIcon from '@mui/icons-material/Computer';
import SettingsIcon from '@mui/icons-material/Settings';

const drawerWidth = 240;

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          bgcolor: '#000',
          borderRight: '1px solid #00363a',
        },
      }}
    >
      <Box sx={{ mt: 10 ,overflow: 'auto'}}>
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
  );
}
