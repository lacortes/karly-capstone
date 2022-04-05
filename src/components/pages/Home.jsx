import React from 'react';
import ProfilePic from '../../../assets/images/face-pic.png';
import Logo from '../../../assets/images/logo-2.png';
import CppLogo from '../../../assets/images/cpp-logo.png';
import ApuLogo from '../../../assets/images/apu-logo.jpeg';
import BaseLayout from '../layout/BaseLayout';
import Article from '../layout/Article';

const AboutMe = () => {
    return (
        <Article headerTitle="About Me" headerClass="about-me-section">
            <div className="img-container">
                <img src={CppLogo} alt="cpp-logo" className="cpp-logo-img"/>
            </div>

            <p>
            My name is Karly Chavez. In June 2017, I received my bachelor&apos;s degree in Sociology from Cal-Poly Pomona. While in undergrad, 
            I held three leadership roles.
            </p>

            <div className="img-container">
                <img src={ApuLogo} alt="cpp-logo" className="apu-logo-img"/>
            </div>

            <p>
            When I began my journey at APU, I further explored my passion for helping students and my understanding of all the opportunities postsecondary education had to offer me that paved the way for my career path.
            </p>

            <p>
            By being in the counseling program, I was able to be challenged as an individual and professionally. I have been able to recognize and pinpoint my strengths, values, and morals that I bring to the field.
            </p>

            <p>
                Ready ... set ... Explore!
            </p>
        </Article>
    );
};

const Home = () => {

    return (
        <BaseLayout>
            <div className="middle-container">

                <div className="middle-horizontal">
                    <div className="home-aside">

                        <div className="profile-card-wrapper">
                            <div className="profile-card">
                                <div className="profile-pic-wrapper">
                                    <img src={ ProfilePic } alt='karly-profile-pic'/>
                                </div>
                                <div className="profile-pic-subtext">
                                    M.S. College counseling & student development
                                </div>
                            </div>
                            <div className="profile-backdrop"></div>
                        </div>

                    </div>

                    <div className="home-aside">

                        <div className="home-aside-wrapper">
                            <div className="info-header">
                                <div className="info-header-text">
                                    karly&apos;s capstone
                                </div>
                                <div className="info-badge">
                                    <img src={ Logo } alt='karly-logo'/>
                                </div>
                            </div>
                            <div className="info-card-wrapper">
                                <div className="info-card">
                                    <div className="info-card-text">
                                        Hello there! Thank you for taking the time to visit my website. 
                                        I hope you are all able to enjoy and explore my journey in the College Counseling and Student Development Program in Azusa Pacific University (APU) together. 
                                        This website is a trajectory of my educational journey in the APU master’s program.
                                    </div>
                                </div>
                                <div className="info-card-backdrop"></div>
                            </div>
                        </div>

                    </div> 
                </div>

                
                <div className="filler-box">
                </div>

            </div>

            

            <AboutMe />

        </BaseLayout> 
    );
};

export default Home;