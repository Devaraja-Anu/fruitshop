import Footers from "./components/Footers";
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";

    const schema = yup.object().shape({
        username:yup.string().required('Please input your username'), 
        password:yup.string().required('please input your password').min(7,'Password must be at least 7 characters long')
    })


const Login = () => {

    const {register,handleSubmit,formState:{errors}} = useForm({resolver:yupResolver(schema)})



    const submitForm =(data)=>{
        console.log(data);
    }

  return (
    <div>
      <div className={`bg-white w-screen fixed z-10 `}>
        <Navbar />
      </div>
      <div className="max-w-screen h-screen bg-[url(./images/orangebg.jpg)] bg-center bg-cover flex flex-col justify-center items-center">
        <form
          className="border-2 flex flex-col justify-center max-w-screen  items-center rounded-xl bg-white"
          onSubmit={handleSubmit(submitForm)}
        >
          <h1 className="font-headings font-bold text-5xl pb-8 pt-10">Login</h1>
          <div className="px-10">
            <p className="font-semibold text-xl">Username</p>
            <input
              {...register("username")}
              className="border-2 h-10 w-64 sm:w-80 px-4 rounded-md mt-2"
              type="text"
              placeholder="Input Username Here"
            />
            <p className="text-red-500 py-2">{errors?.username?.message}</p>
          </div>
          <div>
            <p className="font-semibold text-xl  ">Password</p>
            <input
              {...register("password")}
              type="text"
              className="border-2 h-10 w-64 sm:w-80 px-4 rounded-md mt-2"
              placeholder="Input Password Here"
            />
            <p className="text-red-500 py-2">{errors?.password?.message}</p>
          </div>
          <div>
            <button className=" bg-background transition-all w-64 sm:w-80 rounded-xl text-white text-2xl font-semibold h-12 mt-3 mb-7 hover:scale-105">
              Submit
            </button>
          </div>

          <p className=" pb-5">
            Not a member yet ? <Link to='/signup' className="text-xl hover:text-2xl pl-2 underline text-red-500 transition-all">Signup</Link>
          </p>
        </form>
      </div>
      <Footers />
    </div>
  );
}

export default Login

