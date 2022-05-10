import { Box, Container, Paper } from '@mui/material'
import './Skills.css'
import nodejs from '../../images/skills/NodeJs.png'
import angular from '../../images/skills/angular.png'
import postgresql from '../../images/skills/postgresql.png'
import sqlServer from '../../images/skills/sqlServer.png'
import firebase from '../../images/skills/firebase.png'
import git from '../../images/skills/git.png'
import react from '../../images/skills/reactjs.png'
import htmlcssjs from '../../images/skills/htmlcssjs.png'
import { Masonry } from '@mui/lab'
import { styled } from '@mui/material/styles'


const Label = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
}));

export default function Skills() {
    return (
        <>
            <div className='title'>SKILLS</div>

            <div className='heading'>MY PROFICIENCY</div>
            <br />

            <Box sx={{ width: '75vw', Height: '80vh' }}>
                <Masonry columns={4} spacing={2}>
                    {itemData.map((item, index) => (
                        <div key={index}>
                            {/* <Label>{index + 1}</Label> */}
                            <img
                            
                                src={`${item.img}?w=162&auto=format`}
                                srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                                style={{
                                   
                                    borderBottomLeftRadius: 4,
                                    borderBottomRightRadius: 4,
                                    display: 'block',
                                    width: '10vh',
                                    height: '10vh',
                                    margin: '1rem 6rem'
                                }}
                            />
                            <Label>{item.title}</Label>
                        </div>
                    ))}
                </Masonry>
            </Box>

        </>
    )
}
const itemData = [
    {
        img: nodejs,
        title: 'Node JS',
    },
    {
        img: react,
        title: 'React',
    },
    {
        img: htmlcssjs,
        title: 'HTML-CSS-JS',
    },
    // {
    //     img: angular,
    //     title: 'Angular',
    // }, 
    {
        img: postgresql,
        title: 'PGSQL',
    },
    {
        img: sqlServer,
        title: 'SQL server',
    },
    {
        img: firebase,
        title: 'Firebase',
    },
    {
        img: git,
        title: 'Git',
    }
]
