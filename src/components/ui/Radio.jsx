import styled from 'styled-components'

function Radio({ onChange, cheked, label }) {
    return (
        <Div>
            <Label>
                <Input
                    type="radio"
                    name="simple"
                    onChange={onChange}
                    cheked={cheked}
                />
                <Span> </Span>
            </Label>
            {label}
        </Div>
    )
}

export default Radio
const Div = styled('div')`
    display: flex;
`

const Label = styled.label`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #3772ff;
    display: flex;
    flex-direction: column;
    display: inline-block;
    margin-right: 10px;
`

const Span = styled.span`
    display: block;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    border: 6px solid #3772ff;
    opacity: 0;
    margin: -0.7px 0 0 -0.7px;
`

const Input = styled.input`
    display: none;
    &:checked + Span {
        opacity: 1;
    }
`
