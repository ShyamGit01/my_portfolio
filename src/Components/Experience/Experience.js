import './Experience.css'
import isu from '../../images/companyLogo/isu_logo.png'
import jsl from '../../images/companyLogo/JSL_logo.png'

import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab'
import { Book, ExpandMore, MenuBook, School } from '@mui/icons-material'

export default function Experience({ data }) {
    return (
        <>
            <div className='title'>EXPERIENCE</div>

            <div className='heading'>WORK EXPERIENCE ON</div>
            <br />

            <Timeline position="left">
                {data.map((el, i) => <TimelineItem key={i}>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                    >
                        {el.time}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: (el.isActivelyWorking) ? 'success.main' : 'secondary.main' }} />
                        <TimelineDot color={(el.isActivelyWorking) ? 'success' : 'error'}>
                            {/* <School /> */}
                            <img src={`${el.logo}`} srcSet={`${el.logo}`} loading="lazy" alt="" style={{ backgroundColor: 'white', borderRadius: '50%' }} />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: (el.isActivelyWorking) ? 'success.main' : 'secondary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>{el.company}</Typography>
                            </AccordionSummary>
                            <AccordionDetails style={{ textAlign: 'initial' }}>
                                <Typography>Job Role: {el.jobRole}</Typography>
                                <Typography>Technology: {el.technology}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    </TimelineContent>
                </TimelineItem>
                )}

            </Timeline>
        </>
    )
}