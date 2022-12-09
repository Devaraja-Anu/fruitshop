import React from 'react'

const Footers = () => {
  return (
    <div>
      <div className="bg-slate-300 grid sm:grid-cols-2 grid-rows-1 h-1/2 max-w-screen">
        <div className="flex flex-col justify-center items-center py-10">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookie Policy</p>
          <p>About Us</p>
          <p>FAQ</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span> Contact us </span>
          <p>2371127131</p>
          <p> Email us on frutstores@gmail.com</p>
          <p>747 Pacific Hwy Lisarow NSW 2450</p>
        </div>
        <p className="col-span-full flex justify-center pb-10 pt-5">
          {" "}
          © 2022, Groceries Corner. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footers