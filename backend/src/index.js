const React = require('react');
const ReactDOM = require('react-dom');
const App = require('../app');

ReactDOM.render(
    React.createElement(React.StrictMode, null, React.createElement(App, null)),
    document.getElementById('root')
);
