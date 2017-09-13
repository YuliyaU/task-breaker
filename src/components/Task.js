import {Component} from 'react';
import FaHandScissorsO from 'react-icons/lib/fa/hand-scissors-o';

export const Task = ({task}) => {    
    
    return (
        <div className="task">
            <p>{task.taskName}</p>
            <button className="break-task"><FaHandScissorsO /></button>
        </div>
    );    
}