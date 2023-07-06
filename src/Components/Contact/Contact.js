import { Box, Button, ButtonGroup, Container, Fab } from '@mui/material'
import call from '../../images/others/call.png'
import mail from '../../images/others/mail.png'
import location from '../../images/others/location.png'

import './Contact.css'
import { Call, Mail, PinDrop } from '@mui/icons-material'


export default function Contact({ data }) {
    const { phone_no, email, location } = data
    console.log("phone_no==>", phone_no);
    return (
        <>
            <div className='title'>CONTACT</div>

            <div className='heading'>GET IN TOUCH</div>
            <br />


            <ButtonGroup
                orientation="vertical"
                aria-label="vertical outlined button group"
            >

                <Button variant='text' key="tel" component='a' href={'tel:' + { phone_no }}> <Call sx={{ mr: 2 }} />{phone_no} </Button>
                <Button variant='text' key="mail" component='a' href={'mailto:' + { email }}><Mail sx={{ mr: 2 }} />shyamasundars43@gmail.com</Button>
                <Button variant='text' key="add" component='a' href={''}><PinDrop sx={{ mr: 2 }} /> {location.dist}, <br />{location.state},<br /> {location.pincode}</Button>

            </ButtonGroup>



        </>
    )
}