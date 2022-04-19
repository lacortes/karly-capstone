import React from 'react';
import Article, { Title, ReferencesBlock, Reference } from '../layout/Article';
import BaseLayout from '../layout/BaseLayout';

const Philosophy = () => {
    return (
        <BaseLayout>
            <Article headerTitle='Philosophy'>
                <Title text='Philosophy in Student Affairs'/>
                <p>Higher Education is a field where faculty and staff have a platform to use their privilege to help students become better advocates for themselves. 
                Student Affair professionals provide support, advising, mentorship, referrals, development, training, engagement, and create opportunities for the students. 
                My philosophy of student affairs is a combination of my values, faith, experience, literature, and relationships that I have had in my journey. 
                Having positive interactions with faculty and staff can help students develop a stronger unity within the campus (Calhoun, 1996). 
                Thus, establish conditions that will motivate and inspire students to devote their time and energy in their education (Calhoun, 1996). 
                According to Calhoun (1996), learning and personal development occurs through a transaction between students and their environment, which is why having a welcoming environment plays a vital role to the student.
                 I pledge to encourage widespread engagement in experiences that foster strong and enduring relationships in a vibrant campus community. </p>

                <p>
                    My mission is for students to be safe, heard, and have a sense of belonging throughout their educational journey. 
                    Student Affairs professionals play a critical role for students&rsquo; educational journey as college years are essential for student&rsquo;s development that continue to their adulthood years. 
                    My hope as a higher educational professional is to make everything I do intentional and purposeful, thus continuing that legacy that has been done many generations before me (Bolman, 2011).
                </p>

                <ReferencesBlock hideButton={true}>
                    <Reference>
                        <p>Bolman, L.G. &amp; Deal, T.E. (2011). Leading with soul (3rd ed.). San Francisco: Jossey Bass.</p>
                    </Reference>

                    <Reference>
                        <p>Calhoun, J.C. (1996). Student Learning Imperative: Implications for Student Affairs. Journal of College Student Development, 37.</p>
                    </Reference>
                    
                </ReferencesBlock>
                
            </Article>
        </BaseLayout>
    );
};

export default Philosophy;