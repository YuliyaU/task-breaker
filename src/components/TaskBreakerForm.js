import {Component} from 'react';

export class TaskBreakerForm extends Component {
    constructor(props) {
        super(props) 
    }

    render() {
        return (
            <form>
                <label htmlFor="add-feature-name">Feature:</label>
                <input type="text" name="add-feature-name" id="add-feature-name"/>
                <label htmlFor="add-task-name">Task:</label>
                <input type="text" id="add-task-name" name="add-task-name"/>  
                <button type="submit">Add a task</button>
            </form>
        );
    }    
};