import { useContext } from 'react';
import { Box, Button, TextField } from '@mui/material'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { useState,ChangeEvent} from 'react';
import { EntriesContext } from '../entries';
import { UIContext } from './UIContext';
const NewEntry = () => {
    
    const {addNewEntry} =  useContext(EntriesContext)
    const {isAddingEntry, setIsAddingEntry} = useContext(UIContext)
    const [inputValue, setInputValue] = useState('');
    const [toush, setToush] = useState<boolean>(false)

    const onTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const onSave = () => {
        if (inputValue.length === 0) return;
        addNewEntry(inputValue);
        setIsAddingEntry(false);
        setToush(false);
        setInputValue('');
    };

    return (
        <Box sx={{ marginBottom: 4, paddingX: 2 }}>
            {
                isAddingEntry ? (
                    <>
                        <TextField
                            fullWidth
                            sx={{ marginTop: 2, marginBottom: 1 }}
                            placeholder="Escriba su tarea"
                            variant="outlined"
                            autoFocus
                            multiline
                            label="Agregar nueva tarea"
                            error={inputValue.length <= 0 && toush}
                            value={inputValue}
                            onChange={onTextFieldChange}
                            onBlur={() => setToush(true)}
                        />
                        <Box display={'flex'} justifyContent="space-between">
                            <Button
                                variant="contained"
                                color="secondary"
                                endIcon={<SaveOutlinedIcon />}
                                onClick={onSave}
                            >
                                guardar
                            </Button>
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={() => setIsAddingEntry(false)}
                            >
                                cancelar
                            </Button>
                        </Box>
                    </>
                ) : (
                    <Button
                        startIcon={<AddCircleOutlineOutlinedIcon />}
                        fullWidth
                        variant="outlined"
                        onClick={() => setIsAddingEntry(true)}
                    >
                        Agregar nueva tarea
                    </Button>
                )
            }
        </Box>
    )
}

export default NewEntry