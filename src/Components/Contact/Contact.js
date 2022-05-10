import { Box, Button, ButtonGroup, Container, Fab } from '@mui/material'
import call from '../../images/others/call.png'
import mail from '../../images/others/mail.png'
import location from '../../images/others/location.png'

import './Contact.css'
import { Call, Mail, PinDrop } from '@mui/icons-material'


export default function Contact() {
    return (
        <>
            <div className='title'>CONTACT</div>

            <div className='heading'>GET IN TOUCH</div>
            <br />


            <ButtonGroup
                orientation="vertical"
                aria-label="vertical outlined button group"
            >

                <Button variant='text' key="tel" component='a' href={'tel:+917328083161'}> <Call sx={{ mr: 2 }} /> +91-7328083161</Button>
                <Button variant='text' key="mail" component='a' href={'mailto:shyamasundars43@gmail.com'}><Mail sx={{ mr: 2 }} />shyamasundars43@gmail.com</Button>
                <Button variant='text' key="add" component='a' href={''}><PinDrop sx={{ mr: 2 }} /> Jagatsinghpur, <br />Odisha,<br /> 754108</Button>

            </ButtonGroup>



        </>
    )
}