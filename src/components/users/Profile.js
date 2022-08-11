import { Card, InputLabel } from '@mui/material'
import styled from 'styled-components'

import Button from '../ui/Button'
import ImagePicker from '../ui/ImagePicker'
import Input from '../ui/Input'

const Profile = () => {
    return (
        <Card style={cardStyle}>
            <ImagePicker />
            <Div>
                <h3>Основная информация</h3>
                <div
                    style={{
                        height: '200px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <div style={style}>
                        <InputLabel>
                            Name
                            <Input placeholder="Name" width="396px" />
                        </InputLabel>
                        <InputLabel>
                            Last name
                            <Input placeholder="Last name" width="396px" />
                        </InputLabel>
                    </div>
                    <div style={style}>
                        <InputLabel>
                            Country
                            <Input placeholder="Country" width="396px" />
                        </InputLabel>
                        <InputLabel>
                            Date of Birth
                            <Input placeholder="Date of Birth" width="396px" />
                        </InputLabel>
                    </div>
                    <div style={style}>
                        <InputLabel>
                            Email
                            <Input placeholder="Email" width="396px" />
                        </InputLabel>
                        <InputLabel>
                            Phone Number
                            <Input placeholder="Phone Number" width="396px" />
                        </InputLabel>
                    </div>
                </div>
                <h3 style={{ marginTop: '40px' }}>Размеры</h3>
                <div style={style}>
                    <InputLabel>
                        Размер одежды
                        <Input
                            placeholder="Выберите размер одежды"
                            width="396px"
                        />
                    </InputLabel>
                    <InputLabel>
                        Размер обуви
                        <Input
                            placeholder="Выберите размер обуви"
                            width="396px"
                        />
                    </InputLabel>
                </div>
                <h3>Интересы, хобби</h3>
                <div style={style}>
                    <InputLabel>
                        Размер обуви
                        <Input
                            placeholder="Пример: плавание, бег, танцы, чтение художественной литературы..."
                            width="808px"
                            height="111px"
                        />
                    </InputLabel>
                </div>
                <h3>Важно знать</h3>
                <div style={style}>
                    <InputLabel>
                        О чем важно знать?
                        <Input
                            placeholder="Пример: аллергия на синтетические материалы, непереносимость лактозы..."
                            width="808px"
                            height="111px"
                        />
                    </InputLabel>
                </div>
                <h3>Социальные сети</h3>
                <div style={style}>
                    <InputLabel>
                        Facebook
                        <Input
                            placeholder="Вставьте ссылку на фейсбук"
                            width="396px"
                        />
                    </InputLabel>
                    <InputLabel>
                        Vkontakte
                        <Input
                            placeholder="Вставьте ссылку на в контакте"
                            width="396px"
                        />
                    </InputLabel>
                </div>
                <div style={style}>
                    <InputLabel>
                        Instagram
                        <Input
                            placeholder="Вставьте ссылку на инстаграмм"
                            width="396px"
                        />
                    </InputLabel>
                    <InputLabel>
                        Telegram
                        <Input
                            placeholder="Вставьте ссылку на телеграм"
                            width="396px"
                        />
                    </InputLabel>
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'right',
                        marginTop: '20px',
                    }}
                >
                    <Button variant="outlined">Cancel</Button>
                    <Button>Save</Button>
                </div>
            </Div>
        </Card>
    )
}
export default Profile
const Div = styled.div`
    // display: flex;
    width: 75%;
    // justify-content: space-between;
`
const cardStyle = {
    width: '1086px',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
}
const style = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '15px',
}
