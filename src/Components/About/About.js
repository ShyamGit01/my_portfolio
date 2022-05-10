import { Container, Typography } from '@mui/material'

export default function About() {
    return (
        <>
            <div className='title'>ABOUT ME</div>

            <div className='heading'>WHO I AM ?</div>
            <br />

            <Container>
                {/* <div class="about-body"> */}
                <Typography>
                    I am a full-stack developer,
                    working with both back-end and front-end technologies together. Also design databases as per project requirements.

                    <br />
                </Typography>
                {/* In addition, have a good understanding of automated testing, version control. */}
                {/* </div> */}
                {/* I also have decent knowledge of -----------, looking forward to start learning and working on 
                ___________. And my aim is to be a better version of me  */}
            </Container>

        </>
    )
}