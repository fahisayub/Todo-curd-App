import React from 'react';
import {Box,Flex} from '@chakra-ui/react';
import TaskField from './TaskField';
const TaskBorad = () => {
    const Fields=['TODO','IN-PROGRESS','DONE'];
    return (
        <Flex  margin='70px 10px 10px 250px' justifyContent='space-evenly' padding='20px' width='100%' border='1px solid black' >
            {Fields.map((field,i)=>{
                return (<TaskField key={i} title={field}/>)
            })}
             </Flex>
    );
};

export default TaskBorad;