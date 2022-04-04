
import React from 'react';
import Article, { Artifact, Reference, ReferencesBlock, Title } from '../layout/Article';
import BaseLayout from '../layout/BaseLayout';
import CompBottomNav from '../organisms/CompBottomNav';

const OrgHr = () => {
    return (
        <BaseLayout> 
            <Article headerTitle='Organizational & Human Resources'>
                <Artifact>
                    <Title text='Training Workshop'/>
                    <p> This attached artifact is a training workshop presentation that I held for all the presidents from Campus Life last year in Azusa Pacific University. As the graduate assistant for clubs and organizations last year, it was my responsibility to train all the presidents about their roles for that upcoming year. In the workshop, I went over the different ways presidents can obtain funding from our department, withdraw funds, and check their income status. I was able to provide the proper protocol that presidents can do when it comes to their funds in their clubs and organizations. I was able to develop and utilize appropriate meeting materials, administration, and fiscal responsibilities as the graduate assistant for the department of Campus Life that involved bylaws, applications, and recruitment (Kuk &amp; Tull, 2012). I was able to communicate with presidents using effective verbal and non-verbal strategies appropriate to the situation in ways that students find it more beneficial to learn about their role as presidents.</p>
                    <ReferencesBlock
                        handleViewArtifact={() => window.open('https://drive.google.com/file/d/1Y1NFophWjkqxzwDn48GJrZOdFuRuQD9w/view?usp=sharing', '_blank')}
                    >
                        <Reference>
                            <p>Kuk, L., &amp; Tull, A. (2012). New Realities in the Management of Student Affairs : Emerging Specialist Roles and Structures for Changing Times (Vol. 1st ed). Sterling, Va: Stylus Publishing.</p>
                        </Reference>
                    </ReferencesBlock>
                </Artifact>

                <Artifact>
                    <Title text='Banquet 2021'/>
                    <p>I was fortunate to host the Clubs and Organizations Banquet 2021 last year for my graduate assistantship in Azusa Pacific University. Unfortunately, there was no banquet in 2020 due to COVID-19, which made 2021 more special to hold a banquet. This was the first time a banquet was done online, and that included planning, budgeting, collaboration with other departments in APU to help me with delivering the gift boxes to all the presidents. I was able to use technological resources to demonstrate and recognize how networks in organizations play a role in how work gets accomplished (Bolman &amp; Deal, 2017). For this banquet, I understood the importance of using human resources frame and the collaboration needed to make this event a success for the students that were looking forward to this banquet (Bolman &amp; Deal, 2017).</p>
                    <ReferencesBlock
                        handleViewArtifact={() => window.open('https://drive.google.com/file/d/1SqIw6bv1iAZ0darsg6X4MVqQy9VL0eny/view?usp=sharing', '_blank')}
                    >
                        <Reference>
                            <p>Bolman, L.G. &amp; Deal, T.E. (2017, 6th Edition). Reframing organizations: Artistry, choice, and leadership.</p>
                        </Reference>
                    </ReferencesBlock>
                </Artifact>

                <Artifact>
                    <Title text='Budget Proposal'/>
                    <p>This is a budget proposal that I completed for my Administration in College Student Affairs course, where I learned about leadership issues, budget management, and management of leadership roles. I was able to understand the relational roles partners, allies, and adversaries play in the completion of goals and work assignments. The budget proposal needed to be realistic, obtainable, and no less than $50,000. I was then able to effectively and appropriately use facilities management procedures to plan a retreat for a whole week with Student Leaders to build a stronger bond among faculty, staff, and students. With the retreat, students will have the opportunity to know the department better and decrease social anxiety to combat the fear of students not fitting in. Budget management skills are essential to navigate different circumstances in the student affairs setting, such as events, services, and programs (Clark, 2018). Budget management is helpful to allocate budgets in different departments and effective to maintain an effective operational college (Clark, 2018).</p>
                    <ReferencesBlock
                        handleViewArtifact={() => window.open('https://drive.google.com/file/d/1NJldzsfA08ld0Jsm0osef89i1qDo91dY/view?usp=sharing', '_blank')}
                    >
                        <Reference>
                            <p>Clark, L. (2018). Integrating planning into the development of future higher education leaders. Planning for Higher Education Journal, 46(1), 1-7.</p>
                        </Reference>
                    </ReferencesBlock>
                </Artifact>

                <CompBottomNav prev='/competencies/law-policy-gov' next='/competencies/leadership'/>
            </Article>
        </BaseLayout>
    );
};

export default OrgHr;
