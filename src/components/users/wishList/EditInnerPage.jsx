import styled from '@emotion/styled'

import Button from '../../ui/Button'
import ViewsDatePicker from '../../ui/datePicker/ViewsDatePicker'
import ImagePicker from '../../ui/ImagePicker'
import Input from '../../ui/Input'
import Select from '../../ui/select/Select'
import Textarea from '../../ui/Textarea'

const EditInnerPage = () => {
    const option = [
        { value: 'Праздник', label: 'Праздник' },
        { value: 'Праздник', label: 'Праздникll' },
        { value: 'Праздник', label: 'Празднlkkик' },
    ]

    return (
        <WrapperAll>
            <ImagePicker />
            <WrapperEdit>
                <H2>Добавление желаемого подарка</H2>
                <WrapperLabels>
                    <Label> Название подарка</Label>
                    <Label>Ссылка на подарок </Label>
                </WrapperLabels>
                <WrapperInputs>
                    <Input
                        width="396px"
                        placholder="Введите название подарка"
                    />
                    <Input
                        width="396px"
                        placholder="Вставьте ссылку на подарок"
                    />
                </WrapperInputs>
                <WrapperSelects>
                    <Select
                        placeholder="Выберите праздник"
                        options={option}
                        label="Праздник"
                    />
                    <DivDatePicker>
                        <ViewsDatePicker
                            value={null}
                            placeholder="Укажите дату праздника"
                            label="Дата праздника"
                        />
                    </DivDatePicker>
                </WrapperSelects>
                <Textarea
                    placeholder="Введите описание подарка"
                    label="Описание подарка"
                />
                <WrapperButton>
                    <Button variant="outlined">Отмена</Button>
                    <Button variant="contained">Добавить</Button>
                </WrapperButton>
            </WrapperEdit>
        </WrapperAll>
    )
}
export default EditInnerPage

const WrapperAll = styled('div')`
    padding: 20px;
    display: flex;
`

const WrapperEdit = styled('div')`
    padding-left: 20px;
    width: 808px;
`
const H2 = styled('h2')`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    margin: 0;
`
const WrapperLabels = styled('div')`
    display: grid;
    grid-template-columns: 418px 390px;
    margin-top: 17px;
    margin-bottom: 6px;
`
const Label = styled('label')`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #464444;
`
const WrapperInputs = styled('div')`
    display: grid;
    grid-template-columns: 416px 390px;
    margin-bottom: 20px;
    & .Mui-focused .MuiOutlinedInput-notchedOutline {
        border: 1px solid #8639b5;
    }
`
const WrapperSelects = styled('div')`
    display: grid;
    grid-template-columns: 418px 390px;

    & .css-1na6im6-control {
        height: 36px;
    }
`
const DivDatePicker = styled('div')`
    padding-top: 3px;
`
const WrapperButton = styled('div')`
    display: flex;
    justify-content: flex-end;
    margin-top: 56px;
    button {
        width: 113px;
        height: 37px;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        margin-left: 16px;
        padding: 10px 26px 10px 26px;
        /* color: #8d949e;
        border: 1px solid #8d949e; */
    }
`
