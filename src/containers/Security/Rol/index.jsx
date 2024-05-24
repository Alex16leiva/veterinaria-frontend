import { DataGrid, GridActionsCellItem, GridSearchIcon, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Divider, Fab, FormControl, IconButton, InputAdornment, InputBase, InputLabel, OutlinedInput, Paper } from '@mui/material';
import './styleRol.css'
import { AddRol } from './AddRol';
import { ApiCalls } from '../../../Services/ApiCalls';
import { utilsValidator } from '../../../Helpers/utils/utilsValidator';


const columns = [
    { field: 'rolId', headerName: 'RolID', width: 90 },
    { field: 'descripcion', headerName: 'Description', width: 150 },
    { field: 'modificadoPor', headerName: 'User Modifier', width: 150 },
    {
        field: 'fechaTransaccion', headerName: 'Date Modifier', width: 180, type: 'dateTime',
        valueGetter: (value) => value && new Date(value),
    },
    {
        field: 'actions',
        type: 'actions',
        headerName: 'Actions',
        width: 100,
        cellClassName: 'actions',
        getActions: ({ id }) => {
            return [
                <GridActionsCellItem
                    icon={<EditIcon />}
                    label="Edit"
                    className="textPrimary"
                    // onClick={handleEditClick(id)}
                    color="inherit"
                />
            ]
        }
    }
]

export const Rol = () => {
    const [rows, setRows] = useState([]);
    const [open, setOpen] = useState(false);
    const [rolId, setRolId] = useState('')
    const [totalItems, setTotalItems] = useState(0)
    const pageSize = 5;
    useEffect(() => {
        getRoles(0, pageSize);
    }, [])


    const showAddPanel = () => {
        setOpen(true);
    }

    const hideAddPanel = () => {
        setOpen(false);
    }

    const getRoles = (pageIndex, pageSize) => {
        const request = {
            queryInfo: {
                pageIndex: pageIndex,
                pageSize: pageSize,
                sortFields: ['fechaTransaccion'],
                ascending: false,
                predicate: !utilsValidator.isNullOrEmpty(rolId) ? 'rolId.Contains(@0)' : '',
                paramValues: !utilsValidator.isNullOrEmpty(rolId) ? [rolId] : [],
            }
        }

        ApiCalls.httpPost('security/get-rol', request)
            .then((response) => {
                if (!utilsValidator.isUndefined(response) && !utilsValidator.isNull(response)) {
                    setTotalItems(response.totalItems);
                    setRows(response.items);
                    debugger;
                }
            })
    }

    const searchRol = (event) => {

        if (event.key === 'Enter') {
            return;
        }

        const value = event.target.value;
        setRolId(value);
    }

    const onChangePage = (pageInfo) => {
        getRoles(pageInfo.page, pageInfo.pageSize)
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            getRoles(0, pageSize);
        }
    };

    const handleSearch = () => {
        getRoles(0, pageSize);
    }


    function CustomToolbar() {
        return (
            <GridToolbarContainer>
                <GridToolbarExport printOptions={{ disableToolbarButton: true }} csvOptions={{
                    fileName: 'customerDataBase',
                    utf8WithBom: true,
                }} />
            </GridToolbarContainer>
        );
    }

    return (
        <div className='rol-container'>
            <div className='header'>

                <FormControl sx={{ width: '250px' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={'text'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleSearch}
                                    edge="end"
                                >
                                    <GridSearchIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                        label="password"
                        value={rolId}
                        onChange={(value) => searchRol(value)}
                        onBlur={handleSearch}
                        onKeyDown={handleKeyPress}
                    />
                </FormControl>


                <Box sx={{ alignContent: 'center' }} onClick={showAddPanel}>
                    <Button variant="contained">Add user</Button>
                </Box>


            </div>
            <div className='main'>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: pageSize,
                            },
                        },
                    }}
                    pageSizeOptions={[5, 10, 25]}
                    onPaginationModelChange={(pageInfo) => onChangePage(pageInfo)}
                    paginationMode='server'
                    rowCount={totalItems}
                    slots={{
                        toolbar: CustomToolbar
                    }}
                    getRowId={(row) => `${row.rolId}-${row.fechaTransaccion}`}
                />
            </div>
            <AddRol open={open} hideAddPanel={hideAddPanel} />
        </div>
    )
}
