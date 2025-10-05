import React from 'react';
// @ts-ignore
import computer from '../../../assets/pictures/projects/software/computer.mp4';
// @ts-ignore
import kapturVideo from '../../../assets/pictures/projects/software/Kaptur.mp4';
// @ts-ignore
import atsVideo from '../../../assets/pictures/projects/software/ATS.mp4';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

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
                            <b>Figure 1:</b> Demo of the portfolio interface with OS‑style windowing.
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
                            <b>Figure 2:</b> Demo of the Kaptur: Full-Stack Social Media App.
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
                                <b>Figure 3:</b> Demo of the AI-Driven Resume and Job Alignment System.
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
