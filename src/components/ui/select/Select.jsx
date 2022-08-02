import Selects from 'react-select'
import styled from 'styled-components'

import { arr } from '../../../utils/constants/constants'

const Select = ({ placeholder, label, options, ...props }) => {
    const colourStyles = {
        control: (style, { isFocused }) => ({
            ...style,
            display: 'flex',
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
                display: 'grid',
                // gridTemplateRows: '20px',
                backgroundColor: isSelected && 'rgba(189, 68, 205, 0.4);',
                ':hover': {
                    ...styles[':hover'],
                    backgroundColor: isFocused && 'rgba(134, 57, 181, 0.2);',
                },
            }
        },
        placeholder: (provided) => ({
            ...provided,
            fontFamily: 'Inter , sans-serif',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '16px',
            lineHeight: '19px',
            color: '#b8b9bb',
        }),
    }
    return (
        <SelectDiv>
            <Label htmlFor={label}>{label}</Label>
            <StyleSelect
                style={{ display: 'flex' }}
                placeholder={placeholder}
                options={arr}
                styles={colourStyles}
                {...props}
            />
        </SelectDiv>
    )
}

export default Select

const SelectDiv = styled.div`
    width: 396px;
    height: 56px;
    padding-bottom: 20px;
    /* display: grid; */
    /* grid-template-columns: 1px 1px 1px; */
    & .css-1okebmr-indicatorSeparator {
        display: none;
    }

    & Select::placeholder {
        color: #8d949e;
        font-size: 16px;
    }
    /* & Select option {
        display: grid;
        grid-template-columns: 1px 1px 1px;
    } */
`
const Label = styled.label`
    color: #464444;
    font-family: 'Inter';
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
    border: 1px solid #bdbdbd;
    border-radius: 6px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #020202;
`
