import React from 'react'
import ResumeSegment from './ResumeSegment'
import { connect } from 'react-redux'
import ScrollAnimation from 'react-animate-on-scroll'

class Resume extends React.Component {
    render() {
        const style = {
            paddingTop: this.props.menuSize
        }

        return (
            <div className='Resume'
                style={style}
            >
                {/* Resume Header */}
                <ScrollAnimation
                    animateIn='fadeIn'
                    animateOnce={true}
                    animatePreScroll={false}
                >
                    <h1 className='MenuHeader' id='Resume'>Resume</h1><br />
                </ScrollAnimation>

                {/* ResumeHeader Education*/}
                <ScrollAnimation
                    animateIn='fadeIn'
                    animateOnce={true}
                    animatePreScroll={false}
                >
                    <div className='ResumeHeader'>
                        <div className='row'>
                            <div className='col-3'>
                                <h3>Education</h3>
                            </div>
                        </div>
                    </div><br />
                </ScrollAnimation>
                <ResumeSegment
                    id='CPP'
                    title='California State Polytechnic University, Pomona'
                    date='May 2019'
                    details={<ul>
                        <div>Major: Computer Engineering, B.S.</div><br />
                        <div>Relevant Courses: C for Engineers, Object Oriented Programming, Data Structures for Engineers, Intro to Microcontrollers,
                            Robotics, Microprocessor, Computer Architecture, OS for Embedded Applications</div><br />
                        <div>Clubs: CPP AI, Institute of Electrical and Electronics Engineers, CPP Tennis Club (Treasurer).</div>
                    </ul>}
                />
                <hr />

                {/* ResumeHeader WorkExperience*/}
                <ScrollAnimation
                    animateIn='fadeIn'
                    animateOnce={true}
                    animatePreScroll={false}
                >
                    <div className='ResumeHeader'>
                        <div className='row'>
                            <div className='col-3'>
                                <h3>Work Experience</h3>
                            </div>
                        </div>
                    </div><br />
                </ScrollAnimation>
                <ResumeSegment
                    id='System1'
                    title='Software Engineer'
                    company='System1'
                    location='Venice, CA'
                    date='March 2020 – Current'
                    details={<ul>
                        <li>Designed, developed, and enhanced Python Flask bot detection system (BDS) to filter through millions of requests 
                            per day to deny requests from spamming or scraping our websites.</li>
                        <li>Centralized users' activity count in DynamoDB to rate limit aggressive bots.</li>
                        <li>Automated Jenkins jobs to execute scripts, update databases, and build and deploy Docker containers to AWS.</li>
                        <li>Implemented Redis to quickly update configurations and check if users’ parameters match our rules.</li>
                        <li>Migrated millions of daily requests to be proxied through Cloudflare to utilize edge layer protection.</li>
                        <li>Created and automated internal Cloudflare tools to deploy and update thousands of IPs across firewalls and rate limits.</li>
                        <li>Cross-collaborated with other teams and architectured the flow to use BDS decision to trigger Cloudflare captcha.</li>
                        <li>Optimized BDS by reducing response time by 80% utilizing Datadog and New Relic metrics.</li>
                        <li>Analyzed Snowflake SQL database to extract bot traffic patterns and pushed configs to AWS S3.</li>
                    </ul>}
                />
                <ResumeSegment
                    id='TCS'
                    title='Software Engineer'
                    company='Tata Consultancy Services'
                    location='Woodland Hills, CA'
                    date='June 2019 – February 2020'
                    details={<ul>
                        <li>Automated full reports to check servers’ status and collect data using Python Selenium.
                            Data was written into excel sheet and inserted into SQL database.</li>
                        <li>Designed and implemented tools for development team.</li>
                        <li>Applied computer vision in programs to detect and flag errors from screenshots. </li>
                        <li>Created self-healing applications to reduce downtime and increase operational throughput.</li>
                        <li>Utilized Jupyter Notebook to parse and manipulate data in log files from SoapUI responses.</li>
                    </ul>}
                />
                <ResumeSegment
                    id='NorthropGumman'
                    title='College Technical Intern'
                    company='Northrop Grumman'
                    location='Redondo Beach, CA'
                    date='June 2018 – August 2018'
                    details={<ul>
                        <li>Built a server implementing firmware updates, RAID 10 virtual disks, and OS Deployment.</li>
                        <li>Executed and submitted the appropriate workflows matching customer’s requests to manage a Virtual Testing Environment.</li>
                        <li>Worked with existing documents, provided updates to name changes, and looked for areas of opportunity to clean up language and better present technical information to customers.</li>
                    </ul>}
                />
                <ResumeSegment
                    id='CPPIT'
                    title='IT Student Assistant'
                    company='Cal Poly Pomona'
                    location='Pomona, CA'
                    date='April 2016 – May 2019'
                    details={<ul>
                        <li>Provided tier 1 support: password, email, group account, walk-in, callback, wireless, VPN, etc. </li>
                        <li>Troubleshooted Pharos Print station issues: money, receipt, toner, billing system Cbord server.</li>
                        <li>Managed Incident and Request Tickets (ServiceNow) for staff and professors.</li>
                    </ul>}
                />
                <hr />

                {/* ResumeHeader Projects*/}
                <ScrollAnimation
                    animateIn='fadeIn'
                    animateOnce={true}
                    animatePreScroll={false}
                >
                    <div className='ResumeHeader'>
                        <div className='row'>
                            <div className='col-3'>
                                <h3>Projects</h3>
                            </div>
                        </div>
                    </div><br />
                </ScrollAnimation>
                <ResumeSegment
                    id='PersonalWebsite'
                    title='Personal Website'
                    date='September 2019 – November 2019'
                    details={<ul>
                        <li>Designed and developed a website using HTML, CSS, Bootstrap, JavaScript, and ReactJS.</li>
                        <li>Created CSS template working with CSS Background, positioning, text, margin, and padding.</li>
                        <li>Maintained states in the stores and dispatched the actions using redux.</li>
                        <li>Utilized AWS Services S3, VPC, Cloudfront, Route53, Certificate Manager to deploy and host with custom domain.</li>
                    </ul>}
                />
                <ResumeSegment
                    id='CPPAITensorFlow'
                    title='CPPAI TensorFlow Speech to Text'
                    date='May 2018 – May 2019'
                    details={<ul>
                        <li>Modeled Speech to Text TensorFlow program with low label error rate on small data sets.</li>
                        <li>Researched academic papers to make optimal STT model: Bidirectional LSTM RNN with CTC Loss.</li>
                        <li>Preprocessed speech data to necessary format required in order to implement data into model.</li>
                    </ul>}
                />
                <ResumeSegment
                    id='BluetoothArduino'
                    title='Bluetooth Arduino RC Car with Arm'
                    date='September 2017'
                    details={<ul>
                        <li>Assembled a RC Car and 3D printed robot arm controlled via smartphone Bluetooth.</li>
                        <li>Controlled RC Car and arm with Bluetooth signal received through Arduino microcontroller.</li>
                        <li>Designed and developed an app with Android Studio to connect and communicate to Arduino.</li>
                        <a className='App-link' href="https://www.youtube.com/watch?v=jmNElQp-yrc">Click Here for Demo</a>
                    </ul>}
                />
                <ResumeSegment
                    id='IoT'
                    title='IoT Smart Lock'
                    date='June 2017'
                    details={<ul>
                        <li>Built an IoT Smart Lock that levers a dead bolt using a servo controlled via smartphone.</li>
                        <li>Programmed Particle Photon microcontroller to move the servo using C# in Particle IDE.</li>
                        <li>Designed and developed an app with Android Studio using XML and Java.</li>
                        <li>Remotely connected the app to the Particle Cloud allowing execution of the microcontroller program.</li>
                    </ul>}
                />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        menuSize: state.MenuSpecs.menuSize
    }
}

export default connect(mapStateToProps)(Resume)