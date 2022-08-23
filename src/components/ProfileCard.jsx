import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';

const ProfileCard = () => {
    const {email,name,username}=useSelector(state=>state.authReducer.profileData);
    return (
        <Box borderRadius={10} boxShadow='base'padding='20px' margin='auto' >
            
            <Text fontSize={25}>Hai,{username?username:name}</Text>
            <Text color='gray'>{name}</Text>
            <Text color='gray'>{email}</Text>
            
        </Box>
    );
};

export default ProfileCard;