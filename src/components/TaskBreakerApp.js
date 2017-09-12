import {Component} from 'react';
import {TaskBreakerForm} from './TaskBreakerForm';
import {TasksList} from './TasksList';

export class TaskBreakerApp extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            tasks: [
                {
                    id: 1,
                    taskName: "Task 1",
                    featureName: "Display tasks"
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>Task Breaker</h1>
                <TaskBreakerForm />
                <TasksList tasks={this.state.tasks}/>
            </div>
        );
    }
}