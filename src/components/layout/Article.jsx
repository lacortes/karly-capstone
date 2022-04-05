import React, { Children } from 'react';
import Button from '../atoms/Button';

export const Artifact = ({ children }) => {
    return (
        <div className='artifact'>
            {children}
        </div>
    );
};

export const Reference = ({ children }) => {
    return (
        <div className='reference-content-wrapper'>
            {children}
        </div>
    );
};

export const ReferencesBlock = ({ children, handleViewArtifact, hideButton=false }) => {
    const count = Children.count( children );
    const name = count < 2 ? 'Reference' : 'References';
    return (
        <>
            <div className='references-header-wrapper'>
                <SmallTitle text={name}/>
                {
                    hideButton === true 
                        ? null 
                        :
                        <Button 
                            label='View Artifact' 
                            className='outlined'
                            onClick={handleViewArtifact}
                        />
                }
            </div>

            <div className='references-wrapper'>
                { children }
            </div>
        </>
    );
};

export const SmallTitle = ({ text='' }) => {
    return (
        <h2 className='article-small-title'>
            {text}
        </h2>
    );
};

export const Title = ({ text='' }) => {
    return (
        <h1 className='article-title'>
            {text}
        </h1>
    );
};

const Article = ({ children, headerTitle='', headerClass='' }) => {
    const classes = [ headerClass, 'article-section' ].join(' ');
    return (    
        <section className={classes}>

            <header>
                <div className="header-text">{ headerTitle }</div>
            </header>

            <div className="header-line"></div>

            <article>
                {children}
            </article>

        </section>

    );
};

export default Article;