import { InputLabel, TextField } from '@mui/material'

const TextFields = (props) => {
    return (
        <InputLabel style={props.style}>
            {props.label}
            <TextField
                value={props.value}
                onChange={props.onChange}
                variant="outlined"
                InputProps={{
                    style: props.propsstyle,
                }}
            />
        </InputLabel>
    )
}
export default TextFields
