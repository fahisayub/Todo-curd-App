import React from 'react';
import {Box,Flex} from '@chakra-ui/react';
import TaskInputCard from './TaskInputCard';

const TaskField = ({title}) => {
    return (
        <Box border='1px solid black' borderRadius='10px' width='300px' >
            <Box textAlign='center'padding='10px'bg='green.200'borderRadius='10px' fontSize='20px'>{title}</Box>
            <Box padding={2}>
                <TaskInputCard status={title}/>
            </Box>
        </Box>
    );
};

export default TaskField;