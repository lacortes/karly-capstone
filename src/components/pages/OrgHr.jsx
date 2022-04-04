
import React from 'react';
import Article from '../layout/Article';
import BaseLayout from '../layout/BaseLayout';
import CompBottomNav from '../organisms/CompBottomNav';

const OrgHr = () => {
    return (
        <BaseLayout> 
            <Article headerTitle='Organizational & Human Resources'>
                <CompBottomNav prev='/competencies/law-policy-gov' next='/competencies/leadership'/>
            </Article>
        </BaseLayout>
    );
};

export default OrgHr;
