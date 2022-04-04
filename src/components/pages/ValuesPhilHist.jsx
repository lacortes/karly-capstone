
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

                    <ReferencesBlock>
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

                    <ReferencesBlock>
                        <Reference>
                            <p>McKeown-Moak, M. P. (2013) The &ldquo;new&rdquo; performance funding in higher education. Educational Considerations 40(2), 3-10. https://doi.org/10.4148/0146-9282.1082</p>
                        </Reference>

                        <Reference>
                            <p>Tandberg, D. A., &amp; Anderson, C. K. (2020). Funding Higher Education for the Public Good. Change, 52(5), 41&ndash;43.</p>
                        </Reference>

                    </ReferencesBlock>
                </Artifact>
                <CompBottomNav prev='/competencies/pse-foundations' next='/competencies/assess-eval-research'/>
            </Article>
        </BaseLayout>
    );
};

export default ValuesPhilHist;
