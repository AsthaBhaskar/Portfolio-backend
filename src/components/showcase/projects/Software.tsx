import React from 'react';
// @ts-ignore
import computer from '../../../assets/pictures/projects/software/computer.mp4';
// @ts-ignore
import kapturVideo from '../../../assets/pictures/projects/software/Kaptur.mp4';
// @ts-ignore
import atsVideo from '../../../assets/pictures/projects/software/ATS.mp4';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';
// @ts-ignore
import callingAgentVideo from '../../../assets/pictures/projects/software/Calling Agent.mp4';
// @ts-ignore
import researchMindVideo from '../../../assets/pictures/projects/software/researchMind.mp4';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>AI & Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite AI and software projects I have worked on
                over the last few years, showcasing my expertise in machine learning, 
                generative AI, and full-stack development.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>AI Calling Restaurant Receptionist Agent</h2>
                <br />
                <p>
                    Built a fully autonomous voice-based restaurant receptionist that answers customer calls, 
                    checks real-time table availability, and books reservations automatically using AI. 
                    The agent integrates OpenAI’s conversational intelligence with workflow automation tools 
                    to deliver a natural and seamless booking experience.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={callingAgentVideo} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Demo of the AI Calling Restaurant Receptionist Agent handling a live booking call.
                        </sub>
                    </p>
                </div>
                <p>
                    The system uses <b>OpenAI GPT models </b> to interpret user intent, 
                    <b>VAPI</b> for voice telephony, and <b>Make.com</b> for orchestrating automation workflows. 
                    It connects with the <b>Google Calendar API</b> to verify table availability, 
                    recommend alternate time slots when necessary, and confirm bookings automatically. 
                    This project demonstrates a practical use of conversational AI for real-world automation.
                </p>
                <br />
                <h3>Technologies Used:</h3>
                <ul>
                    <li><p>AI/NLP: OpenAI GPT-5 </p></li>
                    <li><p>Voice Interface: VAPI (Voice AI)</p></li>
                    <li><p>Automation: Make.com</p></li>
                    <li><p>Integration: Google Calendar API</p></li>
                    <li><p>Scheduling: ISO-8601 time logic and slot validation</p></li>
                </ul>
                <br />
                <h3>Key Features:</h3>
                <ul>
                    <li><p>Natural, real-time voice conversations for booking</p></li>
                    <li><p>Automated availability checks via Google Calendar</p></li>
                    <li><p>Dynamic fallback for alternative time suggestions</p></li>
                    <li><p>Instant reservation confirmation with event creation</p></li>
                    <li><p>End-to-end voice automation powered by OpenAI + Make</p></li>
                </ul>
                <br />
                <h3>Impact & Outcome:</h3>
                <ul>
                    <li><p>Enabled 24/7 autonomous reservation handling with human-like interactions</p></li>
                    <li><p>Eliminated manual call handling and booking errors</p></li>
                    <li><p>Showcased the fusion of conversational AI, voice technology, and automation</p></li>
                </ul>
            </div>

            <div className="text-block">
                <h2>ResearchMind: Multi-Agent AI Research Pipeline</h2>
                <br />
                <p>
                    Built a fully autonomous multi-agent research pipeline powered by LangGraph, where four
                    specialized AI agents — Search, Reader, Writer, and Critic — collaborate to produce
                    high-quality, self-improving research reports from a single topic prompt.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={researchMindVideo} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 2:</b> Demo of ResearchMind — multi-agent pipeline with live progress, critic scoring, and downloadable report.
                        </sub>
                    </p>
                </div>
                <p>
                    The system uses a <b>Critic–Writer feedback loop</b> where the Critic scores each draft
                    out of 10 and injects targeted feedback back into the Writer until the report meets a
                    quality threshold (default 7/10) or exhausts the revision budget. A{' '}
                    <b>Supabase semantic cache</b> short-circuits expensive web searches for previously
                    researched topics, delivering polished reports in a fraction of the time. The
                    React + Vite frontend streams live node-by-node agent progress via SSE.
                </p>
                <br />
                <h3>Technologies Used:</h3>
                <ul>
                    <li><p>Agent Framework: LangGraph, LangChain</p></li>
                    <li><p>LLM: Mistral AI (mistral-small-latest)</p></li>
                    <li><p>Web Search: Tavily API</p></li>
                    <li><p>Web Scraping: requests + BeautifulSoup4</p></li>
                    <li><p>Memory / Cache: Supabase (PostgreSQL)</p></li>
                    <li><p>Backend: FastAPI (SSE streaming)</p></li>
                    <li><p>Frontend: React + Vite</p></li>
                    <li><p>Deployment: Vercel (frontend), Render (backend)</p></li>
                </ul>
                <br />
                <h3>Key Features:</h3>
                <ul>
                    <li><p>Four specialized agents collaborating via a shared LangGraph state machine</p></li>
                    <li><p>Self-improving reports with iterative Critic–Writer revision cycles</p></li>
                    <li><p>Supabase semantic cache to skip redundant web searches</p></li>
                    <li><p>Live streaming of agent progress, scores, and critic feedback to the React UI</p></li>
                    <li><p>Downloadable final reports with structured Introduction, Findings, Conclusion, and Sources</p></li>
                </ul>
                <br />
                <h3>Live Demo:</h3>
                <ul>
                    <li>
                        <p>
                            <a href="https://multi-agent-research-agent.vercel.app/" target="_blank" rel="noreferrer">
                                multi-agent-research-agent.vercel.app
                            </a>
                        </p>
                    </li>
                </ul>
            </div>

            <div className="text-block">
                <h2>Personal Portfolio Website</h2>
                <br />
                <p>
                    An interactive, OS‑style portfolio built with React and TypeScript. It includes draggable, resizable windows,
                    a desktop with shortcuts, and an internal app that routes to pages like About, Experience, Projects, and Contact.
                    The site is designed to feel playful and retro while remaining fast and accessible.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={computer} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> Demo of the portfolio interface with OS‑style windowing.
                        </sub>
                    </p>
                </div>
                <p>
                    Built with React, TypeScript, and React Router, styled with custom CSS to emulate classic desktop UI. The
                    portfolio runs as a single‑page app and can be deployed to any static host.
                </p>
                <br />
                <h3>Technologies Used:</h3>
                <ul>
                    <li><p>React, TypeScript, React Router</p></li>
                    <li><p>Custom CSS, retro OS‑style components</p></li>
                    <li><p>Deployment: Vercel/Netlify or any static host</p></li>
                </ul>
                <br />
                <h3>Key Features:</h3>
                <ul>
                    <li><p>Desktop OS‑style UI with draggable/resizable windows</p></li>
                    <li><p>In‑window router for About/Experience/Projects/Contact</p></li>
                    <li><p>Lightweight and fast SPA</p></li>
                </ul>
            </div>
            <div className="text-block">
                <h2>Kaptur: Full-Stack Social Media App</h2>
                <br />
                <p>
                    Kaptur is a comprehensive full‑stack social media application built using the MERN stack. It includes
                    secure auth, a real‑time UX, and cloud‑hosted media.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={kapturVideo} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 4:</b> Demo of the Kaptur: Full-Stack Social Media App.
                        </sub>
                    </p>
                </div>
                <p>
                    React + TailwindCSS frontend, Node.js/Express backend with JWT, MongoDB for data, and Cloudinary for media. 
                    Deployed on Vercel (frontend) and Render (backend).
                </p>
                <br />
                <h3>Technologies Used:</h3>
                <ul>
                    <li><p>Frontend: React, TailwindCSS</p></li>
                    <li><p>Backend: Node.js, Express, JWT</p></li>
                    <li><p>Database: MongoDB</p></li>
                    <li><p>Storage: Cloudinary</p></li>
                    <li><p>Deployment: Vercel, Render</p></li>
                </ul>
            </div>
            <div className="text-block">
                <h2>AI-Driven Resume and Job Alignment System</h2>
                <br />
                <p>
                    Developed an intelligent resume analysis application using Google Generative AI (Gemini 1.5 Flash) API. 
                    This project provides personalized ATS and HR feedback, identifying missing keywords and offering 
                    personalized advice to help job seekers optimize their resumes for better job matching.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={atsVideo} />
                    <div>
                        <p style={styles.caption}>
                            <sub>
                                <b>Figure 5:</b> Demo of the AI-Driven Resume and Job Alignment System.
                            </sub>
                        </p>
                    </div>
                </div>
                <p>
                    The system leverages advanced NLP techniques and Google's Gemini 1.5 Flash model to analyze resume content, 
                    compare it against job descriptions, and provide actionable insights. The application includes PDF processing 
                    capabilities using PDF2Image and Langchain for document handling, making it easy for users to upload and 
                    analyze their resumes.
                </p>
                <br />
                <h3>Technologies Used:</h3>
                <ul>
                    <li><p>AI/ML: Gemini 1.5 Flash, Langchain</p></li>
                    <li><p>Frontend: Streamlit, React</p></li>
                    <li><p>Document Processing: PDF2Image</p></li>
                    <li><p>NLP: Advanced text analysis and keyword extraction</p></li>
                </ul>
                <br />
                <h3>Key Features:</h3>
                <ul>
                    <li><p>Automated resume analysis using AI</p></li>
                    <li><p>ATS optimization recommendations</p></li>
                    <li><p>Keyword gap analysis</p></li>
                    <li><p>Personalized improvement suggestions</p></li>
                    <li><p>PDF upload and processing</p></li>
                    <li><p>User-friendly web interface</p></li>
                </ul>
            </div>
            <div className="text-block">
                <h2>Early PCOS Detection using Advanced ML</h2>
                <br />
                <p>
                    Led a comprehensive PCOS (Polycystic Ovary Syndrome) diagnosis project achieving 96.02% accuracy 
                    by integrating and optimizing machine learning algorithms. This project addresses a critical 
                    healthcare challenge by developing an AI-powered diagnostic system that can help in early 
                    detection of PCOS, a common endocrine disorder affecting women.
                </p>
                <br />
                {/* No video/image requested for this project */}
                <p>
                    The project utilized a combination of machine learning algorithms including Random Forest, 
                    XGBoost, and SVM, with advanced data balancing techniques (ADASYN, SMOTE) and feature 
                    selection methods (chi-square, RFE). The proposed model addresses data imbalance using 
                    ADASYN and feature selection with Chi-square, utilizing XGBoost for effective classification 
                    and diagnosis of PCOS.
                </p>
                <br />
                <h3>Technologies Used:</h3>
                <ul>
                    <li><p>ML Algorithms: Random Forest, XGBoost, SVM</p></li>
                    <li><p>Data Balancing: ADASYN, SMOTE</p></li>
                    <li><p>Feature Selection: Chi-square, RFE</p></li>
                    <li><p>Python Libraries: Scikit-learn, Pandas, NumPy</p></li>
                </ul>
                <br />
                <h3>Key Achievements:</h3>
                <ul>
                    <li><p>96.02% accuracy in PCOS detection</p></li>
                    <li><p>Advanced data balancing techniques</p></li>
                    <li><p>Comprehensive feature selection</p></li>
                    <li><p>Multiple algorithm comparison</p></li>
                    <li><p>Real-world healthcare application</p></li>
                </ul>
            </div>
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;
