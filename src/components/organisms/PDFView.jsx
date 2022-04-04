import React, { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { downloadResource, getResource } from '../../core/services/ResourceService';
import Spinner from '../atoms/Spinner';
import Button from '../atoms/Button';


const PDFView = ({ fileKey }) => {
    const [ numPages, setNumPages ] = useState();
    const [ pageNumber, setPageNumber ] = useState(1);
    const [ fileUrl, setFileUrl ] = useState();
    const [ allowDownload, setAllowDownload ] = useState(false);

    useEffect(() => {   
        getResource(fileKey)
            .then( data => {
                const url = window.URL.createObjectURL(new Blob( [ data ]));
                setFileUrl(url);
                setAllowDownload(true);
            })
            .catch(console.error)
        ;

    }, [ fileKey ]);

    const onPdfSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const changePage = offset => {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    };
    
    const previousPage = () => {
        changePage(-1);
    };

    const nextPage = () => {
        changePage(1);
    };

    const handleDownloadResume = () => {
        downloadResource(fileUrl, fileKey);
    };

    return (
        <>
            <Document className='pdf-view' file={fileUrl} onLoadSuccess={onPdfSuccess} loading={<Spinner show={true}/>}>
                <Page pageNumber={pageNumber} scale={1.2} loading={<Spinner show={true}/>}/>
            </Document>
            <div className='pdf-viewer-page-nav'>
                <p>
                    Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                </p>

                <Button enabled={pageNumber > 1} onClick={previousPage}>
                    <FontAwesomeIcon icon={faAngleLeft}/>
                </Button>
                <Button enabled={pageNumber < numPages} onClick={nextPage}>
                    <FontAwesomeIcon icon={faAngleRight}/>
                </Button>
                
            </div>

            <Button className="filled download-btn" label="Download" enabled={allowDownload} onClick={handleDownloadResume}/>
        </>
    );
};

export default PDFView;