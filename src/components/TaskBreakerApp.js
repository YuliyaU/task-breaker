import {Component} from 'react';
import {TaskBreakerForm} from './TaskBreakerForm';
import {TasksList} from './TasksList';
import {getTasks} from '../api/tasksApi.js';

export class TaskBreakerApp extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            tasks: []
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

    componentDidMount() {
        getTasks().then(results => {
            this.setState({
                tasks: results
            });
        });  
    };

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