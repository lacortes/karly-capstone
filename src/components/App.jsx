// import '../styles/app.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserEntry from './pages/UserEntry';
import NotFound from './pages/NotFound';
import AuthProvider from './util/AuthProvider';
import RequireAuth from './util/RequireAuth';

// const lock = () => {
//     const locked = true;
//     const isLocked = () => locked;
//     return { isLocked };
// };
 
const App = () => {
    
    return (

        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" 
                        element={ 
                            <RequireAuth>
                                <Home/> 
                            </RequireAuth>
                        }
                    />
                    <Route path="/login" element={ <UserEntry/> }/>
                    <Route path="*" element={ <NotFound /> }/>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
};

export default App;