const orangeColor = "#FFA500";

export const shippingDataFormStyles = {
    '& .MuiInputLabel-root': { color: orangeColor },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: orangeColor,
        },
        '&:hover fieldset': {
            borderColor: '#0000CD',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#0000CD',
        },
        '& input': {
            color: '#0000CD',
        },
    },
}