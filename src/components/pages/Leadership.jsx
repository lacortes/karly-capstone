
import React from 'react';
import Article, { Artifact, Reference, ReferencesBlock, Title } from '../layout/Article';
import BaseLayout from '../layout/BaseLayout';
import CompBottomNav from '../organisms/CompBottomNav';

const Leadership = () => {
    return (
        <BaseLayout> 
            <Article headerTitle='Leadership'>

                <Artifact>
                    <Title text='Leadership Essay'/>
                    <p>The attached artifact is a leadership essay from my Administration in Student Affairs class, where I was able to identify my own strength and challenges that would help me become a stronger leader in my current leadership role. It was a personal reflection where I was able to demonstrate how different frame structures influence me as a leader. Completing this assignment, I was able to demonstrate the values and processes that lead to organizational improvement. I was able to be challenged and gain effective leadership skills when one takes on a role as a leader. Taking a leadership role and working in a diversity team makes conflicts inescapable, which is why leaders must learn to have techniques and be prepared if disputes arise in a team environment. I learned how to respond and affect change in response to the organizations’ issues being in a leadership role (Heifetz &amp; Linsky, 2002).</p>

                    <ReferencesBlock
                        handleViewArtifact={() => window.open('https://drive.google.com/file/d/1grsNcGo8Z3vcvlpTRtxaToPWRiw92Xkx/view?usp=sharing', '_blank')}
                    >
                        <Reference>
                            <p>Heifetz, R. A. &amp; Linsky, M. (2002). Leadership on the line: Staying alive through the dangers of leading. Boston: Harvard Business School Publishing. </p>
                        </Reference>
                    </ReferencesBlock>
                </Artifact>

                <Artifact>
                    <Title text='Boundaries Paper'/>
                    <p>After completing my boundaries paper for my Intro to Student Affairs class, I learned how to create better boundaries in my workplace. After reflecting on the lack of personal boundaries I had in my previous jobs, I had to start implementing boundaries in my daily life, especially at work. Boundaries are vital for the well-being of oneself and productivity in a team environment (Linder, 2011). After completing the paper, I was able to describe how my personal values, beliefs, and perspectives play a critical part in building a mutually supportive relationship with colleagues and students. Having appropriate boundaries helps improve the campus culture and apply that understanding to my own work in a higher education setting (Linder, 2011). As a </p>
                    <p>Resident Life Intern working for University Housing Services for Cal-Poly Pomona, it is important to establish boundaries as a leader. Completing the assignment made me realize how essential boundaries are for my own well-being and the relationships I create in the department with faculty and students.</p>
                    <ReferencesBlock
                        handleViewArtifact={() => window.open('https://drive.google.com/file/d/1J2-ZDRUN-lX3CHaTsMb8s6uRrlRb7o9D/view?usp=sharing', '_blank')}
                    >
                        <Reference>
                            <p>Linder, K. L. (2011). Why Do Student Affairs Educators Struggle to Set Professional Boundaries? 434–445. </p>
                        </Reference>
                    </ReferencesBlock>
                </Artifact>

                <Artifact>
                    <Title text='Expectation list'/>
                    <p>As a Resident Life Intern, I oversee a residential community along with supervising my student leaders for the academic year of 2021-2022. The first time that I met my team in training, we had ice breakers and we did an activity where my team listed expectations of me as a leader. After my team was done giving their expectations of me, I listed my expectations of them. I listed qualities that I expected my team to work together to fulfill for this following year, as well as letting them know the strengths that I can provide for them as a leader (Rath &amp; Conchie, 2009). Knowing my team’s strength and expectations can help me identify and articulate the vision and mission I will lead my team for that following year. </p>
                    <ReferencesBlock
                        handleViewArtifact={() => window.open('https://drive.google.com/file/d/1KQFyvJjDXLR5iWbenUz0etP-r-Ks4Vha/view?usp=sharing', '_blank')}
                    >
                        <Reference>
                            <p>Rath, T. &amp; Conchie, B. (2009). Strengths based leadership: Great leaders, teams, and why people follow. New York: Gallup Press. </p>
                        </Reference>
                    </ReferencesBlock>
                </Artifact>
                <CompBottomNav prev='/competencies/org-hr' next='/competencies/social-justice-inclusion'/>
            </Article>
        </BaseLayout>
    );
};

export default Leadership;
