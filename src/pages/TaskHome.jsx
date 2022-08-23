import React from 'react';
import Sidebar from '../components/Sidebar';
import {Flex,Box } from '@chakra-ui/react';
import TaskBorad from '../components/TaskBorad';
const TaskHome = () => {
  return (
    <Flex>
      <Sidebar />
      <TaskBorad/>
    </Flex>
  );
};

export default TaskHome;
