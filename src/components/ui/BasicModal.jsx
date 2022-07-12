import { Modal, Box, styled } from '@mui/material'

function BasicModal({ open, onClose, children }) {
    return (
        <Modal open={open} onClose={onClose}>
            <StyleBox>
                <div>{children}</div>
            </StyleBox>
        </Modal>
    )
}

export default BasicModal

const StyleBox = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 24px 32px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: #23262f;
    background-color: white;
    border-radius: 10px;
    outline: none;
`