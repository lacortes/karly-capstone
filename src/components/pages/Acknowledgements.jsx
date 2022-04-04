import React from 'react';
import Article from '../layout/Article';
import BaseLayout from '../layout/BaseLayout';
import Thanks from '../../../assets/images/Thanks.gif';

const Acknowledgements = () => {
    return (
        <BaseLayout>
            <Article headerTitle='Acknowledgements' headerClass='acknowledgement-wrapper'>
                <img src={Thanks} className='thanks-photo' alt='thank you image gif'/>
            </Article>
        </BaseLayout>
    );
};

export default Acknowledgements;