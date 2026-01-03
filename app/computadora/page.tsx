'use client';

import { Grid, Box, Typography, Paper, Container } from '@mui/material';
import StatCard from '@/components/statcard';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'usuario', headerName: 'Usuario', width: 130 },
    { field: 'numero_inventario', headerName: 'Numero de Inventario', width: 130 },
    { field: 'motherboard', headerName: 'Placa Madre', width: 130 },
    { field: 'micro', headerName: 'Microprocesador', width: 130 },
    { field: 'ram', headerName: 'Memoria RAM', width: 130 },
    { field: 'disco', headerName: 'Disco Interno', width: 130 },
    { field: 'fuente', headerName: 'Fuente de Poder', width: 130 },
    { field: 'chasis', headerName: 'Chasis', width: 130 },
    { field: 'departamento', headerName: 'Departamento', width: 130 },
    { field: 'ip', headerName: 'Numero de IP', width: 130 },
    { field: 'estado', headerName: 'Estado', width: 100 },
    { field: 'destino', headerName: 'Destino', width: 100 },
    {
        field: 'Acciones', headerName: 'Acciones', width: 310,
        renderCell: (params) => (
            <Box sx={{ display: 'flex', gap: 2 , pt:1}}>
                <Button
                    variant="contained"
                    startIcon={<AddToQueueIcon fontSize='small'/>}
                    size="small"
                >
                    Añadir Nueva PC
                </Button>

                <Button
                    variant="outlined"
                    startIcon={<AddToQueueIcon fontSize='small' />}
                    size="small"
                >
                    Añadir Nueva PC
                </Button>
            </Box>
        ),
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const paginationModel = { page: 0, pageSize: 5 };


export default function computadora() {
    return (
        <>
            <Box>
                <Box sx={{ p: 2, display: 'flex', gap: 2 }}>
                    <DesktopWindowsIcon sx={{ fontSize: 40, color: '#00e5ff' }} />
                    <Typography
                        variant="h5"

                        sx={{
                            color: '#00e5ff',
                            mb: 3,
                            letterSpacing: '0.1em',
                        }}
                    >
                        Computadoras:
                    </Typography>
                </Box>
                <Box width={'100%'} display={'flex'} gap={2} pb={2}>
                    <Button variant="contained" startIcon={<AddToQueueIcon />}>Añadir Nueva PC</Button>
                    <Button variant="contained" startIcon={<FilterAltIcon />}>Filtrar</Button>
                </Box>
                <Box width={"90%"}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 10,
                                },
                            },
                        }}
                        pageSizeOptions={[5]}
                        checkboxSelection
                        disableRowSelectionOnClick
                        sx={{width:"90%"}}
                    />
                </Box>
            </Box>
        </>
    );
}