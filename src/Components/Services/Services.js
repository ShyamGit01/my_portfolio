import { Container } from '@mui/material'
import './Services.css'
import webApp from '../../images/services/webApp.png'
import api from '../../images/services/api.png'
import CloudServer from '../../images/services/CloudServer.png'

export default function Services() {
    return (
        <>
            <div className='title'>SERVICE</div>

            <div className='heading'>SOME EXPERTIES</div>

            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="service-image"><img src={webApp} alt="service-img" /></div>
                        <div class="service">
                            <div class="service-title">Web Application</div>
                            <div class="service-description">
                                <p>descrption</p>
                            </div>

                        </div>

                    </div>
                    <div class="col">
                        <div class="service-image"><img src={api} alt="service-img" /></div>
                        <div class="service">
                            <div class="service-title">API</div>
                            <div class="service-description">
                                <p>descrption</p>
                            </div>

                        </div>

                    </div>
                    <div class="col">
                        <div class="service-image"><img src={CloudServer} alt="service-img" /></div>
                        <div class="service">
                            <div class="service-title">Cloud Server</div>
                            <div class="service-description">
                                <p>descrption</p>
                            </div>

                        </div>

                    </div>
                </div>


            </div>

        </>
    )
}