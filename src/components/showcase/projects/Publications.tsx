import React from 'react';

export interface PublicationsProps {}

const Publications: React.FC<PublicationsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Research Publications</h1>
            <h3>Selected Papers</h3>
            <br />
            <div className="text-block">
                <h2>Automatic Credit Card Approval Prediction System</h2>
                <p>
                    <b>Venue:</b> ICCCN-2022, AIP Conference Proceedings — Manchester Metropolitan University, UK
                </p>
                <br />
                <p>
                    Within the banking industry, requests for credit cards are growing tremendously, and manually reviewing each application is frequently a tiresome task that is also prone to human error. In this situation, banks and other big financial institutions can use a machine learning model to forecast whether or not to grant the customer a credit card. Banks utilize machine learning techniques to process their financial data, extract knowledge from it, and use it for risk management and decision-making. This study has created, trained, and evaluated three classification models utilizing authentic Kaggle datasets. The main research goal is to assess and contrast the models based on how accurately they project the composition of the typical class. In this work, we examine the accuracy, F1 Score, Precision, and confusion matrix of different supervised machine learning models to estimate the probability that a credit card request would be approved. After testing three classifiers, it is discovered that Random Forest outperformed Decision Tree and Logistic Regression. Random Forest’s accuracy is 94.67%, precision is 0.85, recall is 0.980, and F1 Score is 2.940.
                </p>
                <br />
                <p>
                    <a href="https://pubs.aip.org/aip/acp/article-abstract/2919/1/050007/3278966/Automatic-credit-card-approval-prediction-system?redirectedFrom=fulltext" target="_blank" rel="noreferrer">View on AIP</a>
                </p>
            </div>

            <div className="text-block">
                <h2>Conversational AI: A Treatise About Vying Chatbots</h2>
                <p>
                    <b>Venue:</b> ICDT-2024, IEEE Publication — GL BAJAJ, Greater Noida, India
                </p>
                <br />
                <p>
                    With so many chatbot alternatives available today, users sometimes struggle to choose the best one for their sector. This research paper offers a comprehensive comparison of various chatbots including Microsoft Copilot, ChatGPT, GPT-4, BlenderBot-3, and Gemini to aid users in selecting the most suitable option for their respective sectors like for educational purposes. By helping consumers comprehend the capabilities of chatbots and enabling well-informed decision-making during chatbot installation, the research seeks to offer insightful information about the state of chatbot technology today. In order to give a thorough evaluation of chatbot efficacy, the study also explores important factors including emotional presentation, management of objectionable information, and flexibility to human input. Key features like discussion applicability, cost-effectiveness, accessibility, quality of training data, answer relevance, bias control and emotional expression were rigorously examined through a comprehensive review procedure that involved specific inquiries directed to different chatbots.
                </p>
                <br />
                <p>
                    <a href="https://ieeexplore.ieee.org/abstract/document/10489545" target="_blank" rel="noreferrer">View on IEEE Xplore</a>
                </p>
            </div>

            <div className="text-block">
                <h2>Predict Pawpularity Score of Pets using State of Art Algorithms</h2>
                <p>
                    <b>Venue:</b> InCITe-2023, Springer — Amity University, Greater Noida, India
                </p>
                <br />
                <p>
                    Every day, all across the world, strays languish on the streets or are killed in shelters. There are many animals available for adoption. A shelter may become overcrowded if there are too many animals available and the facility’s capacity is exceeded. To speed up adoptions and prevent congestion, websites for pet adoption must evaluate which features or basic information about pets are most significant to individuals who may adopt pets. Therefore, it would be crucial to understand what qualities a picture should have to become the most well-liked to successfully take in abandoned pets. The importance of pawpularity (cuteness) ratings for stray animals cannot be overstated, yet the process is time and labor-intensive. In response to these concerns, decision trees, random forests, K Neighbors Regressor, and gradient boosting algorithms were used to predict the required parameter. The objective is to identify which technique is most effective at predicting adoption rates or popularity. The metric used is RMSE that came out to be 21.70 for the K Neighbors Regressor, 21.02 for the Random Forest Regressor and for Gradient Boosting Regressor it was 21.19.
                </p>
                <br />
                <p>
                    <a href="https://link.springer.com/chapter/10.1007/978-981-99-5997-6_31" target="_blank" rel="noreferrer">View on Springer</a>
                </p>
            </div>

            <div className="text-block">
                <h2>Advancing Skin Cancer Detection Accuracy with ESRGAN-Enhanced Images and Deep Learning Models</h2>
                <p>
                    <b>Venue:</b> Springer — BITS Pilani Dubai, UAE
                </p>
                <br />
                <p>
                    Skin cancer, a fatal disease involving abnormal cell growth, is a serious health issue worldwide. For treatment to be successful and patient outcomes to be enhanced, early detection is critical. Effective and accurate diagnostic tools are required since the incidence of skin cancer is increasing. Deep learning algorithms can improve skin cancer detection since they can read complex patterns in medical images. This study examines the essential importance of skin cancer diagnosis while noting the potential of deep learning in accomplishing it. The objective of this research is to use MobileNet, an extremely successful CNN model, in classifying melanoma, the most dangerous type of skin cancer. Data augmentation and Improved Super-Resolution Generative Adversarial Networks (ESRGANs), a sophisticated image enhancement technique that improves the resolution and quality of dermatoscopic images on the MNIST HAM10000 dataset, are utilized in this study to enhance the accuracy of model classification.
                </p>
                <br />
                <p>
                    After photo improvement with ESRGAN technology, scientists validated the MobileNet model with the HAM10000 dataset. In this stage, they experimentally measured to what extent image augmentation can enhance the model's capability to correctly classify the condition of the skin. The most important evaluation measures—recall, precision, accuracy, and an overall measure referred to as the F1 score—were used to develop this. Based on the test results, classification accuracy is significantly improved when ESRGAN images are employed. The enhanced dataset performs better than the base dataset in F1, recall, accuracy, and precision. Throughout the test, the MobileNet classification models recorded a 98% embarking accuracy. This research demonstrates how image enhancement combined with deep learning could significantly enhance the accuracy of skin cancer diagnosis and enhance patient care.
                </p>
            </div>
        </div>
    );
};

export default Publications;


