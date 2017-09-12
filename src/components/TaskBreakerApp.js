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
                    feature: "Display tasks"
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>Task Breaker</h1>
                <TaskBreakerForm tasks={this.state.tasks}/>
                <TasksList tasks={this.state.tasks}/>
            </div>
        );
    }
}