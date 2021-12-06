import { useState } from "react";

const Tasks = () => {

    const [tasks, setTasks] = useState([
        
        {
            id: 1,
            text: 'Appointment',
            day: 'July 16th at 12:07am',
            reminder: true
        },
        {
            id: 2,
            text: 'Appointment in the bar',
            day: 'July 16th at 12:07am',
            reminder: true
        },
        {
            id: 3,
            text: 'Football',
            day: 'July 16th at 12:07am',
            reminder: false
        },
    ]) 

    return(
        <>
            {tasks.map((task) => (
                <h3 key={task.id}> {task.text} </h3>  
            ))}
        </>
    )
}

export default Tasks;