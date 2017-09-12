import {Component} from 'react';

export class TaskBreakerForm extends Component {
    constructor(props) {
        super(props); 

        this.handleSubmit = this.handleSubmit.bind(this);        
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.featureName.value);
        console.log(this.taskName.value);
        console.log('Got the task!');
        
    }

    render() {
        //const {taskName, feature} = this.props
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Feature:</label>
                <input type="text"                                            
                       ref={(featureName) => this.featureName = featureName} />
                <label htmlFor="add_task_name">Task:</label>
                <input type="text"                                              
                       ref={(taskName) => this.taskName = taskName} />  
                <input type="submit" value="Add a task" />
            </form>
        );
    }    
};