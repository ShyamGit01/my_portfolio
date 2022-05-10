import './Experience.css'
import isu from '../../images/companyLogo/isu_logo.png'
import jsl from '../../images/companyLogo/JSL_logo.png'

import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab'
import { Book, ExpandMore, MenuBook, School } from '@mui/icons-material'

export default function Experience() {
    return (
        <>
            <div className='title'>EXPERIENCE</div>

            <div className='heading'>WORK EXPERIENCE ON</div>
            <br />

            <Timeline position="left">
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                    >
                        2021 - Present
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'success.main' }} />
                        <TimelineDot color="success">
                            {/* <School /> */}
                            <img src={isu} alt="" style={{backgroundColor: 'white', borderRadius: '50%'}} />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'success.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>IServeU Technology Pvt. Ltd. (ISU)</Typography>
                            </AccordionSummary>
                            <AccordionDetails style={{textAlign: 'initial'}}>
                                <Typography>Job Role: Software Engineer</Typography>
                                <Typography>Technology: Nodejs (Backend)</Typography>
                            </AccordionDetails>
                        </Accordion>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
                    >
                        2016 - 2018
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                        <TimelineDot color="error">
                            {/* <Book /> */}
                            <img src={jsl} alt="" style={{backgroundColor: 'white', borderRadius: '50%'}}/>
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Jindal Stainless LTD (JSL)</Typography>
                            </AccordionSummary>
                            <AccordionDetails style={{textAlign: 'initial'}}>
                                <Typography>Job Role: Junior Engineer</Typography>
                                <Typography>Technology: Asp.net, C#</Typography>
                            </AccordionDetails>
                        </Accordion>
                    </TimelineContent>
                </TimelineItem>

            </Timeline>
        </>
    )
}