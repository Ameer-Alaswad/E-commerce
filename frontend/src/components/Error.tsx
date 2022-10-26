// This component needs styling 
// Material UI 
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function DescriptionAlerts() {
    return (
        <Stack style={ { marginTop: "200px" } } sx={ { width: '100%' } } spacing={ 2 }>
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                Product was not found— <strong>check it out!</strong>
            </Alert>
        </Stack>
    );
}
