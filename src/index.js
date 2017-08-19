import React from 'react';
import ReactDOM from 'react-dom';
import {TaskBreakerApp} from '../src/components/TaskBreakerApp';

window.React = React;

ReactDOM.render(
    <TaskBreakerApp />,
    document.getElementById('task-breaker')
);