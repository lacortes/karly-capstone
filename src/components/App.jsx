import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import UserEntry from './pages/UserEntry';
import NotFound from './pages/NotFound';
import AuthProvider from './util/AuthProvider';
import RequireAuth from './util/RequireAuth';
import MagicLink from './pages/MagicLink';
import ToEntryPage from './util/ToEntryPage';
 
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
                    <Route path="/admin" element={ 
                        <RequireAuth>
                            <Admin />
                        </RequireAuth>
                    }/>
                    <Route path="/login" element={ 
                        <ToEntryPage>
                            <UserEntry/> 
                        </ToEntryPage>
                    }/>
                    <Route path="/magic" 
                        element={ <MagicLink/>  } />
                    <Route path="*" element={ <NotFound /> }/>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
};

export default App;