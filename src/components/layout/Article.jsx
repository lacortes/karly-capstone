/* eslint-disable no-unused-vars */
import React, { Children, useState } from 'react';
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

const Dropdown = ({ artifacts, showDropdown }) => {
    return (
        <ul className={`artifact-dropdown ${ showDropdown === true ? 'show' : ''}`}>
            {artifacts.map( (artifact, idx) => (
                <li key={idx}>
                    <a rel='external noreferrer' href={artifact} target='_blank' >Artifact {idx + 1}</a>
                </li>
            ))}
        </ul>
    );
};

export const ReferencesBlock = ({ children, artifacts=[], hideButton=false }) => {
    const [ showDropdown, setShowDropdown ] = useState(false);
    const count = Children.count( children );
    const name = count < 2 ? 'Reference' : 'References';
    const artifactSize = artifacts.length;

    const handleSingleArtifact = artifacts => {
        window.open(artifacts[0], '_blank');
    };

    const handleMultiArtifacts = artifacts => {
        setShowDropdown(value => !value);
    };

    const getArtifactHandler = artifactSize => {
        if (artifactSize > 1) {
            return handleMultiArtifacts;
        }
        return handleSingleArtifact;
    };

    const artifactHandler = getArtifactHandler(artifactSize);

    return (
        <>
            <div className='references-header-wrapper'>
                <SmallTitle text={name}/>
                {
                    hideButton === true 
                        ? null 
                        :
                        <div className='artifact-btn-wrapper'>
                            <Button 
                                label={ artifactSize > 1 ? 'View Artifacts' : 'View Artifact' } 
                                className='outlined'
                                onClick={() => artifactHandler(artifacts) }
                            />

                            {
                                artifactSize > 1 ? <Dropdown artifacts={artifacts} showDropdown={showDropdown}/>: null
                            }

                        </div>
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