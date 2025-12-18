'use client';

import { Grid, Box, Typography } from '@mui/material';
import StatCard from '@/components/statcard';
import Navbar from "@/components/navbar";
import Sidebar from '@/components/sidebar';

export default function dashboard() {
    return (
        <>
            <Navbar />
            <Box sx={{ p: 4 }}>
                <Typography
                    variant="h5"
                    sx={{
                        color: '#00e5ff',
                        mb: 3,
                        letterSpacing: '0.1em',
                    }}
                >
                    PANEL DE CONTROL
                </Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <StatCard title="Equipos activos" value="24" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <StatCard title="Incidencias" value="3" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <StatCard title="Usuarios" value="12" />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}