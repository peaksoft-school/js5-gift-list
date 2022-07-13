import React from 'react'

// import styled from '@emotion/styled'
import CircularProgress from '@mui/material/CircularProgress'
import Stack from '@mui/material/Stack'

export default function LoadingSpinner() {
    return (
        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
            <CircularProgress color="secondary" />
        </Stack>
    )
}
// const LoadingDiv = styled('div')`
//     margin: 0 auto;
// `
