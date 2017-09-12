import {Component} from 'react';
import FaHandScissorsO from 'react-icons/lib/fa/hand-scissors-o';

export class Task extends Component {    

    render() {
        return (
            <div className="task">
                <p>{this.props.task.taskName}</p>
                <button className="break-task"><FaHandScissorsO /></button>
            </div>
        );
    }
}