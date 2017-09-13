import {Component} from 'react';
import {TaskBreakerForm} from './TaskBreakerForm';
import {TasksList} from './TasksList';

export class TaskBreakerApp extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            tasks: [
                {                    
                    taskName: "Task 1",
                    featureName: "Display tasks"
                }
            ]
        }
        this.addNewTask = this.addNewTask.bind(this)
    }

    addNewTask(newTask) {
        this.setState({
            tasks: [
                ...this.state.tasks,
                newTask
            ]
        })
    }

    render() {
        return (
            <div>
                <h1>Task Breaker</h1>
                <TaskBreakerForm onNewTask={this.addNewTask}/>
                <TasksList tasks={this.state.tasks}/>
            </div>
        );
    }
}