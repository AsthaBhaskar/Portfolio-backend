import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Insight Labs AI</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://insightlabs.me/'}
                        >
                            <h4>www.insightlabs.me</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>AI System Engineer Intern</h3>
                        <b>
                            <p>Feb 2025 - August 2025</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Working on cutting-edge AI solutions and automation systems
                    for social media engagement and real-time analytics. Focused on
                    building intelligent systems using modern AI technologies and cloud platforms.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Built an automated Twitter Post, Search & Reply Bot using n8n, Grok3, OpenAI embeddings, and Supabase, enabling real-time engagement and growth in social presence.
                        </p>
                    </li>
                    <li>
                        <p>
                            Developed a server-side dynamic dashboard powered by live API data with MERN stack, providing real-time analytics and interactive visualizations.
                        </p>
                    </li>
                    <li>
                        <p>
                            Designed and deployed an AI chatbot with a customized personality using Google ADK, AWS Strands, and Grok4 LLM, tailored for domain-specific conversational experiences.
                        </p>
                    </li>
                    <li>
                        <p>
                            Created a crypto-oriented, voice-based conversational AI assistant leveraging Supabase real-time data feeds, ElevenLabs voice synthesis, and MERN, offering natural, voice-driven insights and interactions.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Ernst & Young (EY)</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://www.ey.com/'}
                        >
                            <h4>www.ey.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>GenAI Summer Intern</h3>
                        <b>
                            <p>May 2024 - August 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Worked on advanced AI applications for maritime legal compliance and fuel management optimization. 
                    Focused on developing RAG applications and machine learning models for real-world business applications.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Developed a Retrieval-Augmented Generation (RAG) application for Maritime Legal Compliance, improving legal research efficiency and compliance.
                        </p>
                    </li>
                    <li>
                        <p>
                            Fine-tuned the LLAMA3.1 model with specialized legal datasets, integrated unsupervised learning techniques (LoRA embeddings, Gradio) to enhance legal advice generation.
                        </p>
                    </li>
                    <li>
                        <p>
                            Achieved a 92.62 ROUGE score for rapid retrieval of relevant legal information, empowering legal practitioners in navigating complex maritime regulations.
                        </p>
                    </li>
                    <li>
                        <p>
                            Designed an AI-powered Fuel Management and Route Optimization System for tugboats using machine learning models to predict fuel consumption and optimize routes.
                        </p>
                    </li>
                    <li>
                        <p>
                            Achieved a 0.9638 R² score with Grid Search Gradient Boosting Regressor and Simulated Annealing Algorithm, reducing fuel costs and optimizing routes by 20%.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Ignitus</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://www.linkedin.com/company/igniteus/'}
                        >
                            <h4>www.ignitus.org</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Machine Learning Intern</h3>
                        <b>
                            <p>Jan. 2024 - May 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Worked on text generation models and NLP research for educational content creation. 
                    Focused on developing machine learning solutions for automated content generation in MOOC courses.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Developed a text generation model using NLP Markov chains on diverse datasets, enhancing creative text generation and automated content creation.
                        </p>
                    </li>
                    <li>
                        <p>
                            Conducted research optimizing the model for MOOC courses, contributing to innovative educational content generation.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>NCRTC</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://ncrtc.in/'}
                        >
                            <h4>www.ncrtc.in</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Summer Intern</h3>
                        <b>
                            <p>June 2023 - July 2023</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Worked on computer vision and AI applications for transportation systems. 
                    Focused on developing vehicle detection and recognition systems using deep learning techniques.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Designed and implemented an AI-powered Vehicle Detection and License Plate Recognition System using YOLOv8, OCR and deepSORT, achieving high accuracy in real-time vehicle detection.
                        </p>
                    </li>
                    <li>
                        <p>
                            Conducted research and developed a face detection model for HoloLens-2, optimizing accuracy and efficiency for enhanced user experience.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
