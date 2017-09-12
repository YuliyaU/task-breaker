import {Component} from 'react';
import {Task} from './Task';

export class TasksList extends Component {
    render() {
        return (
            <div className="tasks-list">                
                <Task task={this.props.tasks[0]}/>                                
            </div>
        );
    }
}