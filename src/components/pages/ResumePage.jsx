/* eslint-disable no-unused-vars */
import React from 'react';
import Article from '../layout/Article';
import BaseLayout from '../layout/BaseLayout';
import PDFView from '../organisms/PDFView';

const ResumePage = () => {

    return (
        <BaseLayout>
            <Article headerTitle='Resume' headerClass='resume-article'>

                <PDFView fileKey='resume'/>

            </Article>
        </BaseLayout>
    );
};

export default ResumePage;