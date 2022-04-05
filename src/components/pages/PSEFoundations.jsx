
import React from 'react';
import Article, { Artifact, Reference, ReferencesBlock, Title } from '../layout/Article';
import BaseLayout from '../layout/BaseLayout';
import CompBottomNav from '../organisms/CompBottomNav';


const PSEFoundations = () => {
    return (
        <BaseLayout> 
            <Article headerTitle='Personal, Spiritual, & Ethical Foundations'>
                <Artifact>
                    <Title text='Reflective Paper'/>
                    <p>Students need to be challenged; they need an environment that supports their development and helps them find their own identity and values (Brown, 1972). This reflective paper was a way to discuss my own personal beliefs and faith values that make me a better professional. What I have learned in this assignment was the potential to see each student as a whole person and recognize that the environment plays a significant role in their community and education. As I reflected on my personal experiences and beliefs, I realized that I could integrate my own values into professional practice. My faith aligns with my profession by wanting what is best for others. My religion has taught me to respect and value people’s differences. Therefore, in a higher education setting, I will be able to appreciate diversity and support students’ development</p>

                    <ReferencesBlock 
                        handleViewArtifact={() => window.open('https://drive.google.com/file/d/1ZOwOp3vyLQB9OmldEJ5Ryp7AemZsfPyD/view?usp=sharing', '_blank')}
                    >
                        <Reference>
                            <p>Brown, R. D. (1972). Where higher education might be going tomorrow. Student Development in tomorrow’s higher education: a return to the academy (pp. 12-27) Washington. D. C: American Personnel and Guidance Association.</p>
                        </Reference>
                    </ReferencesBlock>
                </Artifact>

                <Artifact>
                    <Title text='Faith Development Paper'/>
                    <p>The faith development paper explored my religious belief and my core values in a spiritual retreat that I attended in the CCSD program. This paper required me to reflect on my faith and spirituality. 
                    Retreats create meaning, purpose, and direction in one&rsquo;s own life (Rogers &amp; Love, 2007). Through the retreat experience, I was able to associate how my faith connects to the work that I do with higher education. 
                    By making my self-discovery, I was able to articulate awareness and understanding of one&rsquo;s attitudes, values, beliefs, and identify how they affect my integrity and the work I do for others</p>

                    <ReferencesBlock 
                        handleViewArtifact={() => window.open('https://drive.google.com/file/d/1nIg5nYdlH9kNpf2npWtownklRf3JaRFa/view?usp=sharing', '_blank')}
                    >
                        <Reference>
                            <p>Rogers, J. L. , &amp; Love, P. (2007). Graduate student constrictions of spirituality in preparation  programs. Journal of College Student Development, 48 (6), 689-705.</p>
                        </Reference>
                    </ReferencesBlock>
                </Artifact>

                <Artifact>
                    <Title text='Core Values'/>
                    <p>After completing my core values assignment for my Legal and Ethical Issues course, I can articulate my code of ethics for student affairs practice. This assignment reflected the core values in my life that have led me to the field of higher education. 
                    I created an acronym CLKHD, which stands for caring, loyal, kindness, honest, and dorky. These five values come from my family and religion. I have a better understanding of incorporating my faith and values in the work that I do as a higher education advocate. 
                    Through compassion and seeing the good in others, one can find kinship in the least expected places (Boyle, 2010). By completing this assignment, I was able to take responsibility to broaden my perspectives by participating in activities that challenge by own&rsquo;s belief
                     that will help me in the field. By understanding my own body, mind, and spirit, I can recognize and articulate healthy habits for a better living that will transcend to students with whom I plan to interact in school.</p>
                    <ReferencesBlock
                        handleViewArtifact={() => window.open('https://drive.google.com/file/d/1p8fwI7Jo_XaK43LL3Bm_XGzY_MyzSC_5/view?usp=sharing', '_blank')}
                    >
                        <Reference>
                            <p>Boyle, G. (2010). Tattoos on the heart: The power of boundless compassion. Free Press, New  York, NY.</p>
                        </Reference>
                    </ReferencesBlock>
                </Artifact>
                <CompBottomNav next='/competencies/values-philosophy-history'/>
            </Article>
        </BaseLayout>
    );
};

export default PSEFoundations;
