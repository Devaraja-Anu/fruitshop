import Footers from './components/Footers';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form'
import Navbar from './components/Navbar';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
const schema = yup.object().shape({
    username:yup.string().required('Please enter a username'),
    email:yup.string().required('please enter your Email'),
    phoneNo:yup.string().required('please enter your phone no').max(10,'the phone number cannot exceed 10 digits').min(10,'The phone number must be atleast 10 digits'),
    password:yup.string().required('please enter a password').min(7,'password must be atleast 7 characters long'),
})

const Signup = () => {

    const {register,handleSubmit,formState:{errors}} = useForm({resolver:yupResolver(schema)})

  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()

 const submitForm = async(data) => { 
  try{
    setLoading(true)
    await axios.post("http://localhost:3000/signup", data)
    navigate('/')    
    setLoading(false)
  }
  catch(err){
    console.log('Error '+ err);
  }
}



  return (
    <div>
      <div className={`bg-white w-screen fixed z-10`}>
        <Navbar />
      </div>
      <div className="bg-[url(./images/grapeBackground.jpg)] bg-cover w-screen h-screen flex flex-col  items-center justify-center ">
        <div className=" sm:w-fit bg-white rounded-xl mt-16 h-screen sm:h-auto">
          <form
            className="flex flex-col justify-center items-center px-8"
            onSubmit={handleSubmit(submitForm)}
          >
            <p className=" text-4xl font-bold  font-headings pt-10">SIGNUP</p>
            <p className="pt-4 self-start pl-20 sm:pl-10 pb-2 text-xl font-semibold">
              Username
            </p>
            <input
              {...register("username")}
              className="border-2 w-80 sm:w-96 h-10  rounded px-3"
              type="text"
              placeholder="Enter username here"
            />
            <p className="text-red-500 pr-24">{errors?.username?.message}</p>
            <p className="pt-4 self-start pl-20 sm:pl-10 pb-2 text-xl font-semibold">
              Email
            </p>
            <input
              {...register("email")}
              className="border-2  w-80 sm:w-96 h-10 rounded px-3"
              type="email"
              placeholder="Enter Email here"
            />
            <p className="text-red-500 pr-24 ">{errors?.email?.message}</p>
            <p className="pt-4 self-start pl-20 sm:pl-10 pb-2 text-xl font-semibold">
              Phone Number
            </p>
            <input
              {...register("phoneNo")}
              className="border-2  w-80 sm:w-96 h-10 rounded px-3"
              type="text"
              placeholder="Enter phone number here"
            />
            <p className="text-red-500 pr-24">{errors?.phoneNo?.message}</p>
            <p className="pt-4 self-start pl-20 sm:pl-10 pb-2 text-xl font-semibold">
              Password
            </p>
            <input
              {...register("password")}
              className="border-2  w-80 sm:w-96 h-10 rounded px-3"
              type="text"
              placeholder="Enter password here"
            />
            <p className="text-red-500 pr-24">{errors?.password?.message}</p>

            <button
              className="bg-background h-12 w-96 rounded-xl text-white text-2xl m-10 hover:scale-105"
            >
              {loading?`Loading`:`Signup`}
            </button>
          </form>
        </div>
      </div>
      <Footers />
    </div>
  );
}

export default Signup