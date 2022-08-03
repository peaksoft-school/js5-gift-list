import React from 'react'

import styled from '@emotion/styled'

import { appFetch } from '../../api/CustomFetch'
import Exit from '../../assets/icons/ExitModal.svg'
import Google from '../../assets/icons/google.svg'
import { useInput } from '../../hooks/UseInput'
import BasicModal from '../ui/BasicModal'
import Button from '../ui/Button'
import Input from '../ui/Input'
import InputPassword from '../ui/InputPassword'

const SingIn = () => {
    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailIsValidHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
    } = useInput((value) => value.includes('@'))
    const {
        value: passwordValue,
        isValid: passwordIsValid,
        hasError: passwordIsValidHasError,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
    } = useInput((value) => value.length >= 6)
    const submitHandler = async (e) => {
        e.preventDefault()
        if (!emailIsValid && !passwordIsValid) {
            // eslint-disable-next-line no-useless-return
            return
        }
        if (emailValue.trim() !== '' && passwordValue.trim() !== '') {
            const response = await appFetch({
                method: 'POST',
                url: 'api/public/login',
                body: {
                    email: emailValue,
                    password: passwordValue,
                },
            })
            console.log(response)
        }
    }
    return (
        <BasicModal open>
            <SignInForm onSubmit={submitHandler}>
                <InputDiv>
                    <h4>Вход</h4>
                    <img src={Exit} alt="" />
                </InputDiv>
                <InputDivForm>
                    <Input
                        validation={emailIsValidHasError}
                        value={emailValue}
                        onchange={emailChangeHandler}
                        onBlur={emailBlurHandler}
                        type="email"
                        placholder="Email"
                    />
                    {emailIsValidHasError && (
                        <ErrorValidation>@ no</ErrorValidation>
                    )}
                    <InputPassword
                        validation={passwordIsValidHasError}
                        value={passwordValue}
                        onChange={passwordChangeHandler}
                        onBlur={passwordBlurHandler}
                        type="password"
                        placeholder="Пароль"
                    />
                    {passwordIsValidHasError && (
                        <ErrorValidation>password 6</ErrorValidation>
                    )}
                    <DivRemember>
                        <input type="checkbox" />
                        <p>Запимнить меня</p>
                    </DivRemember>
                </InputDivForm>
                <div>
                    <Button type="submit" variant="singUpButton">
                        Войти
                    </Button>
                </div>
                <div>
                    <ForgotPassword>Забыли пароль?</ForgotPassword>
                    <OrDiv>
                        <Line1 />
                        <Or>или</Or>
                        <Line2 />
                    </OrDiv>
                    <GoogleDiv>
                        <img src={Google} alt="" /> Продолжить с Google
                    </GoogleDiv>
                    <ToComeInDiv>
                        <p>Нет аккаунта?</p>
                        <button>Зарегистрироваться</button>
                    </ToComeInDiv>
                </div>
            </SignInForm>
        </BasicModal>
    )
}

export default SingIn
const SignInForm = styled('form')`
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 32px;
`

const InputDiv = styled('div')`
    display: flex;
    width: 482px;
    justify-content: space-between;
    height: 32px;
    h4 {
        margin-top: 0px;
    }
`
const InputDivForm = styled('div')`
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
`
const DivRemember = styled('div')`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #87898e;
    font-family: 'Inter', sans-serif;
    flex: none;
    order: 1;
    flex-grow: 0;
    display: flex;
`
const OrDiv = styled('div')`
    display: flex;
`

const Or = styled('div')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    font-family: 'Inter', sans-serif;
    color: #23262f;
    text-align: center;
    margin-top: 5px;
`
const Line1 = styled('hr')`
    border: 1px solid #f1f1f1;
    width: 206.5px;
    height: 0px;
`
const Line2 = styled('hr')`
    border: 1px solid #f1f1f1;
    width: 206.5px;
    height: 0px;
`
const ForgotPassword = styled('p')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    text-align: center;

    color: #3772ff;

    flex: none;
    order: 0;
    flex-grow: 0;
`
const GoogleDiv = styled('div')`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 19px;
    margin-top: 15px;

    width: 482px;
    height: 39px;
    border: none;
    background: #f1f1f1;
    border-radius: 6px;

    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;

    color: #23262f;
`
const ToComeInDiv = styled('div')`
    display: flex;
    justify-content: center;
    margin-top: 14px;
    p {
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
    }
    button {
        border: none;
        background: none;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #3772ff;
    }
`
const ErrorValidation = styled('p')`
    margin: 0;
    padding: 0;
    font-size: 17px;
    color: #b40e0e;
`
