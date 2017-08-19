import {Component} from 'react';
import {TaskBreakerForm} from './TaskBreakerForm';

export class TaskBreakerApp extends Component {

    render() {
        return (
            <div>
                <h1>Task Breaker</h1>
                <TaskBreakerForm />
            </div>
        );
    }
}