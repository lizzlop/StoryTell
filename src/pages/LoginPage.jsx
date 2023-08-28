import { Link } from "react-router-dom";
import { ButtonCustom } from "../components/basics/button/ButtonCustom";
import { GoogleButton } from "../components/basics/googleButton/GoogleButton";
import { InputCustom } from "../components/basics/input/InputCustom";
import landing from "../assets/img/landing.gif";
import { useForm } from "react-hook-form";

import { useSpring, animated } from "@react-spring/web";

export const LoginPage = () => {
  const springs = useSpring({
    from: { x: 100 },
    to: { x: 0 },
  });

  return (
    <>
      <div className="flex justify-center">
        <animated.div
          className="w-2/3 hidden md:block"
          style={{
            ...springs,
          }}>
          <img src={landing} alt="Landing image" className="w-full h-full" />
        </animated.div>
        <div className="w-full md:w-1/3 grid place-items-center gap-6">
          {/* TODO: Change the mt y mb, encontrar la manera de alinear eso mejor */}
          <p className="italic font-serif text-customOrange text-3xl mt-16 mb-10">
            StoryTells
          </p>
          <p className=" text-customGray text-lg">Welcome to StoryTell</p>
          <InputCustom text="Usuarname or email" type="text" value="lizzlop" />
          <InputCustom text="Password" type="password" value="1234" />
          <ButtonCustom text="Sign in" />
          <div className="flex items-center">
            <hr className="w-24 h-0.3 bg-gray-300"></hr>
            <p className=" text-customGray m-1 text-sm">or</p>
            <hr className="w-24 h-0.3 bg-gray-300"></hr>
          </div>
          <GoogleButton />
          <div className="flex items-center">
            <p className=" text-customGray text-sm mr-1">New in StoryTell?</p>
            <Link
              to="/register"
              className="text-customOrange text-sm hover:text-customBlue">
              Create account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
