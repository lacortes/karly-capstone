
import React from 'react';
import Article, { Artifact, Reference, ReferencesBlock, Title } from '../layout/Article';
import BaseLayout from '../layout/BaseLayout';
import CompBottomNav from '../organisms/CompBottomNav';

const AssessEvalResearch = () => {
    return (
        <BaseLayout> 
            <Article headerTitle='Assessment, Evaluation, & Research'>

                <Artifact>
                    <Title text='Placeholder'/>
                    <p>placehoder</p>

                    <ReferencesBlock>
                        <Reference>
                            <p>placeholder</p>
                        </Reference>
                    </ReferencesBlock>
                </Artifact>
                <CompBottomNav prev='/competencies/values-philosophy-history' next='/competencies/law-policy-gov'/>
            </Article>
        </BaseLayout>
    );
};

export default AssessEvalResearch;
