import React from 'react';
// eslint-disable-next-line import/no-unresolved
import Application from './Components/layout';
// eslint-disable-next-line import/no-unresolved
import ApplicationContent from './Components/layout/ApplicationContent';
// eslint-disable-next-line import/no-unresolved
import MainContent from './Components/layout/ApplicationContent/MainContent';
// eslint-disable-next-line import/no-unresolved
import Header from './Components/layout/ApplicationContent/Header';
// eslint-disable-next-line import/no-unresolved
import Footer from './Components/layout/ApplicationContent/Footer';
// eslint-disable-next-line import/no-unresolved
import MainSection from './Components/layout/ApplicationContent/MainContent/MainSection';


const App = () => (
    <Application>
        <ApplicationContent>
            <Header>
                HEADER
            </Header>
            <MainContent>
                <MainSection>
                    MAIN
                </MainSection>
            </MainContent>
            <Footer>
                FOOTER
            </Footer>
        </ApplicationContent>
    </Application>
);

export default App;
