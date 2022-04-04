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
import ResumePage from './pages/ResumePage';
import Philosophy from './pages/Philosophy';
import CulminationPaper from './pages/CulminationPaper';
import AdvisingAndSupporting from './pages/AdvisingAndSupporting';
import Competencies from './pages/Competencies';
import PSEFoundations from './pages/PSEFoundations';
import ValuesPhilHist from './pages/ValuesPhilHist';
import AssessEvalResearch from './pages/AssessEvalResearch';
import LawPolicyGov from './pages/LawPolicyGov';
import OrgHr from './pages/OrgHr';
import Leadership from './pages/Leadership';
import SocialJustice from './pages/SocialJustice';
import StudentLearnDev from './pages/StudentLearnDev';
import Technology from './pages/Technology';
import References from './pages/References';
import Acknowledgements from './pages/Acknowledgements';
 
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
                    <Route path="/philosophy" 
                        element={ 
                            <RequireAuth>
                                <Philosophy />
                            </RequireAuth>
                        }
                    />
                    <Route path="/culmination-paper" 
                        element={ 
                            <RequireAuth>
                                <CulminationPaper />
                            </RequireAuth>
                        }
                    />
                    <Route path="/competencies" 
                        element={ <RequireAuth> <Competencies /> </RequireAuth> }
                    >
                        <Route path="pse-foundations" element={ <PSEFoundations />} />
                        <Route path="values-philosophy-history" element={ <ValuesPhilHist />} />
                        <Route path="assess-eval-research" element={<AssessEvalResearch />} />
                        <Route path="law-policy-gov" element={<LawPolicyGov />} />
                        <Route path="org-hr" element={<OrgHr />}/>
                        <Route path="leadership" element={<Leadership />}/>
                        <Route path="social-justice-inclusion" element={<SocialJustice />}/>
                        <Route path="student-learning-dev" element={<StudentLearnDev />}/>
                        <Route path="technology" element={<Technology />}/>
                        <Route path="advising-and-support" element= { <AdvisingAndSupporting />}/>
                    </Route>
                    <Route path="/resume" 
                        element={ 
                            <RequireAuth>
                                <ResumePage />
                            </RequireAuth>
                        }
                    />
                    <Route path="/references" element={
                        <RequireAuth>
                            <References />
                        </RequireAuth>
                    }/>
                    <Route path="/acknowledgements"
                        element={
                            <RequireAuth>
                                <Acknowledgements/> 
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