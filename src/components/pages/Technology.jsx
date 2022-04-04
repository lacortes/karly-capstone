
import React from 'react';
import Article, { Artifact, Reference, ReferencesBlock, Title } from '../layout/Article';
import BaseLayout from '../layout/BaseLayout';
import CompBottomNav from '../organisms/CompBottomNav';

const Technology = () => {
    return (
        <BaseLayout> 
            <Article headerTitle='Technology'>

                <Artifact>
                    <Title text='First Year Experience'/>
                    <p>For this competency, I was able to demonstrate my adaptability in the fast-pace technological world. The first class that I took for my master’s program, I was assigned to do a video with two of my group members about the topic of first-year experience. It was my first time having to record a video in Zoom. None of my team members and I knew how to record a 30-minute video, so we had to practice twice before all of us felt comfortable recording in Zoom. We had to do it right because we did not know how to add any additional features in our video. This assignment was part of the curriculum for our class, it seems that schools are incorporating technology to their classes to enhance the experience of the student (Marshall, 2011). </p>
                    <ReferencesBlock>
                        <Reference>
                            <p>Marshall, S. (2011). Change, technology and higher education: Are universities capable of organizational change? Journal of Asynchronous Learning Networks, 15(4) 22-34.</p>
                        </Reference>
                    </ReferencesBlock>
                </Artifact>

                <Artifact>
                    <Title text='Leader Video'/>
                    <p>As a higher affair professional, I need to understand the population that I will be serving and learn how important technology has become to them (Coleman et al., 2006). The attached artifact is a video interview that I did with my team member about current problems in higher education today. From a 20 minute video, my team member and I had to shorten the video to 8 minutes. My team member and I had to assess the quality of the information from the interview so we could present it in class within the allotted eight minutes. In the video, there is background music, color, and filters that makes the video look more professional. My team member and I learned several technological applications in the process of making the interview. </p>
                    <ReferencesBlock>
                        <Reference>
                            <p>Coleman, J. K., Little, S. D., &amp; Lester, A. (2006). Connecting services to students: New technology and implications for student affairs. College Student Affairs Journal, 25(2), 220–227.</p>
                        </Reference>
                    </ReferencesBlock>
                </Artifact>

                <Artifact>
                    <Title text='Video for Campus Life'/>
                    <p>As the Campus Life Intern for Clubs and Organizations last year, I made a video for interview and recruitment day. I listed the competencies that one would fulfill while being in the position that I was working in Campus Life. I was able to utilize social media to advertise the position for the next incoming CCSD student that would like to get involved in the department. Any student that participated in the event were able to see my video that I discussed my position and the overall community Campus Life can offer to them. Student learning professionals are recognizing the importance technology brings to the student’s education (Renes &amp; Strange, 2010). </p>
                    <ReferencesBlock>
                        <Reference>
                            <p>Renes, S. L., &amp; Strange, A. T. (2010). Using Technology to Enhance Higher Education. Innovative Higher Education, 36(3), 203-213. doi:10.1007/s10755-010-9167-3</p>
                        </Reference>
                    </ReferencesBlock>
                </Artifact>
                <CompBottomNav prev='/competencies/student-learning-dev' next='/competencies/advising-and-support'/>
            </Article>
        </BaseLayout>
    );
};

export default Technology;
