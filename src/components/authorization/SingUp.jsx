import React, { useState } from 'react'

import { styled } from '@mui/material/styles'
import { useDispatch } from 'react-redux/es/exports'

import ExitIcon from '../../assets/icons/ExitModal.svg'
import Google from '../../assets/icons/google.svg'
import { useInput } from '../../hooks/useInput'
import { GoogleAuthorization } from '../../store/slices/GoogleAuthorization'
import { signUp } from '../../store/slices/SignUpActions'
import BasicModal from '../ui/BasicModal'
import Button from '../ui/Button'
import Input from '../ui/Input'
import InputPassword from '../ui/InputPassword'

const SignUp = () => {
    const [checkboxState, setCheckboxState] = useState(false)
    const dispatch = useDispatch()

    const {
        value: firstName,
        isValid: enteredFirstNameIsValid,
        hasError: firstNameInputHasError,
        valueChangeHandler: firstNameChangeHanlder,
        inputBlurHandler: firstNameBlurHandler,
    } = useInput((value) => value.trim() !== '')
    const {
        value: lastName,
        isValid: enteredLastNameIsValid,
        hasError: lastNameInputHasError,
        valueChangeHandler: lastNameChangeHanlder,
        inputBlurHandler: lastNameBlurHandler,
    } = useInput((value) => value.trim() !== '')
    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHanlder,
        inputBlurHandler: emailBlurHandler,
    } = useInput((value) => value.includes('@'))
    const {
        value: enteredPassword,
        isValid: enteredPasswordIsValid,
        hasError: passwordInputHasError,
        valueChangeHandler: passwordChangeHanlder,
        inputBlurHandler: passwordBlurHandler,
    } = useInput((value) => value.length >= 6)
    const {
        value: enteredPasswordTwo,
        isValid: enteredPasswordtwoIsValid,
        hasError: passwordTwoInputHasError,
        valueChangeHandler: passwordTwoChangeHanlder,
        inputBlurHandler: passwordTwoBlurHandler,
    } = useInput((value) => value === enteredPassword && value.length >= 6)

    const submitHandler = async (e) => {
        e.preventDefault()
        if (
            !enteredEmailIsValid &&
            !enteredFirstNameIsValid &&
            !enteredLastNameIsValid &&
            !enteredPasswordIsValid &&
            !enteredPasswordtwoIsValid
        ) {
            // eslint-disable-next-line no-useless-return
            return
        }
        if (
            firstName.trim() !== '' &&
            lastName.trim() !== '' &&
            enteredEmail.trim() !== '' &&
            enteredPassword.trim() !== '' &&
            enteredPasswordTwo.trim() !== '' &&
            enteredPassword === enteredPasswordTwo
        ) {
            const userData = {
                firstName,
                lastName,
                email: enteredEmail,
                password: enteredPassword,
                mailingList: checkboxState,
            }

            dispatch(signUp(userData))
        }
    }
    const googleHandler = () => {
        dispatch(GoogleAuthorization())
    }
    return (
        <BasicModal open>
            <ContainerRegistration onSubmit={submitHandler}>
                <RegistrationDiv>
                    <Registration>Регистрация</Registration>
                    <img src={ExitIcon} alt="" />
                </RegistrationDiv>
                <RegistrationInputDiv>
                    <InputDiv>
                        <Input
                            error={firstNameInputHasError}
                            value={firstName}
                            onchange={firstNameChangeHanlder}
                            onBlur={firstNameBlurHandler}
                            name="firstName"
                            type="text"
                            placeholder="Имя"
                        />
                        {firstNameInputHasError && (
                            <ErrorValidation>
                                Name must not be empty
                            </ErrorValidation>
                        )}
                    </InputDiv>
                    <InputDiv>
                        <Input
                            error={lastNameInputHasError}
                            value={lastName}
                            onchange={lastNameChangeHanlder}
                            onBlur={lastNameBlurHandler}
                            name="lastName"
                            type="text"
                            placeholder="Фамилия"
                        />
                        {lastNameInputHasError && (
                            <ErrorValidation>
                                last Name must not be empty
                            </ErrorValidation>
                        )}
                    </InputDiv>
                    <InputDiv>
                        <Input
                            error={emailInputHasError}
                            value={enteredEmail}
                            onchange={emailChangeHanlder}
                            onBlur={emailBlurHandler}
                            name="email"
                            type="email"
                            placeholder="Email"
                        />
                        {emailInputHasError && (
                            <ErrorValidation>
                                Please enter valid email
                            </ErrorValidation>
                        )}
                    </InputDiv>
                    <InputDiv>
                        <InputPassword
                            value={enteredPassword}
                            onChange={passwordChangeHanlder}
                            onBlur={passwordBlurHandler}
                            name="password"
                            type="password"
                            error={passwordInputHasError}
                            placeholder="Введите пароль"
                        />
                        {passwordInputHasError && (
                            <ErrorValidation>
                                please enter valid 6
                            </ErrorValidation>
                        )}
                    </InputDiv>
                    <InputDiv>
                        {' '}
                        <InputPassword
                            value={enteredPasswordTwo}
                            onChange={passwordTwoChangeHanlder}
                            onBlur={passwordTwoBlurHandler}
                            name="passwordTwo"
                            type="password"
                            error={passwordTwoInputHasError}
                            placeholder="Повторите пароль"
                        />
                        {passwordTwoInputHasError && (
                            <ErrorValidation>error</ErrorValidation>
                        )}
                    </InputDiv>

                    <CheckboxDiv>
                        <input
                            onClick={() => setCheckboxState(!checkboxState)}
                            type="checkbox"
                        />
                        <p>Подписаться на рассылку </p>
                    </CheckboxDiv>
                </RegistrationInputDiv>
                <SingUpDiv>
                    <Button type="submit" variant="singUpButton">
                        Создать аккаунт
                    </Button>
                    <OrDiv>
                        <Line1 />
                        <Or>или</Or>
                        <Line2 />
                    </OrDiv>
                    <GoogleDiv onClick={googleHandler}>
                        <img src={Google} alt="" /> Зарегистрироваться с Google
                    </GoogleDiv>
                    <ToComeInDiv>
                        <p>У вас уже есть аккаунт?</p>
                        <button>Войти</button>
                    </ToComeInDiv>
                </SingUpDiv>
            </ContainerRegistration>
        </BasicModal>
    )
}

export default SignUp

const ContainerRegistration = styled('form')`
    background: #fcfcfd;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    font-family: 'Inter', sans-serif;
`
const RegistrationDiv = styled('div')`
    display: flex;
    width: 482px;
    justify-content: space-between;
    height: 32px;
    margin-bottom: 20px;
    font-family: 'Inter', sans-serif;
`

const Registration = styled('h4')`
    margin-top: 0px;

    font-family: 'Inter', sans-serif;
`
const RegistrationInputDiv = styled('div')`
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
`
const CheckboxDiv = styled('div')`
    display: flex;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #87898e;
    font-family: 'Inter', sans-serif;
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

const GoogleDiv = styled('div')`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* padding: 16px 10px; */
    gap: 16px;
    cursor: pointer;

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

const SingUpDiv = styled('div')`
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
`
const ToComeInDiv = styled('div')`
    display: flex;
    justify-content: center;
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
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    color: #b40e0e;
    text-align: end;
`
const InputDiv = styled('div')`
    height: 40px;
`
