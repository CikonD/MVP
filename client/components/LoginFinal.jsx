
import Sheet from '@mui/joy/Sheet';
import CssBaseline from '@mui/joy/CssBaseline';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import {jwtDecode} from "jwt-decode"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios"



export default function LoginFinal() {

const navigate = useNavigate()
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")


  const handleSubmit = () => {
    // event.preventDefault();
     axios.post("http://localhost:8080/signInUser",{email,password})
      .then((res)=>{sessionStorage.setItem("lolo",jwtDecode(JSON.stringify(res)))
        console.log(sessionStorage.getItem("lolo"));
        navigate('Home')
      })
      .catch(err=>console.log(err))
    
    }
    

 
  // 
// axios.post("",{First_Name:data.get('firstName'),Last_Name:data.get('lastName'),email: data.get('email'),password: data.get('password')})
  

  return (
    <main>
      
      <CssBaseline />
      <Sheet
        sx={{
          width: 300,
          mx: 'auto', // margin left & right
          my: 4, // margin top & bottom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md',
        }}
        variant="outlined"
      >
        <div>
          <Typography level="h4" component="h1">
            <b>Welcome!</b>
          </Typography>
          <Typography level="body-sm">Sign in to continue.</Typography>
        </div>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            // html input attribute
            name="email"
            type="email"
            placeholder="your_Email@email.com"
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            // html input attribute
            name="password"
            type="password"
            placeholder="password"
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
          />
        </FormControl>
        <Button sx={{ mt: 1 /* margin top */ }} onClick={()=>{handleSubmit()}}>Log in</Button>
        <Typography
          endDecorator={<Link href=""   onClick={()=>{navigate('SignUp')}}>Sign up</Link>}
          fontSize="sm"
          sx={{ alignSelf: 'center' }}
        >
          Don&apos;t have an account?
        </Typography>
      </Sheet>
    </main>
  );
}