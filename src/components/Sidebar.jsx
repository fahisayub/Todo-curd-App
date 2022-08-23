import React from 'react';
import {
  Box,
  Button,
  Flex,
  useColorModeValue,
  Spacer,Divider
} from '@chakra-ui/react';
import ProfileCard from './ProfileCard';
import TagFilter from './TagFilter';
import { logoutApi } from '../redux/authReducer/actions';
import { useDispatch } from 'react-redux';


export default function Sidebar() {
    const dispatch=useDispatch();
    
    const logoutHandler=()=>{
        dispatch(logoutApi())
    }
  return (
    <Box minH="100vh"  bg={useColorModeValue('gray.100', 'gray.900')}>
      <Flex
      flexDirection='column'
        bg={useColorModeValue('white', 'gray.900')}
        borderRight="1px"
        borderRightColor={useColorModeValue('gray.200', 'gray.700')}
        
        position="fixed"
        h="full"
      >
        <Flex h="200px"   marginTop='60px' padding='10px'    justifyContent="space-between">
          
        <ProfileCard/>
        </Flex>
        <Divider marginBottom='10px' />
       <TagFilter/>
        <Spacer />
        <Divider />
        <Button bg='red.400' margin='10px' onClick={logoutHandler} >Logout</Button>
      </Flex>
    </Box>
  );
}


