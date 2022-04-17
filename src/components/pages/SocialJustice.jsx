
import React from 'react';
import Article, { Artifact, Reference, ReferencesBlock, Title } from '../layout/Article';
import BaseLayout from '../layout/BaseLayout';
import CompBottomNav from '../organisms/CompBottomNav';

const SocialJustice = () => {
    return (
        <BaseLayout> 
            <Article headerTitle='Social Justice & Inclusion'>
                <Artifact>
                    <Title text='Multicultural Action Plan'/>
                    <p>The Multicultural Action Plan displays my ability to assess my implicit biases as a higher educational professional. This essay offers insight about my ability to learn about international students that are different from my own ethnicity. According to Pope et. al. (2019), it is critical to have awareness, knowledge, and skills to address cultural issues with someone who is different from oneself. Having multicultural competence can lead students to feel welcomed, inclusive, heard, and valued across campuses (Pope et. al., 2019). After completing this assignment, I was able to engage in critical reflection in order to identify one&apos;s own prejudices and biases. I learned that I was able to be culturally competent to serve the needs of students that are different from my own experience. Completing this assignment expands my knowledge of privilege, oppression, and power that propels me to be more aware of the social justice and equity that happens in higher education.</p>
                    <ReferencesBlock
                        artifacts={[ 'https://drive.google.com/file/d/1Mv-LBGTCcs_rBHRD3bX5M6WMjytL_TlU/view?usp=sharing' ]}
                    >
                        <Reference>
                            <p>Pope, R., Reynolds, A., &amp; Mueller, J. (Eds.), Multicultural Competence in Student Affairs (2nd ed., pp. 23-62). Jossey-Bass.</p>
                        </Reference>
                    </ReferencesBlock>
                </Artifact>

                <Artifact>
                    <Title text='Photo Elicitation about Privilege'/>
                    <p>The photo elicitation paper about privilege shows how a photo can demonstrate the privilege or the disadvantages one may or may not see in higher education. Privilege is not an object that people can physically see, hear, smell, or touch, but it does impact the lives of many individuals around the world. Privilege and racism are not a thing in the past, and everyone is affected by it at an early age (Tatum, 2017). Attached are my photo and essay in this artifact. Completing this paper helped me learn to address my perception of privilege, oppression, and justice around me using a photograph. This is everyone’s responsibility to spread awareness and counterattack the injustice of oppression, racism, privilege, and social justice in a higher education setting.</p>
                    <ReferencesBlock
                        artifacts={[ 'https://docs.google.com/document/d/1zUaFdM54UmDspVkpVJZNK2xql2NflPqC/edit?usp=sharing&ouid=112551125562924414081&rtpof=true&sd=true' ]}
                    >
                        <Reference>
                            <p>Tatum, B. (2017). Why are all the black kids sitting together in the cafeteria? And other questions about race. (Twentieth anniversary edition). Basic Books.</p>
                        </Reference>
                    </ReferencesBlock>
                </Artifact>

                <Artifact>
                    <Title text='Project Management Project'/>
                    <p>In this project management assignment, I made three workshops for my Front Desk Assistants (FDA) and my Resident Advisors. The purpose of these workshops was to foster strong enduring relationships and create a sense of belonging amongst my team. I wanted everyone in my team to feel included, valued, and welcomed working in Housing. I created a panel for the first workshop where my Resident Advisors heard the challenges that my first-year Front Desk Assistants had. The second workshop consisted of two events that were suggested by my FDAs this following year. My last workshop was a presentation on career advancement where my whole team received tips on career searches. After doing this assignment, I learned that I enjoy helping and listening to students. I was able to connect and build meaningful relationships with others while recognizing the multiple perspectives and developmental differences that people hold. According to Johnson et al. (2007), students need to know that they matter in a college setting, and their presence on campus is being noticed by others. </p>
                    <ReferencesBlock
                        artifacts={[ 'https://drive.google.com/file/d/11isfHxclAHzMGA6lX9CcuOR_Us-arNJt/view?usp=sharing' ]}
                    >
                        <Reference>
                            <p>Johnson, D. R., Soldner, M., Leonard, J. B., Alvarez, P., Inkelas, K. K., Rowan-Kenyon, H. T., &amp; Longerbeam, S. D. (2007). Examining sense of belonging among first-year undergraduates from different racial/ethnic groups. Journal of College Student Development. <a href="https://muse.jhu.edu/article/221315/summary" >https://muse.jhu.edu/article/221315/summary</a></p>
                        </Reference>
                    </ReferencesBlock>
                </Artifact>
                <CompBottomNav prev='/competencies/leadership' next='/competencies/student-learning-dev'/>
            </Article>
        </BaseLayout>
    );
};

export default SocialJustice;
