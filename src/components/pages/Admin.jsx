import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import { AppBar, Button, Container, CssBaseline, Snackbar, Stack, Typography } from '@mui/material';
import { API_ROOT } from '../../core/config/environment';
import { useAuth } from '../../components/util/AuthProvider';


const apiURL = `${ API_ROOT }/api`;
const Input = styled('input')({ display: 'none' });
const RealAdmin = () => {
    const [ file, setFile ] = useState();
    const [ snack, setSnack ] = useState({ isOpen: false, msg: '' });
    const mdTheme = createTheme();

    const handleFileUpload = e => {
        const uploadedFile = e.target.files[0];
        if (!uploadedFile) {
            return;
        }

        setFile( uploadedFile );
        setSnack({ isOpen: true, msg: 'Resume ready for submission!' });
    };

    const handleResumeSubmit = async () => {
        if (!file) {
            return;
        }

        try { 
            const formData = new FormData();
            formData.append('resume', file);

            await axios.post(
                `${ apiURL }/resume-upload`, 
                formData,
                { headers: { 'Content-Type': 'multipart/form-data' } }
            );
            setSnack({ isOpen: true, msg: 'File successfully uploaded!' });
            setFile(null);
        } catch (err) {
            console.error(err);
        }

    };

    const handleSnackClose = ( ) => {
        setSnack({ isOpen: false, msg: '' });
    };

    const handleViewResume = async () => {
        try {
            const { data }  = await axios({
                url: `${ apiURL }/resume-download`,
                method: 'GET',
                responseType: 'blob'
            });

            const url = window.URL.createObjectURL(new Blob( [ data ] ));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'KarlyChavezResume.pdf');

            document.body.appendChild(link);
            link.click();

        } catch (err) {
            const msg = err?.response?.data?.message;
            console.error(msg);
        }
    
    };

    return (
        <ThemeProvider theme={mdTheme}>
            <CssBaseline />
            <AppBar position="static"> 
                <Typography variant="h6" component="div">
                Admin
                </Typography>
            </AppBar>
            <Container maxWidth="md">
                <Typography variant="h3" component="div">
                    Resume Upload
                </Typography>

                <Stack direction="row" alignItems="center" spacing={2} sx={{ '& button': { m: 1 } }}>
                    <Button variant="contained" component="span" onClick={handleViewResume}>
                        View Resume
                    </Button>

                    <label htmlFor="uploadResume">
                        <Input accept="application/pdf,appliation/vnd.ms-excel" id="uploadResume" type="file" onChange={handleFileUpload}/>
                        <Button variant="contained" component="span">
                            Upload
                        </Button>
                    </label>

                    <Button 
                        variant='outlined' 
                        component="span" 
                        disabled={ !file ? true : false }
                        onClick={handleResumeSubmit}
                    >
                        Submit Resume
                    </Button>
                    
                    {file ? 
                        <Typography variant="overline">
                            FileName: { file.name }
                        </Typography>
                        : null
                    }
                    
                </Stack>

            </Container>
            <Snackbar 
                anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
                open={snack?.isOpen}
                message={snack?.msg}
                autoHideDuration={5000}
                onClose={handleSnackClose}
            />
        </ThemeProvider>
    );
};

const Admin = () => {
    const [ isLoading, setLoading ] = useState(true);
    const auth = useAuth();
    const navigate = useNavigate();
    
    useEffect(() => {
        auth.isAdmin()
            .then(() => setLoading(false))
            .catch(() => navigate('/', { replace: true }))
        ;
    }, [ auth, navigate ]);

    return (
        isLoading === true ? null : <RealAdmin />
    );

};

export default Admin;   