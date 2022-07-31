import Selects from 'react-select'
import styled from 'styled-components'

const Select = ({ placeholder, label, options, ...props }) => {
    const colourStyles = {
        control: (style, { isFocused }) => ({
            ...style,
            backgroundColor: 'white',
            borderRadius: '6px',
            boxShadow: 'none',
            border: `${props.border}`,
            borderColor: isFocused ? '#8639B5;' : style.borderColor,
            '&:hover': {
                borderColor: isFocused ? '#8639B5;' : style.borderColor,
            },
        }),
        option: (styles, { isSelected, isFocused }) => {
            return {
                ...styles,
                backgroundColor: isSelected && 'rgba(189, 68, 205, 0.4);',
                ':hover': {
                    ...styles[':hover'],
                    backgroundColor: isFocused && 'rgba(134, 57, 181, 0.2);',
                },
            }
        },
        placeholder: (provided) => ({
            ...provided,
            fontFamily: 'Inter, sans-serif',
            fontStyle: 'normal;',
            fontWeight: '300;',
            fontSize: '16px;',
            lineHeight: '19px;',
            color: '#bfc0c4',
        }),
    }
    return (
        <SelectDiv>
            <Label htmlFor={label}>{label}</Label>
            <StyleSelect
                placeholder={placeholder}
                options={options}
                styles={colourStyles}
                {...props}
            />
        </SelectDiv>
    )
}

export default Select

const SelectDiv = styled.div`
    width: 396px;
    /* height: 56px; */
    padding-bottom: 20px;
    & .css-1okebmr-indicatorSeparator {
        display: none;
    }

    & Select::placeholder {
        color: #8d949e;
        font-size: 16px;
    }
`
const Label = styled.label`
    color: #464444;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 12px;
    line-height: 15px;
    margin-bottom: 20px;
`
const StyleSelect = styled(Selects)`
    width: ${(props) => (props.width ? props.width : '396px')};
    height: ${(props) => (props.height ? props.height : '35px')};
    margin-top: 6px;
    border-radius: 6px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #020202;
`
