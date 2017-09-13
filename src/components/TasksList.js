import {Task} from './Task';

export const TasksList = ({tasks}) => {
    
    return (
        <div className="tasks-list">                
            {
                tasks.map((task, index) => 
                    <Task key={index}
                          task={task}/>                                      
                )
            }
            
        </div>
    );
    
}