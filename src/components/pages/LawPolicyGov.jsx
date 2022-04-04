
import React from 'react';
import Article, { Artifact, Reference, ReferencesBlock, Title } from '../layout/Article';
import BaseLayout from '../layout/BaseLayout';
import CompBottomNav from '../organisms/CompBottomNav';

const LawPolicyGov = () => {
    return (
        <BaseLayout> 
            <Article headerTitle='Law, Policy, & Governance'>

                <Artifact>
                    <Title text='Legal and Ethical Final'/>
                    <p>The attached artifact is my final paper exam from my Legal and Ethical issues course, where I 
                    demonstrated my knowledge on legal issues that currently affect higher education. I chose three 
                    different legal issues that resonated with me, which included marijuana on college campuses, the
                    undocumented student population, and the use of social networking on campus. After completing this
                    final paper, I understood the importance of policy establishment, policy development, and how it impacts 
                    faculty, staff, and students. I was able to compare the State and Federal laws concerning marijuana, the 
                    implementation of policies to protect undocumented students, and protecting students&apos; privacy when using social media. 
                    Student affairs professionals can create better curriculums by knowing the laws, resources, and the concerns of the students (Bresciani, 2011).</p>

                    <ReferencesBlock
                        handleViewArtifact={() => window.open('https://drive.google.com/file/d/1AJ3SBLM01uYim7450dezUd2MLH8fpla5/view?usp=sharing', '_blank')}
                    >
                        <Reference>
                            <p>Bresciani, M. J. (2011, August). Making assessment meaningful: What new student affairs professionals and those new to assessment need to know (NILOA Assessment Brief: Student Affairs). Urbana, IL: University of Illinois and Indiana University, National Institute for Learning Outcomes Assessment.</p>
                        </Reference>
                    </ReferencesBlock>
                </Artifact>

                <Artifact>
                    <Title text='Institutional Comparison'/>
                    <p>For this artifact, I attached a group paper that I did with my classmates for our Legal and Ethical 
                    issues course. In the paper, my classmates and I compared a private, public, and military school in their 
                    responses and resources towards alcohol, Title IX, and hazing policies. While comparing the three schools, 
                    I was able to learn and be more knowledgeable of the laws and policies that are different to each institution 
                    that relates to its campus resources, reporting, and student conduct procedures. According to Lake (2013), student
                     affairs professionals must make decisions based on the most current legal ruling and analysis in higher education. 
                     This has shown me how essential it is to be up to date with state laws and regulations that impact policies and procedures 
                     of various universities and colleges.</p>
                    <ReferencesBlock
                        handleViewArtifact={() => window.open('https://drive.google.com/file/d/1H4zX6VAg1cAVT1Srgly2f04ZVclxOojQ/view?usp=sharing', '_blank')}
                    >
                        <Reference>
                            <p>Lake, P. (2013). Foundations of higher education law and policy: Basic legal rules, concepts, and principles for student affairs. NASPA.</p>
                        </Reference>
                    </ReferencesBlock>
                </Artifact>

                <Artifact>
                    <Title text='Programming Proposal'/>
                    <p>As a Resident Life Intern in Cal-Poly Pomona, I am required to do programming and approve proposals for 
                    the University Housing Department (UHS). My team and I were responsible for creating an event that needed to 
                    implement UHS’s policies as part of the requirement for week five. It is always nice to have certain autonomy 
                    in the events and themes my team and I create for all the first-year students living in the red bricks (Ferlie et al.,
                     2008, as cited in Reale &amp; primeri, 2015 ). It is important to know how higher education has undergone changes to help 
                     aim granting universities even a greater self-governance to promote self-regulation within their own schools (Ferlie et al.,
                      2008, as cited in Reale &amp; primeri, 2015). My team created this amazing event that was called Pie an RA. Students had to 
                      sign-up for the event, where they would get quiz on the policies of University Housing, if they answered correctly, they would have 
                      the opportunity to pie an RA. I oversaw the program, approved the proposal, and I was also there to quiz the students with housing policies 
                      that they should know while living on-campus. Students were able to talk to me as well as my team to better understand the policies and regulations 
                      of the housing rules of UHS. </p>
                    <ReferencesBlock
                        handleViewArtifact={() => {
                            window.open('https://docs.google.com/document/d/18VrnKez9cG9g44U8YXqisQ8P4bbvhafD/edit?usp=sharing&ouid=112551125562924414081&rtpof=true&sd=true', '_blank');
                            window.open('https://drive.google.com/file/d/1ThtjZziddKeWKzX3CC7acyJahp3oMn1N/view?usp=sharing', '_blank');
                        }}
                    >
                        <Reference>
                            <p>Reale, E., &amp; Primeri, E. (2015). Approaches to policy and governance in higher education. In Huisman, J., De Boer, H., Dill, D.D., &amp; Souto-Otero, Manuel (Eds.). The palgrave international handbook of higher education policy and governance (pp. 20-37). Palgrave Macmillan, London. <a href="https://doi.org/10.1007/978-1-137-45617-5" >https://doi.org/10.1007/978-1-137-45617-5</a></p>
                        </Reference>
                    </ReferencesBlock>
                </Artifact>
                <CompBottomNav prev='/competencies/assess-eval-research' next='/competencies/org-hr'/>
            </Article>
        </BaseLayout>
    );
};

export default LawPolicyGov;
