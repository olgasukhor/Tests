import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Main from '../views/Main';
import Structure from '../views/Structure';
import History from '../views/History'
import Science from '../views/Science';
import StudyProcess from '../views/StudyProcess';
import News from '../views/News';
import ForEntrant from '../views/ForEntrant';

function AppRouter() {
    return (
        <Switch>
            <Route path="/about">
                <Main />
            </Route>
            <Route path="/structure">
                <Structure />
            </Route>
            <Route path="/history">
                <History />
            </Route>
            <Route path="/science">
                <Science />
            </Route>
            <Route path="/study">
                <StudyProcess />
            </Route>
            <Route path="/news">
                <News />
            </Route>
            <Route path="/forEntrant">
                <ForEntrant />
            </Route>

            <Redirect to='/about' />


        </Switch>
    )
}
export default AppRouter;