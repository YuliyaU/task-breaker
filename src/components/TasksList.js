import {Component} from 'react';
import FaHandScissorsO from 'react-icons/lib/fa/hand-scissors-o';

export class TasksList extends Component {
    render() {
        return (
            <div>                
                <p>Submit form data to the TasksList</p>
                <button className="break-task"><FaHandScissorsO /></button>                                
            </div>
        );
    }
}