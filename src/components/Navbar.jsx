import React from 'react';
import { Heading,Spacer,Button,Flex} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        
            <Flex padding='10px 50px 10px 30px' bg='green.400'  width='100%'  zIndex='overlay'    position="fixed"            >
                <Heading as={Link} to='/' color='white' size='md'>TODO</Heading>
                <Spacer/>
                <Button as={Link} to='/login'>Login</Button>
            </Flex>
            
        
    );
};

export default Navbar;