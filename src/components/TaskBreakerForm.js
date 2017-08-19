import {AddTask} from './AddTask';

export const TaskBreakerForm = () => (
    <form>
        <label htmlFor="add-feature-name">Feature:</label>
        <input type="text" name="add-feature-name" id="add-feature-name"/>
        <AddTask />
    </form>
);