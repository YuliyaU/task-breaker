import {Component} from 'react';

export class AddTask extends Component {
    render() {
        return (
            <div>
                <label htmlFor="add-task-name">Task:</label>
                <input type="text" id="add-task-name" name="add-task-name"/>                
            </div>
        );
    }
}