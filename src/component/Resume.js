import React from 'react'
import ResumeSegment from './ResumeSegment'
import ScrollAnimation from 'react-animate-on-scroll'

class Resume extends React.Component{
    render (){
        return(
            <div className='Resume'>
                {/* Resume Header */}
                <ScrollAnimation
                    animateIn='fadeIn'
                    animateOnce={true}
                    animatePreScroll={false}
                >
                    <h1 className ='MenuHeader' id='Resume'>Resume</h1>
                </ScrollAnimation>
                
                {/* <ResumeSegment
                    id = 'Education'
                    resumeHeader = 'Education'
                    details = {<p className='ResumeDetails'>
                        California State Polytechnic University, Pomona Computer Engineering, B.S. May 2019 <br/><br/>
                        Relevant Courses: C for Engineers, Object Oriented Programming, Data Structures for Engineers, Intro to Microcontrollers, 
                        Robotics, Microprocessor, Computer Architecture, OS for Embedded Applications<br/><br/>
                        Clubs: CPP AI, Institute of Electrical and Electronics Engineers, CPP Tennis Club (Treasurer)
                    </p>}
                /> 
                {<hr/>} */}
                {/* <ResumeSegment
                    id = 'WorkExperience'
                    resumeHeader = 'Work Experience'
                    details = {<p className='ResumeDetails'>
                        <h3>Software Engineer | Tata Consultancy Services, Woodland Hills, CA <br/> June 2019 – Current</h3>
                        <ul>
                            <li>Automated full reports to check servers’ status and collect data using Python Selenium and Pyautogui. 
                                Data was written into excel sheet and inserted into Oracle databases.</li>
                            <li>Applied computer vision in programs to detect and flag errors into databases. </li>
                            <li>Implemented multithreading to decrease program runtime.</li>
                            <li>Utilized Jupyter Notebook to parse and data manipulate log files from SoapUI responses.</li>
                        </ul>
                        <br/>
                        <h3>College Technical Intern | Northrop Grumman, Redondo Beach, CA <br/> June 2018 – August 2018 </h3>
                        <ul>
                            <li>Built a server implementing firmware updates, RAID 10 virtual disks, and OS Deployment</li>
                            <li>Executed and submitted the appropriate workflows matching customer’s requests to manage a Virtual Testing Environment</li>
                            <li>Worked with existing documents, provided updates to name changes, and looked for areas of opportunity to clean up language and better present technical information to customers</li>
                        </ul>
                        <br/>
                        <h3>IT Student Assistant | Cal Poly Pomona, Pomona, CA <br/> April 2016 – May 2019 </h3>
                        <ul>
                            <li>Provided tier 1 support: password, email, group account, walk-in, callback, wireless, VPN, etc. </li>
                            <li>Troubleshooted Pharos Print station issues: money, receipt, toner, billing system Cbord server.</li>
                            <li>Managed Incident and Request Tickets (ServiceNow) for staff and professors.</li>
                        </ul>
                    </p>}
                />
                {<hr/>} */}
                <ResumeSegment
                    id = 'Projects'
                    resumeHeader = 'Projects'
                    details = {<p className='ResumeDetails'>
                        <div className='row'>
                            <div className='col-3'>
                                <p>CPPAI TensorFlow Speech to Text <br/> May 2018 – May 2019</p>
                            </div>
                            <div className='col-9'>
                                <ul>
                                    <li>Modeled Speech to Text TensorFlow program with low label error rate on small data sets.</li>
                                    <li>Researched academic papers to make optimal STT model: Bidirectional LSTM RNN with CTC Loss.</li>
                                    <li>Preprocessed speech data to necessary format required in order to implement data into model.</li>
                                </ul>
                            </div>
                        </div>
                        
                        
                        <br/>
                        <h3>Bluetooth Arduino RC Car with Arm<br/> September 2017</h3>
                        <ul>
                            <li>Assembled a RC Car and 3D printed robot arm controlled via smartphone Bluetooth.</li>
                            <li>Controlled RC Car and arm with Bluetooth signal received through Arduino microcontroller.</li>
                            <li>Designed and developed an app with Android Studio to connect and communicate to Arduino.</li>
                        </ul>
                        <br/>
                        <h3>IoT Smart Lock <br/> June 2017</h3>
                        <ul>
                            <li>Built an IoT Smart Lock that levers a dead bolt using a servo controlled via smartphone.</li>
                            <li>Programmed Particle Photon microcontroller to move the servo using C# in Particle IDE.</li>
                            <li>Designed and developed an app with Android Studio using XML and Java. 
                                Remotely connected the app to the Particle Cloud allowing execution of the microcontroller program .</li>
                        </ul>
                    </p>}
                />
            </div>
        )
    }
}

export default Resume