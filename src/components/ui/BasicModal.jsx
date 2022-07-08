import { Modal, Box } from '@mui/material'
import styled from 'styled-components'

function BasicModal({ open, onClose, title, children }) {
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={style}>
                <StyleHeaderTitle>{title}</StyleHeaderTitle>
                <div>{children}</div>
            </Box>
        </Modal>
    )
}

export default BasicModal

const StyleHeaderTitle = styled.h4`
    width: 195px;
    height: 32px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: #23262f;
`
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: '10px',
    p: 4,
}
