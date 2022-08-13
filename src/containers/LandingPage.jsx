import styled from 'styled-components'

import charityIcon from '../assets/icons/charityIcon.png'
import facebook from '../assets/icons/facebook.svg'
import heart from '../assets/icons/heart.png'
import insta from '../assets/icons/insta.svg'
import landingFacebook from '../assets/icons/landingFacebook.svg'
import landingInstagram from '../assets/icons/landingInstagram.svg'
import like from '../assets/icons/like.png'
import vk from '../assets/icons/vk.svg'
import vkontakte from '../assets/icons/vkontakte.svg'
import charity from '../assets/images/charity.png'
import designer from '../assets/images/designer.png'
import developer from '../assets/images/developer.png'
import device from '../assets/images/device.png'
import director from '../assets/images/director.png'
import editor from '../assets/images/editor.png'
import groupPhotoLeft from '../assets/images/groupPhotoLeft.png'
import groupPhotoRight from '../assets/images/groupPhotoRight.png'
import manager from '../assets/images/manager.png'
import market from '../assets/images/market.png'
import Button from '../components/ui/Button'

const LandingPage = () => {
    const aboutScroll = () => {
        window.scrollTo({
            top: 2200,
            behavior: 'smooth',
        })
    }
    const charityScroll = () => {
        window.scrollTo({
            top: 1450,
            behavior: 'smooth',
        })
    }
    const toInstagram = () => {
        window.location.assign('https://www.instagram.com/')
    }
    const toFacebook = () => {
        window.location.assign('https://www.facebook.com/')
    }
    const toVk = () => {
        window.location.assign('https://vk.com/')
    }
    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    return (
        <div>
            <PurpleSection>
                <Content>
                    <Section>
                        <p onClick={aboutScroll}>О проекте</p>
                        <Title>
                            <strong>GIFT LIST</strong>
                        </Title>
                        <p onClick={charityScroll}>Благотворительность</p>
                    </Section>
                    <ThreeColumns>
                        <First>
                            <Icons>
                                <img
                                    onClick={toFacebook}
                                    src={landingFacebook}
                                    alt="landing"
                                />
                                <img onClick={toVk} src={vk} alt="landing" />
                                <img
                                    onClick={toInstagram}
                                    src={landingInstagram}
                                    alt="landing"
                                />
                            </Icons>
                            <img src={groupPhotoLeft} alt="landing" />
                        </First>
                        <Second>
                            <h1>Социальная сеть нового поколения</h1>
                            <p>
                                Всегда подскажет, что подарить близким и
                                осуществит твои желания
                            </p>
                            <Button variant="singInButton">Войти</Button>
                            <Buton>
                                <Button variant="singUpButton">
                                    Регистрация
                                </Button>
                            </Buton>
                        </Second>
                        <Third>
                            <img src={groupPhotoRight} alt="third" />
                            <p>&#8592; Листай вниз </p>
                        </Third>
                    </ThreeColumns>
                </Content>
            </PurpleSection>
            <WhiteSection>
                <Content>
                    <Div>
                        <Numbers>
                            <h2>100 К+</h2>
                            <p>Пользователей</p>
                        </Numbers>
                        <Numbers>
                            <h2>10 К+</h2>
                            <p>Размещенных подарков</p>
                        </Numbers>
                        <Numbers>
                            <h2>15 К+</h2>
                            <p>Подаренных подарков</p>
                        </Numbers>
                        <Numbers>
                            <h2>9 К+</h2>
                            <p>Реализованной благотворительной помощи</p>
                        </Numbers>
                    </Div>
                    <Advantage>
                        <Advantages>
                            <h3>
                                <img src={heart} alt="like icon" />
                                Дари то, что необходимо
                            </h3>
                            <ul>
                                <li>Находи своих близких</li>
                                <li>Просматривай их списки желаний</li>
                                <li>Узнавай о ближайших мероприятиях</li>
                            </ul>
                        </Advantages>
                        <Advantages>
                            <h3>
                                <img src={like} alt="like icon" />
                                Удобство в использовании
                            </h3>
                            <ul>
                                <li>
                                    Создавай неограниченное количество желаний
                                </li>
                                <li>
                                    Добавляй подарки которые ты действительно
                                    хочешь
                                </li>
                                <li>Делись своими желаниями с другими</li>
                            </ul>
                        </Advantages>
                        <Advantages>
                            <h3>
                                <img src={charityIcon} alt="like icon" />
                                Твори добро
                            </h3>
                            <ul>
                                <li>Дари благотворительные подарки</li>
                                <li>Делись своими вещами</li>
                                <li>Помогай другим приобрести необходимое</li>
                            </ul>
                        </Advantages>
                    </Advantage>
                    <Btn>
                        <Button variant="contained">Зарегистрироваться</Button>
                    </Btn>
                </Content>
            </WhiteSection>
            <PurpleSection>
                <Content>
                    <Charity>
                        <img src={charity} alt="charity" />
                        <div>
                            <h1>Благотворительность</h1>
                            <p>
                                Найти удачный подарок, который принесёт радость,
                                не всегда простая задача. Благодаря нашему
                                сервису у вас есть возможность не только
                                обрадовать подарком, но и помочь другим
                                приобрести необходимые им вещи. В разделе
                                благотворительность вы можете найти список
                                опубликованных вещей, забронировав, вы
                                связываетесь с их обладателем.
                            </p>
                        </div>
                    </Charity>
                </Content>
            </PurpleSection>
            <WhiteSection>
                <Content>
                    <Device>
                        <div>
                            <h1>О проекте</h1>
                            <p>
                                Найти удачный подарок, который принесёт радость,
                                не всегда простая задача. Благодаря нашему
                                сервису у вас есть возможность не только
                                обрадовать подарком, но и помочь другим
                                приобрести необходимые им вещи. В разделе
                                благотворительность вы можете найти список
                                опубликованных вещей, забронировав, вы
                                связываетесь с их обладателем.
                            </p>
                        </div>
                        <img src={device} alt="device" />
                    </Device>
                    <Team>
                        <p>
                            <img src={designer} alt="team" />
                            <strong>Катя, ведущий дизайнер TailGroup</strong>
                        </p>
                        <p>
                            <img src={market} alt="team" />
                            <strong> Марина, маркетолог Headers Market</strong>
                        </p>
                        <p>
                            <img src={manager} alt="team" />
                            <strong> Сава, PR-менеджер Central Media</strong>
                        </p>
                        <p>
                            <img src={director} alt="team" />
                            <strong> Паша, основатель LeadCompany</strong>
                        </p>
                        <p>
                            <img src={editor} alt="team" />
                            <strong>
                                {' '}
                                Саша, главный редактор Just Journal
                            </strong>
                        </p>
                        <p>
                            <img src={developer} alt="team" />
                            <strong> Лёня, ведущий разработчик Ymail</strong>
                        </p>
                    </Team>
                </Content>
            </WhiteSection>

            <Footer>
                <Content>
                    <section>
                        <Contacts>
                            <h2 onClick={toTop}>GIFT LIST</h2>
                            <span>Социальная сеть нового поколения</span>
                            <div>
                                <img
                                    onClick={toInstagram}
                                    src={facebook}
                                    alt="landing"
                                />
                                <img
                                    onClick={toVk}
                                    src={vkontakte}
                                    alt="landing"
                                />
                                <img
                                    onClick={toFacebook}
                                    src={insta}
                                    alt="landing"
                                />
                            </div>
                        </Contacts>
                        <Navigation>
                            <strong>Навигация</strong>
                            <p onClick={aboutScroll}>О проекте</p>
                            <p onClick={charityScroll}>Благотворительность</p>
                        </Navigation>
                    </section>
                </Content>
            </Footer>
            <Content>
                <Peaksoft>Peaksoft © 2022 Все права защищены</Peaksoft>
            </Content>
        </div>
    )
}
export default LandingPage
const Advantage = styled.div`
    display: flex;
    justify-content: space-around;
    padding-top: 100px;
    height: 191px;
`
const Peaksoft = styled.span`
    width: 265px;
    height: 14px;
    color: #020202;
    font-family: sans-serif;
    margin-top: 100px;
`
const Navigation = styled.div`
    display: flex;
    align-items: left;
    flex-direction: column;
    width: 255px;
    height: 120px;
    & p {
        margin-top: 5px;
        cursor: pointer;
    }
`
const Footer = styled.footer`
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    padding-bottom: 50px;
    padding-top: 50px;
    margin-top: 100px;
    & section {
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: #353a5a;
    }
`
const Contacts = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: left;
    flex-direction: column;
    width: 255px;
    height: 120px;
    & h2 {
        font-family: sans-serif;
        font-size: 24px;
        cursor: pointer;
        margin: 0px;
    }
    & span {
        // padding-bottom: 10px;
        width: 247px;
        height: 18px;
    }
    & div {
        display: flex;
        justify-content: space-around;
        width: 116px;
        height: 22px;
        // padding-top: 10px;
        & img {
            cursor: pointer;
        }
    }
`
const Team = styled.div`
    display: flex;
    justify-content: space-between;
    & p {
        display: flex;
        flex-direction: column;
        & img {
            width: 170px;
            height: 170px;
        }
        & strong {
            width: 170px;
            height: 36px;
            font-family: sans-serif;
            padding-top: 10px;
        }
    }
`
const Device = styled.div`
    padding: 100px 5px;
    display: flex;
    justify-content: space-between;
    & h1 {
        width: 234px;
        height: 46px;
        font-family: sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 46px;
        line-height: 100%;
        color: #020202;
    }
    & img {
        width: 542px;
        height: 318px;
    }
    & p {
        width: 500px;
        height: 182px;
        font-family: sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #020202;
    }
`
const WhiteSection = styled.div``
const Charity = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 80px 5px;
    & h1 {
        font-family: sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 46px;
        line-height: 120%;
        color: #fdfdfd;
    }
    & p {
        width: 570px;
        height: 192px;
        font-family: sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: #fdfdfd;
    }
    & img {
        width: 500px;
        height: 362px;
            animation-duration: 3s;
            animation-name: slidein;
          
          @keyframes slidein {
            from {
              margin-right: 100%;
            }
          
            to {
              margin-right: 0%;
            }
    }
`
const Btn = styled.div`
    display: flex;
    justify-content: center;
    padding: 70px;
    text-align: center;
    & button {
        width: 291px;
    }
`
const Advantages = styled.div`
    & h3 {
        display: flex;
        align-item: center;
        // width: 288px;
        height: 30px;
        font-family: sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 150%;
        & img {
            padding: 5px;
            width: 19px;
            height: 18px;
        }
    }
    & ul {
        width: 288px;
        font-family: sans-serif;
        & li {
            padding: 5px;
        }
    }
`
const Div = styled.div`
    display: flex;
    justify-content: space-around;
    padding-top: 50px;
`
const Numbers = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & h2 {
        width: 177px;
        height: 54px;
        font-family: system-ui;
        font-style: normal;
        font-weight: 500;
        font-size: 54px;
        color: #8639b5;
        padding: 30px;
        margin: 0px;
    }
    & p {
        width: 177px;
        height: 17px;
        font-family: system-ui;
        font-style: normal;
        text-align: center;
        font-weight: 400;
        font-size: 14px;
        line-height: 120%;
        color: #353a5a;
        padding: 0px;
        margin: 0px;
    }
`
// ------------------------------------------------------
const Third = styled.div`
    width: 270px;
    height: 560px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding-top: 50px;
    animation-duration: 3s;
    animation-name: first;
    @keyframes first {
        from {
            margin-left: 100px;
        }

        to {
            margin-left: 0%;
        }
    }
    & img {
        width: 270px;
        height: 330px;
    }
    & p {
        font-size: 20px;
        width: 150px;
        color: #ffffff;
        transform: rotate(-90deg);
        margin-left: 170px;
        font-family: sans-serif;
    }
`
const Second = styled.div`
    width: inherit;
    height: 353px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation-duration: 3s;
    animation-name: love;
    @keyframes love {
        from {
            margin-top: 50%;
        }

        to {
            margin-top: 0%;
        }
    }
    & h1 {
        font-size: 54px;
        font-family: Monaco, Lucida Console, monospace;
        color: #ffffff;
        width: 542px;
        height: 130px;
    }
    & p {
        font-size: 16px;
        color: #ffffff;
        font-family: Monaco, Lucida Console, monospace;
        width: 378px;
        height: 48px;
        padding-top: 30px;
        padding-bottom: 30px;
    }
`
const Buton = styled.div`
    padding: 20px;
    & button {
        border: 1px solid #ffffff;
        width: 291px;
        background: rgba(255, 255, 255, 0.1);
    }
`
const First = styled.div`
    width: 270px;
    height: 560px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding-top: 50px;
    animation-duration: 3s;
    animation-name: third;
    @keyframes third {
        from {
            margin-right: 100px;
        }

        to {
            margin-right: 0%;
        }
    }
`
const Icons = styled.div`
    width: 22px;
    height: 126px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    & img {
        cursor: pointer;
    }
`
const Content = styled.div`
    margin: 0px auto;
    width: 1170px;
`
const PurpleSection = styled.div`
    padding-bottom: 200px;
    width: 100%;
    background-color: #8639b5;
`
const ThreeColumns = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Title = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    margin-top: 31px;
    text-transform: uppercase;
    color: #ffffff;
`
const Section = styled.section`
    display: flex;
    justify-content: space-between;
    & p {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        color: #fdfdfd;
        margin-top: 31px;
        cursor: pointer;
    }
`
