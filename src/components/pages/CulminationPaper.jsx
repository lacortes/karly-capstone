import React from 'react';
import Article from '../layout/Article';
import BaseLayout from '../layout/BaseLayout';
import PDFView from '../organisms/PDFView';

const CulminationPaper = () => {
    return (
        <BaseLayout>
            <Article headerTitle='Culmination Paper' headerClass='resume-article'>
                
                <PDFView fileKey='culmination'/>

            </Article>
        </BaseLayout>
    );
};

export default CulminationPaper;