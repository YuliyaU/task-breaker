import {Component} from 'react';
import FaHandScissorsO from 'react-icons/lib/fa/hand-scissors-o';

export class AddTask extends Component {
    render() {
        return (
            <div>
                <label htmlFor="add-task-name">Task:</label>
                <input type="text" id="add-task-name" name="add-task-name"/>
                <button className="break-task"><FaHandScissorsO /></button>
            </div>
        )
    }
}