import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from 'root';

export default () => (
    <Router history={browserHistory}>
        <Route component={App}>
            <Route path='/index' getComponent={(nextState, cb) => {
                import('containers/HomePage')
                    .then(module => {
                        cb(null, module.default)
                    });
            }} />
        </Route>
    </Router>
);