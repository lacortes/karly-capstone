
import React from 'react';
import Article, { Artifact, Reference, ReferencesBlock, Title } from '../layout/Article';
import BaseLayout from '../layout/BaseLayout';
import CompBottomNav from '../organisms/CompBottomNav';

const StudentLearnDev = () => {
    return (
        <BaseLayout> 
            <Article headerTitle='Student Learning & Development'>

                <Artifact>
                    <Title text='Theory Poster'/>
                    <p>For the Process of Adult Development course, I was able to apply theory to improve and inform other student affairs professionals about the struggle of first-generation students entering college. Using Schlossberg’s Transition Theory, I described the hardships students faced while entering college and how first-generation students start off at a disadvantage compared to their other peers (Glaessgen et. al, 2018). Students that are first-generation are expected to acclimate to the university environment right away, but many professionals fail to understand those students’ struggles before they enter the university. (Glaessgen et. al, 2018). I was able to use theory that affects many first-generation students today, and I was able to articulate theory and models to describe the conditions and practices of those students that are enduring hardships while in school. I was able to learn how class, race, age, and ethnicity influence development during the college years.</p>
                    <ReferencesBlock>
                        <Reference>
                            <p>Glaessgen, T.A., MacGregor, C.J., Cornelius, J.H.D., Hornberger, R.S., &amp; Baumann, D.M. (2018). First-generation students with undecided major: A qualitative study of university reacculturation. NACADA Journal, 38(1), 22-35. Doi:10.12930/NACADA-16-030</p>
                        </Reference>
                    </ReferencesBlock>
                </Artifact>

                <Artifact>
                    <Title text='Personal Reflection Paper'/>
                    <p>The attached artifact is a personal reflection paper that I did in my Process of Adult course where I was able to identify some models of student learning and development in relation to formal theories. I was able to use theories to demonstrate the purpose of why I chose higher education as a career. I explained my own personal experiences, values, and beliefs to influence my development in this career path that I feel strongly about. I was able to come to the realization that everything I did in my undergrad experience was related to theory in the higher education setting. I was taught to believe that faculty, teachers, and staff members want the best for students, but what happens when that is not the case for all students (Magolda, 2001)? I had a terrible experience with my academic advisor when I was a first year college student; the external factors did not produce the expected results that I wanted (Magolda, 2001). As a result of the experience, I involved myself in clubs and organizations so I can help those students that staff and faculty were not helping with the student’s education. </p>
                    <ReferencesBlock>
                        <Reference>
                            <p>Magolda, M.B. (2001). The crossroads. Making their own (1st ed., pp. 93-119). Sterling Virginia</p>
                        </Reference>
                    </ReferencesBlock>
                </Artifact>

                <Artifact>
                    <Title text='Anxiety Among First-Generation Students'/>
                    <p>My group and I presented a mental health workshop in front of the staff and director of Upward Bound in Azusa Pacific University. We thought it was essential to talk about anxiety among first-generation students, since it impacts many students in colleges/universities (De La Cruz et al., 2021). We constructed learning outcomes for the presentation, informational slides, and a case study. After the presentation was over, all our viewers filled out a feedback survey on how my group did while presenting the workshop. We assessed the information that was given to us by the results of the survey to better improve our teaching and learning outcomes in the presentation. In that workshop, we wanted to equip higher education professionals with current problems that first-generation students are facing today and give them useful tools if they encountered students with anxiety. </p>
                    <ReferencesBlock>
                        <Reference>
                            <p>De La Cruz, M., Guerrero, B., Pace, L., &amp; Ramos, S. (2021). first generation college students in a virtual world: Challenges and opportunities. International Journal of Education and Human Developments. <a href="https://firstgen.naspa.org/scholarly-article/first-generation-college-students-in-a-virtual-world-challenges-and-opportunities" >Https://firstgen.naspa.org/scholarly-article/first-generation-college-students-in-a-virtual-world-challenges-and-opportunities</a> </p>
                        </Reference>
                    </ReferencesBlock>
                </Artifact>
                <CompBottomNav prev='/competencies/social-justice-inclusion' next='/competencies/technology'/>

            </Article>
        </BaseLayout>
    );
};

export default StudentLearnDev;
