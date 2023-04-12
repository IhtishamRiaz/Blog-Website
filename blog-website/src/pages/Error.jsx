import React, { useEffect } from 'react'
import { Box } from '@mui/material'

const Error = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Box className='error-page page'>
                <h1>Opps!</h1>
                <h1>Error 404, Page Not Found....</h1>
            </Box>
        </>
    )
}

export default Error