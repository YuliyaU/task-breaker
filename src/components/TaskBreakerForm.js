export const TaskBreakerForm = ({onNewTask}) => {
    let _taskName, _featureName
    const handleSubmit = (event) => {
        event.preventDefault();
        onNewTask({            
            id: 2,
            taskName: _featureName.value,
            featureName: _taskName.value            
        });
        // To clear input fields from previous value inputs
        _taskName.value = '';
        _featureName.value = '';
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Feature:</label>
            <input type="text"                                            
                   ref={input => _featureName = input} />
            <label htmlFor="add_task_name">Task:</label>
            <input type="text"                                              
                   ref={input => _taskName = input} />  
            <input type="submit" value="Add a task" />
        </form>
    );
}
