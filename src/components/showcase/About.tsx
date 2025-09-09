import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Astha Bhaskar</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm an AI System Engineer and Machine Learning enthusiast currently pursuing my Bachelor's in Computer Science Engineering and Artificial Intelligence at Indira Gandhi Delhi Technical University for Women. I'm passionate about building innovative AI solutions and have extensive experience in Generative AI, Machine Learning, and Full-Stack Development.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:asthabhakar30@gmail.com">
                        asthabhakar30@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    My fascination with AI began the first time I watched Iron Man. Seeing JARVIS hold conversations and orchestrate entire scenes felt magical. Even before I understood it was movie make‑believe, I knew I wanted to build something like that. That spark never left—and it grew into a mission to create useful, human‑centered intelligent systems.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> A real photo of me developing this
                            website :)
                        </sub>
                    </p>
                </div>

                <p>
                    At Indira Gandhi Delhi Technical University for Women(IGDTUW), I began turning that curiosity into practice—starting with computer vision and natural language processing. Since then, I’ve built automated ML DL models, Twitter agents, RAG apps for legal compliance, and voice‑driven conversational assistants. Many of these projects are showcased on my{' '}
                    <Link to="/projects/software">Software Projects</Link> page.
                </p>
                <br />
                <p>
                    In 2021, I got accepted into Indira Gandhi Delhi Technical University for Women(IGDTUW) to pursue Computer Science Engineering and Artificial Intelligence. Along the way, I interned with Ernst & Young (EY), Insight Labs AI, NCRTC and Ignitus—doubling down on Generative AI, Computer Vision, and NLP through hands‑on projects and production work.
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Hobbies</h3>
                        <br />
                        <p>
                            Beyond AI, I love exploring ideas—writing, tinkering, and sharing. I’ve published research in IEEE venues on Conversational AI, Credit Card Approval Prediction, and Pet Popularity Scoring, and I contribute to open‑source when I can. You’ll usually find me reading papers, attending AI talks, or experimenting with new models and tools.
                        </p>
                        <br />
                        <p>
                            During my academic journey, I have been actively involved in research and have contributed to multiple publications in prestigious conferences. I believe in the power of AI to solve real-world problems and am always excited to work on projects that can make a meaningful impact in society. I believe AI should be practical, transparent, and helpful. My goal is simple: build systems that feel as intuitive as JARVIS—minus the Hollywood budget.
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Me, April 2022
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and everything it has to
                    offer. Feel free to connect with me on LinkedIn or GitHub to learn more about my work and projects.
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:asthabhaskar30@gmail.com">
                        asthabhaskar30@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
