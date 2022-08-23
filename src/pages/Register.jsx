import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useEffect, useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { registerApi } from '../redux/authReducer/actions';
import {useDispatch,useSelector} from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';



  export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [form,setForm]=useState({});
    const {isAuth}=useSelector(state=>state.authReducer);
    const navigate=useNavigate();
    const location=useLocation();
    const comefrom=location?.state?.from?.pathname||'/'
    const dispatch=useDispatch()
    const handleChange=(e)=>{
      const {name,value}=e.target;
      const payload={
        ...form,
        [name]:value,
      }
      setForm(payload)

    }

    const handleRegister=(e)=>{
      e.preventDefault();
     dispatch(registerApi(form));
      
    }
    useEffect(()=>{
      if(isAuth){
        navigate(comefrom ,{replace:true});
      }
    },[isAuth,comefrom,navigate])
    return (
      <div>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input type="text"name='name'onChange={handleChange} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="username">
                    <FormLabel>Username</FormLabel>
                    <Input type="text"name='username'onChange={handleChange} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" name='email'onChange={handleChange} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} name='password'onChange={handleChange} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                onClick={handleRegister}
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                  
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      </div>
    );
  }