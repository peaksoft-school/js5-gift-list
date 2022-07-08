import Select from 'react-select'
import styled from 'styled-components'

const AddSelect = ({ placeholder, category, options, ...props }) => {
    const colourStyles = {
        control: (styles) => ({
            ...styles,
            backgroundColor: 'white',
        }),
        option: (styles, { isSelected, isFocused }) => {
            return {
                ...styles,
                backgroundColor: isSelected && 'rgba(134, 57, 181, 0.4);',
                ':hover': {
                    ...styles[':hover'],
                    backgroundColor: isFocused && 'rgba(134, 57, 181, 0.2);',
                },
            }
        },
        placeholder: (provided) => ({
            ...provided,
            fontSize: '16px',
        }),
    }
    return (
        <SelectDiv>
            <label htmlFor={category}>{category}</label>
            <StyleSelect
                placeholder={placeholder}
                options={options}
                styles={colourStyles}
                {...props}
            />
        </SelectDiv>
    )
}

export default AddSelect

const SelectDiv = styled.div`
    width: 396px;
    height: 56px;
    padding-bottom: 20px;

    & .css-1okebmr-indicatorSeparator {
        display: none;
    }

    & label {
        color: #464444;
        font-family: 'Inter';
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        margin-bottom: 20px;
    }

    & Select::placeholder {
        color: #8d949e;
        font-size: 16px;
    }
`
const StyleSelect = styled(Select)`
    width: 396px;
    height: 35px;
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
