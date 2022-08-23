import React from 'react';
import {Box,Link,Flex} from '@chakra-ui/react';
import { FiHome, FiTrendingUp, FiCompass, FiStar } from 'react-icons/fi';

const TagFilter = () => {
    const LinkItems = [
        { name: 'All', icon: FiHome },
        { name: 'Personal', icon: FiTrendingUp },
        { name: 'Official', icon: FiCompass },
        { name: 'Others', icon: FiStar },
      ];

    return (
        <Box>
             {LinkItems.map(link => (
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        ))}
        </Box>
    );
};
const NavItem = ({ children }) => {
    return (
      <Link
      
        href="#"
        style={{ textDecoration: 'none' }}
        _focus={{ boxShadow: 'none' }}
      >
        <Flex
          align="center"
          p="4"
          borderRadius="lg"margin='5px 10px 5px 10px'
          role="group"
          cursor="pointer"
          bg='green.400'
          color= 'white'
  
          _hover={{
            bg: 'green.500',
          }}
        >
          {children}
        </Flex>
      </Link>
    );
  };

export default TagFilter;