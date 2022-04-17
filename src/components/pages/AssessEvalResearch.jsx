
import React from 'react';
import Article, { Artifact, Reference, ReferencesBlock, Title } from '../layout/Article';
import BaseLayout from '../layout/BaseLayout';
import CompBottomNav from '../organisms/CompBottomNav';

const AssessEvalResearch = () => {
    return (
        <BaseLayout> 
            <Article headerTitle='Assessment, Evaluation, & Research'>

                <Artifact>
                    <Title text='Program Assessment'/>
                    <p>In further developing my competence in assessment, evaluation, and research, I participated in evaluating an event that Mt. Sac hosted for international students called Global Pals. Global Pals was an orientation for all the international students in the Fall of 2021. During the orientation, the three hosts that were there had learning outcomes and activities for all the students that attended the orientation. The orientation had clear, specific, and measurable student outcomes for international students at the beginning of the orientation, which students knew what to expect. Towards the end of the orientation, the hosts asked all the students to fill out a confidential survey to improve the orientation for next time and to see if their objectives and outcomes were fulfilled (Blimling, 2013; Bresciani, 2011). The orientation enabled me to study important evaluation practices through the perspective of the student and how I can better support them. I will use the acquired knowledge being in the orientation whenever I will have to put on an orientation or a workshop on my own.</p>
                    <ReferencesBlock
                        artifacts={[ 
                            'https://docs.google.com/document/d/1U9tv8jdbGgdKnNdn-VN8aB5TPMTJ-b52/edit?usp=sharing&ouid=112551125562924414081&rtpof=true&sd=true', 
                            'https://docs.google.com/document/d/1HkaqCRrQMsvc_Yu4vRSdVaJnL49SUQRV/edit?usp=sharing&ouid=112551125562924414081&rtpof=true&sd=true' 
                        ]}
                    >
                        <Reference>
                            <p>Blimling, G.S. (2013). Challenges of assessment in student affairs. New Directions for Student Services, 142, 5-14.</p>
                        </Reference>
                        <Reference>
                            <p>Bresciani, M. J. (2011, August). Making assessment meaningful: What new student affairs professionals and those new to assessment need to know (NILOA Assessment Brief:Student Affairs). Urbana, IL: University of Illinois and Indiana University, National Institute for Learning Outcomes Assessment.</p>
                        </Reference>
                    </ReferencesBlock>
                </Artifact>

                <Artifact>
                    <Title text='Latinx Research Study'/>
                    <p>For my Quantitative Analysis class, I participated in a quantitative study that dealt with Latinx college students’ sense of belonging. For this research, I wanted to learn the obstacles that Latinx students faced when entering college and whether they felt connected to their campus. As a higher educational professional, it is essential to know the hardships that students endured before and while enrolled in school. During the study, I was able to effectively articulate, interpret, use assessment, and apply professional literature to my study to conclude the four overall themes that impacted Latinx students: sense of belonging, personal struggles, motivation, and school challenges. These four significant themes play an essential role to Latinx students that impact their retention in school and their overall enjoyment of their educational journey that higher educational professionals need to know (Hopkins et al., 2021). Early involvement on campus can benefit students’ sense of belonging and persistence of their education (Hopkins et al., 2021).</p>
                    <ReferencesBlock
                        artifacts={[ 'https://drive.google.com/file/d/1NWMIT_rPJSpFUWKqs8SFgvZwoCu749Z4/view?usp=sharing' ]}
                    >
                        <Reference>
                            <p>Hopkins, S., Workman, J. L., &amp; Truby, W. (2021). The out-of-classroom engagement experiences of first-generation college students that impact persistence. Georgia Journal of College Student Affairs, 37(1), 36–58.</p>
                        </Reference>
                    </ReferencesBlock>
                </Artifact>

                <Artifact>
                    <Title text='ADR Program Evaluation'/>
                    <p> The attached artifact is a program evaluation presentation that my group and I did for our Program Evaluation course. My peers and I collected quantitative and qualitative data to measure how effective the Office of Accessibility and Disability Services (ADR) at Azusa Pacific University (APU) is in fulfilling its mission, program, services, communication, collaboration, access, equity, diversity, and inclusion to all its students with disabilities. My colleagues and I wanted to evaluate the ADR center to assess if the center was fulfilling their objectives and mission across the APU’s campus with its students with disabilities. This assignment gave me insight and knowledge for applying to the Council for the Advancement of Standards in Higher Education (CAS) to effectively apply it in my research (Council for the Advancement of Standards in Higher Education, 2019). I was able to facilitate appropriate data collection for evaluating the program by using assessments, surveys, focus groups, transcribing, and current technology methods for our research. I was able to ensure all communication of assessment, evaluation, and research results are accurate, reliable, and effective.</p>
                    <ReferencesBlock
                        artifacts={[  'https://drive.google.com/file/d/1u4tyZ7NESXOyELHXUbnqEC9iW3OpCe88/view?usp=sharing' ]}
                    >
                        <Reference>
                            <p>Council for the Advancement of Standards in Higher Education. (2019). CAS Professional Standards for Higher Education (10th Ed.). Retrieved from <a href="https://www.cas.edu/store_category.asp?id=14" >https://www.cas.edu/store_category.asp?id=14</a></p>
                        </Reference>
                    </ReferencesBlock>
                </Artifact>

                <CompBottomNav prev='/competencies/values-philosophy-history' next='/competencies/law-policy-gov'/>
            </Article>
        </BaseLayout>
    );
};

export default AssessEvalResearch;
