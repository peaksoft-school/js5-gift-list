import React, { useState } from 'react'

import styled from '@emotion/styled'
import { InputLabel, TextField } from '@mui/material'

import facebook from '../assets/icons/FacebookUser.svg'
import instagram from '../assets/icons/Instagram.svg'
import telegram from '../assets/icons/Telegram.svg'
import vkontakte from '../assets/icons/VKUser.svg'
import Button from '../components/ui/Button'
import ImagePicker from '../components/ui/ImagePicker'
import Input from '../components/ui/Input'

const UserProfile = () => {
    const [basicInformation, setBasicInformation] = useState({
        firstName: '',
        lastName: '',
        country: '',
        dateBirth: '',
        clochingSize: '',
        shoeSize: '',
        hobbyInterests: '',
        importantKnow: '',
        facebookState: '',
        telegramState: '',
        vkontatkeState: '',
        instagramState: '',
    })

    return (
        <ProfileContainer>
            <div>
                <ImagePicker />
            </div>
            <ProfileDiv>
                <h1>Основная информация</h1>
                <InputsDiv>
                    <InputLabel>
                        Имя
                        <Input
                            type="text"
                            placeholder="Имя"
                            width="375px"
                            height="30px"
                        />
                    </InputLabel>
                    <InputLabel>
                        Фамилия
                        <Input
                            type="text"
                            placeholder="Фамилия"
                            width="370px"
                            height="30px"
                        />
                    </InputLabel>
                </InputsDiv>
                <InputsDiv>
                    <InputLabel>
                        Страна
                        <Input
                            type="text"
                            placeholder="Страна"
                            width="375px"
                            height="30px"
                        />
                    </InputLabel>
                    <InputLabel>
                        Дата рождения
                        <Input
                            type="text"
                            placeholder="Укажите дату рождения"
                            width="370px"
                            height="30px"
                        />
                    </InputLabel>
                </InputsDiv>
                <InputsDiv>
                    <InputLabel>
                        Email
                        <Input
                            placeholder="Email"
                            type="email"
                            width="375px"
                            height="30px"
                        />
                    </InputLabel>
                    <InputLabel>
                        Номер телефона
                        <Input
                            type="number"
                            placeholder="Введите номер телефона"
                            width="370px"
                            height="30px"
                        />
                    </InputLabel>
                </InputsDiv>
                <div>
                    <SizeText>Размеры</SizeText>
                    <InputsDiv>
                        <InputLabel>
                            Номер телефона
                            <Input
                                type="text"
                                placeholder="Введите номер телефона"
                                width="370px"
                                height="30px"
                            />
                        </InputLabel>
                        <InputLabel>
                            Номер телефона
                            <Input
                                type="text"
                                placeholder="Введите номер телефона"
                                width="370px"
                                height="30px"
                            />
                        </InputLabel>
                    </InputsDiv>
                </div>
                <div>
                    <SizeText>Интересы, хобби</SizeText>
                    <div>
                        <InputLabel style={style}>
                            Расскажите о своих интересах и хобби
                        </InputLabel>

                        <TextField
                            inputProps={{
                                style: styles,
                            }}
                            placeholder="Пример: плавание, бег, танцы, чтение художественной литературы..."
                        />
                    </div>
                </div>
                <div>
                    <SizeText>Важно знать</SizeText>
                    <div>
                        <InputLabel style={style}>
                            О чем важно знать?
                        </InputLabel>

                        <TextField
                            inputProps={{
                                style: styles,
                            }}
                            placeholder="Пример: аллергия на синтетические материалы, непереносимость лактозы..."
                        />
                    </div>
                </div>

                <SizeText>Социальные сети</SizeText>
                <DivSocial>
                    <div>
                        <IconText>Фейсбук</IconText>
                        <SocialDiv>
                            <img src={facebook} alt="" />
                            <Input
                                width="345px"
                                height="30px"
                                placeholder="Вставьте ссылку на фейсбук"
                            />
                        </SocialDiv>
                    </div>
                    <div>
                        <IconText>В контакте </IconText>
                        <SocialDiv>
                            <img src={vkontakte} alt="" />
                            <Input
                                width="345px"
                                height="30px"
                                placeholder="Вставьте ссылку на В контакте "
                            />
                        </SocialDiv>
                    </div>
                </DivSocial>
                <DivSocial>
                    <div>
                        <IconText>Инстаграм</IconText>
                        <SocialDiv>
                            <img src={instagram} alt="" />
                            <Input
                                width="345px"
                                height="30px"
                                placeholder="Вставьте ссылку на инстаграм"
                            />
                        </SocialDiv>
                    </div>
                    <div>
                        <IconText>Телеграм </IconText>
                        <SocialDiv>
                            <img src={telegram} alt="" />
                            <Input
                                width="345px"
                                height="30px"
                                placeholder="Вставьте ссылку на телеграм "
                            />
                        </SocialDiv>
                    </div>
                </DivSocial>
                <Buttons>
                    <Button variant="outlined">отмена</Button>
                    <Button variant="contained">сохранить</Button>
                </Buttons>
            </ProfileDiv>
        </ProfileContainer>
    )
}

export default UserProfile

const styles = {
    width: '754px',
    height: '111px',
    borderRadius: '6px',
    alignItems: 'flex-start',
    padding: '8px 8px',
}

const style = {
    fontSize: '12px',
}
const ProfileContainer = styled('div')`
    width: 1036px;
    height: 1262px;
    background: #ffffff;
    border-radius: 10px;
    margin-left: 20px;
    padding: 14px;
    display: flex;
`
const ProfileDiv = styled('div')`
    margin-top: -11px;
    padding-left: 17px;
    h1 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
    }
`
const InputsDiv = styled('div')`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    label {
        font-size: 12px;
        :last-child {
            margin-left: 18px;
        }
    }
`
const SizeText = styled('h1')`
    margin-top: 24px;
`
const SocialDiv = styled('div')`
    display: flex;

    img {
        padding-right: 7px;
        padding-left: 5px;
    }
`
const IconText = styled('p')`
    font-size: 12px;
    margin-left: 32px;
    margin-top: 2px;
`

const DivSocial = styled('div')`
    display: flex;
    margin-top: 14px;
`
const Buttons = styled('div')`
    display: flex;
    justify-content: flex-end;
    margin-top: 60px;
    button {
        margin: 8px;
    }
`
