import { DataGrid, GridActionsCellItem, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { Box, Fab } from '@mui/material';
import './styleRol.css'
import { AddRol } from './AddRol';
import { ApiCalls } from '../../../Services/ApiCalls';
import { utilsValidator } from '../../../Helpers/utils/utilsValidator';

const columns = [
    //{ field: 'id', headerName: 'ID' },
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
                }
            })
    }

    const onChangePage = (pageInfo) => {
        getRoles(pageInfo.page, pageInfo.pageSize)
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
                <Box sx={{ '& > :not(style)': { m: 1 } }} onClick={showAddPanel}>
                    <Fab color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
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
