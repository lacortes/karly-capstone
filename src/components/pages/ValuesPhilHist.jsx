
import React from 'react';
import Article, { Artifact, Reference, ReferencesBlock, Title } from '../layout/Article';
import BaseLayout from '../layout/BaseLayout';
import CompBottomNav from '../organisms/CompBottomNav';

const ValuesPhilHist = () => {
    return (
        <BaseLayout> 
            <Article headerTitle='Values, Philosophy, & History'>
                <Artifact>
                    <Title text='Life in the Civil War 1860s'/>
                    
                    <p>This attached artifact is a final paper that I wrote for my Foundations of Higher Education course; 
                    it was a first-person narrative about a student living in the 1860s. This paper was an opportunity for me to articulate 
                    the historical context of students and professors living in the 1860s when the Civil War occurred. I was able to connect the history 
                    and the transition of how higher education was different from the past and now in present times. To understand its historical writing and the evolution of higher education, 
                    I must first acknowledge and consider its history as a higher education professional (Thelin, 2019). I was able to articulate the history of the inclusion and exclusion of people that were established in the 1860s that make its philosophies 
                    and values today essential in student&rsquo;s education.</p>

                    <ReferencesBlock
                        handleViewArtifact={() => window.open('https://drive.google.com/file/d/1kuEx20YiPcJAtnK9xvwn4GtWy3UbPyLH/view?usp=sharing', '_blank')}
                    >
                        <Reference>
                            <p>Thelin, J. (2019). A history of American higher education (3rd ed.) Johns Hopkins University Press.</p>
                        </Reference>
                    </ReferencesBlock>
                </Artifact>

                <Artifact>
                    <Title text='Who goes to college and who pays?'/>
                    
                    <p>This artifact is a presentation that I did with three of my colleagues about student access to college. The purpose of the presentation was to address the problem
                     of public funding that impacts many students in the higher education realm. My group members and I connected the history of public funding from before to now, the evolution of 
                     capitalism, and program funding.  Having completed this presentation, I learned and articulated the principles of professional practice that dealt with public funding from the 1990s and now. 
                     Funding is essential for the well-being of the nation; it impacts society and the economy (Tandberg &amp; Anderson, 2020). Having more budget can improve student&rsquo;s retention rate, create more programs, 
                     improve research, and successfully transfer students to college (Mckeown-Moak, 2013).</p>

                    <ReferencesBlock
                        handleViewArtifact={() => window.open('https://docs.google.com/presentation/d/1BufDdV_dB3pYfYlcb0JBxR5fwqn1TWwzKUjajMHJI84/edit?usp=sharing', '_blank')}
                    >
                        <Reference>
                            <p>McKeown-Moak, M. P. (2013) The &ldquo;new&rdquo; performance funding in higher education. Educational Considerations 40(2), 3-10. https://doi.org/10.4148/0146-9282.1082</p>
                        </Reference>

                        <Reference>
                            <p>Tandberg, D. A., &amp; Anderson, C. K. (2020). Funding Higher Education for the Public Good. Change, 52(5), 41&ndash;43.</p>
                        </Reference>

                    </ReferencesBlock>
                </Artifact>

                <Artifact>
                    <Title text='Functional Paper- TRIO Programs'/>

                    <p> After completing this functional paper, I was able to know the history of TRIO programs, especially Upward Bound. Upward Bound program was founded under President Johnson’s administration in 1964 as part of the Economic Opportunity Act (EOA) (Thomas, 2014). Knowing the history of how Upward Bound started will help me explain the importance of programs and services that are currently being used in higher education today. I can demonstrate the responsibility the campus has to its students that identify as first-generation. Knowing more about the history of TRIO programs can help me address and assist students that are first-generation students like myself.</p> 
                   
                    <ReferencesBlock
                        handleViewArtifact={() => window.open('https://drive.google.com/file/d/10COZE2EJMAtwrS7O3uIGTVKp3J1WaG-A/view?usp=sharing', '_blank')}
                    >
                        <Reference>
                            <p>Thomas, K.S. (2014). The effectiveness of select upward bound programs in meeting the needs of 21st century learners in preparation for college readiness. [Doctoral dissertation, Atlanta University &amp; Clark Atlanta University]. Google Scholar.</p>
                        </Reference>

                    </ReferencesBlock>
                </Artifact>
                <CompBottomNav prev='/competencies/pse-foundations' next='/competencies/assess-eval-research'/>
            </Article>
        </BaseLayout>
    );
};

export default ValuesPhilHist;
