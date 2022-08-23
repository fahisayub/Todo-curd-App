import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
  import {useDispatch,useSelector} from 'react-redux';
import { Link as RegLink } from 'react-router-dom';
import { loginApi } from '../redux/authReducer/actions';
import { useNavigate ,useLocation} from 'react-router-dom';


  
  export default function Login() {
    const [form,setForm]=useState({});
    const dispatch=useDispatch()
    const {isAuth}=useSelector(state=>state.authReducer);
    const navigate=useNavigate();
    const location=useLocation();
    const comefrom=location?.state?.from?.pathname||'/'
    const handleChange=(e)=>{
      const {name,value}=e.target;
      const payload={
        ...form,
        [name]:value,
      }
      setForm(payload)

    }

    const handleLogin=(e)=>{
      e.preventDefault();
     dispatch(loginApi(form));
      
    }

    useEffect(()=>{
      if(isAuth){
        navigate(comefrom ,{replace:true});
      }
    },[isAuth])

    return (
      <div>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
           
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>User Name</FormLabel>
                <Input type="text" name='email' onChange={handleChange} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" name='password' onChange={handleChange}  />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Text as={RegLink} color='blue' to='/register'>Create accout here</Text>
                <Button
                onClick={handleLogin}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      </div>
    );
  }