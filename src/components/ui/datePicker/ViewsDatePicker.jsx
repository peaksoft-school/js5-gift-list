import { styled, createTheme, ThemeProvider } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { ru } from 'date-fns/locale'

const theme = createTheme({
    palette: {
        primary: {
            light: '#8639B5;',
            main: '#8639B5;',
            dark: '#8639B5;',
            contrastText: '#fff',
        },
    },
})

const ViewsDatePicker = ({ onChange, value, label, placeholder, width }) => {
    return (
        <Div>
            <Label htmlFor={label}>{label}</Label>

            <LocalizationProvider locale={ru} dateAdapter={AdapterDateFns}>
                <ThemeProvider theme={theme}>
                    <DatePicker
                        autoComplete="off"
                        format="MM/dd/yyyy"
                        value={value}
                        onChange={onChange}
                        renderInput={(params) => (
                            <StyledTextField
                                width={width}
                                {...params}
                                helperText={null}
                                inputProps={{
                                    ...params.inputProps,
                                    placeholder: `${placeholder}`,
                                }}
                            />
                        )}
                    />
                </ThemeProvider>
            </LocalizationProvider>
        </Div>
    )
}
export default ViewsDatePicker

const Div = styled('div')`
    height: 56px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & fieldset {
        border: 1px solid #bdbdbd !important;
        border-radius: 6px;
        font-family: 'Inter' sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;
        display: flex;
        align-items: center;
        color: #8d949e;
        :focus-within {
            border: '1px solid #8639b5';
        }
    }
`

const StyledTextField = styled(TextField)((props) => ({
    width: props.width || '396px',
    padding: '0px',
    '& .MuiInputBase-root': {
        height: props.height || '35px',
    },
}))

const Label = styled('label')((props) => ({
    padding: '0px',
    fontStyle: 'Inter',
    fontWeight: 400,
    fontSize: props.fontSize || '12px',
    lineHeight: '15px',
    color: ' #464444',
}))
