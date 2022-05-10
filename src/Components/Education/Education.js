import { Typography } from '@mui/material'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab'
import { Book,  MenuBook,  School } from '@mui/icons-material'

export default function Education() {
    return (
        <>
            <div className='title'>EDUCATION</div>

            <div className='heading'>QUALIFIED ON</div>

            <br />

            <Timeline position="left">
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                    >
                        2018 - 2021
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
                        <TimelineDot  color="primary">
                            <School />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            B. Tech in Computer Sc. Engg.
                        </Typography>
                        <Typography>Veer Surendra Sai University of Technology, burla</Typography>
                        <Typography>CGPA - 7.2</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
                    >
                        2013 - 2016
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
                        <TimelineDot color="primary">
                            <Book />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            Diploma in Computer Sc. Engg.
                        </Typography>
                        <Typography>Bhubanananda Odisha School of Engineering (BOSE), CUTTACK</Typography>
                        <Typography>73 %</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
                    >
                        2013
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
                        <TimelineDot color="primary">
                            <MenuBook />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            Matriculation
                        </Typography>
                        <Typography>Balikuda High School, Balikuda</Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>

        </>
    )
}