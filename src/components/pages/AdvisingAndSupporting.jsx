import React from 'react';
import Article, { Artifact, Reference, ReferencesBlock, Title } from '../layout/Article';
import BaseLayout from '../layout/BaseLayout';
import CompBottomNav from '../organisms/CompBottomNav';

const AdvisingAndSupporting = () => {
    return (
        <BaseLayout>
            <Article headerTitle='Advising & Supporting'>
                <Artifact>
                    <Title text='Helping Theory'/>
                    <p>
                    According to Reynolds (2009), as long as there are colleges and universities, there will be people willing to take the role as helper and educator. 
                    Helping students is what student affairs professionals do for the greater interest of the students, without anything in return. For my helping theory, 
                    I used Person-Centered, Feminist, and Solution-Focus Therapy to identify when and with whom to implement appropriate crisis management and intervention responses. 
                    Using this artifact, I illustrated my knowledge, awareness, and skills using my helping theory. 
                    I was able to use appropriate individual decision-making and goal setting to better assist students. 
                    In this competency, I demonstrated my willingness to grow and learn as a higher education professional when counseling and supporting students in their educational journey. 
                    </p>

                    <ReferencesBlock
                        artifacts={[ 'https://docs.google.com/document/d/1EiTYAQ0lXBrw-XGjmr5w_W51AX_XN7ka/edit?usp=sharing&ouid=112551125562924414081&rtpof=true&sd=true' ]}
                    >
                        <Reference>
                            <p>Reynolds, A.L. (2009). Helping college students: Developing essential support skills for student affairs practice. Jossey-Bass.</p>
                        </Reference>
                    </ReferencesBlock>
                </Artifact>

                <Artifact>
                    <Title text='Career Counseling Case Study' />

                    <p>
                    Students who receive advice from a career counselor will be able to engage and have a deeper comprehension of how to navigate career exploration (Pipkins, Rooney &amp; Jaunarajs, 2014). 
                    In my career counseling class that I took in the CCSD program, I was able to recruit a participant from a community college to participate in my case study. I held a total of four sessions with the student. 
                    I used activities from the class, assessments, literature, and resources online to better assist the student in the study. After completing the case study, I am able to appropriately use career counseling skills and theories in career advancement. 
                    I was able to maintain an appropriate degree of confidentiality and know when confidentiality should be broken to protect the students and others.
                    </p>

                    <ReferencesBlock
                        artifacts={[ 'https://docs.google.com/document/d/1TqmxJxrB2BjFs_BHp_A5QMMFDzMGDrXP/edit?usp=sharing&ouid=112551125562924414081&rtpof=true&sd=true' ]}
                    >
                        <Reference>
                            <p>
                            Pipkins, K.C., Rooney, G.S. &amp; Jaunarajs, I. (2014). Back to the basics: Career counseling. In K. Smith (Ed). New Directions for Student Services: No. 148. Strategic directions for career services within the university setting (pp. 35-48). Jossey- Bass.
                            </p>
                        </Reference>
                    </ReferencesBlock>

                </Artifact>

                <Artifact>
                    <Title text='The Proposal' />

                    <p>
                    I was able to provide advising, support, feedback, and direction to my team that felt burnout from working in University Housing Services in Cal-Poly Pomona this year. I was able to establish rapport with these students for them to feel comfortable in expressing their concerns to me. 
                    According to Reynolds (2009), student affairs professionals are viewed as educators or advisors; they should have the skillset in advising, supporting, motivating, and be an advocator for students. I wrote a proposal with the problem and an alternative solution on how to better help the overall well-being of my team. 
                    I helped my team understand the strengths, goals, and the aftermath of writing the proposal, while instilling in them the power of hope and navigation of this difficult situation. I was able to appropriately challenge and support students in their concerns in their workplace.
                    </p>

                    <ReferencesBlock
                        artifacts={[ 'https://docs.google.com/document/d/1q2pP6W8hdZcNqnC_36D6m-QBovPjP0qwYeWZhblVKJo/edit?usp=sharing' ]}
                    >
                        <Reference>
                            <p>Reynolds, A.L. (2009). Helping college students: Developing essential support skills for student affairs practice. San Francisco: Jossey-Bass.</p>
                        </Reference>
                    </ReferencesBlock>

                </Artifact>
                <CompBottomNav prev='/competencies/technology'/>
            </Article>
        </BaseLayout>
    );
};

export default AdvisingAndSupporting;