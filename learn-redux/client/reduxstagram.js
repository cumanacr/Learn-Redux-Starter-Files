import React from 'react';
import {render} from 'react-dom';
//import css
import css from './styles/style.styl';
// import components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store';

// Esto es para usar el servicio de logeo de errores de Sentry
// import Raven from 'raven-js'
// import {sentry_url, logException } from './data/config';
// custom_tags = {
//     tags: {
//         git_commit: 'a-commit-number',
//         userLevel: 'editor'
//     }
// }
// Raven.config(sentry_url,custom_tags).install();

// logException(new Error('download failed!'),{
//     email: 'wesbos@gmail.com' //example
// });

//console.log(store.doesNot.nope());

// Raven.captureMessage('Something bad happened!');
// Raven.showReportDialog();

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'));
