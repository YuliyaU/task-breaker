import {Component} from 'react';
import {TaskBreakerForm} from './TaskBreakerForm';
import {TasksList} from './TasksList';

export class TaskBreakerApp extends Component {

    render() {
        return (
            <div>
                <h1>Task Breaker</h1>
                <TaskBreakerForm />
                <TasksList />
            </div>
        );
    }
}