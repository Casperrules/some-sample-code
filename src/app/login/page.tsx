import React from "react";
import { FaLinkedinIn } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex h-screen justify-center items-center overflow-hidden w-full relative top-0 z-0 bg-[#ff88007f]">
      <div className="rotate-[-65deg] absolute bottom-[-60%] right-[-60%] h-[100%] w-[155%] rounded-[30%] z-1 bg-[#ff8800]"></div>
      <div className="absolute text-[32px] text-[#8c5618] font-semibold top-0 z-1 flex justify-start left-0 p-8">
        Welcome !
      </div>
      <div className="login-button bg-[#0A66C2] absolute z-2 p-4 rounded-md flex items-center justify-center cursor-pointer shadow-md">
        <div className="button-icon text-[#ffffff]">
          <FaLinkedinIn size={32} />
        </div>
        <div className="signin-text ml-2 font-bold text-lg text-[#ffffff] flex items-center">
          Sign In using Linkedin
        </div>
      </div>
    </div>
  );
};

export default Login;
