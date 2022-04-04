import React, { Children } from 'react';

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

export const ReferencesBlock = ({ children }) => {
    const count = Children.count( children );
    const name = count < 2 ? 'Reference' : 'References';
    return (
        <>
            <SmallTitle text={name}/>
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