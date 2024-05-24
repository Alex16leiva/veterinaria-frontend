import { Box, Drawer, Fab, TextField, Tooltip } from '@mui/material'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import SaveIcon from '@mui/icons-material/Save';
import React from 'react'
import { useForm } from '../../../hooks/useForm';
import { utilsValidator } from '../../../Helpers/utils/utilsValidator';
import { toast } from 'react-toastify';
import { ApiCalls } from '../../../Services/ApiCalls';

export const AddRol = ({
    open,
    hideAddPanel
}) => {

    const { rolId, descripcion, onInputChange, onResetForm } = useForm({ descripcion: '', rolId: '' });

    const save = async () => {
        if (utilsValidator.isNullOrEmpty(rolId)) {
            return toast.warn('The role ID field is required.')
        }

        if (utilsValidator.isNullOrEmpty(descripcion)) {
            return toast.warn('The description field is required.')
        }

        var request = {
            rol: {
                rolId,
                descripcion
            }
        }

        const response = await ApiCalls.httpPost('security/create-rol', request);

        onResetForm();
        hideAddPanel();
    }

    const DrawerList = (
        <Box sx={{
            width: 300, marginTop: '10px', marginLeft: '10px', display: 'grid',
            alignContent: 'space-between', justifyContent: 'space-around',
            height: '100%', marginBottom: '10px'
        }}
            role="presentation"
        >
            <div>
                <h1> Add Role   </h1>

                <TextField
                    id="input-with-icon-textfield"
                    margin="normal"
                    fullWidth
                    label="Role Name"
                    value={rolId}
                    name="rolId"
                    onChange={onInputChange}
                    variant="standard"
                />

                <TextField
                    id="input-with-icon-textfield"
                    margin="normal"
                    fullWidth
                    label="Description"
                    value={descripcion}
                    name="descripcion"
                    onChange={onInputChange}
                    variant="standard"
                />
            </div>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Tooltip title='Return'>
                    <Fab color="primary" aria-label="add" onClick={hideAddPanel}>
                        <KeyboardReturnIcon />
                    </Fab>
                </Tooltip>
                <Tooltip title='Save'>
                    <Fab color="primary" aria-label="add" onClick={save}>
                        <SaveIcon />
                    </Fab>
                </Tooltip>
            </Box>
        </Box>
    );

    return (
        <div>
            <Drawer
                open={open}
                anchor='right'
            >
                {DrawerList}
            </Drawer>
        </div>
    )
}
