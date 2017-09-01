import {Component} from 'react';
import FaHandScissorsO from 'react-icons/lib/fa/hand-scissors-o';

export class Task extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            taskInfo: {
                feature: "Display tasks",
                taskName: "Submit form data to the TasksList"
            }
        }
    }

    render() {
        return (
            <div className="task">
                <p>{this.state.taskInfo.taskName}</p>
                <button className="break-task"><FaHandScissorsO /></button>
            </div>
        );
    }
}