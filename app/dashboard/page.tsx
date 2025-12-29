'use client';

import { Grid, Box, Typography, Paper } from '@mui/material';
import StatCard from '@/components/statcard';


export default function dashboard() {
    return (
        <>
            <Box sx={{ p: 2 }}>
                <Typography
                    variant="h5"
                    sx={{
                        color: '#00e5ff',
                        mb: 3,
                        letterSpacing: '0.1em',
                    }}
                >
                    Pagina Principal
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 1,
                            width: 180,
                            height: 200,
                        },
                    }}
                >
                    <Paper elevation={3} />
                </Box>
            </Box>
        </>
    );
}