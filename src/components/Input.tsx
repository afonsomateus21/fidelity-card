import { Ref, forwardRef } from "react";
import { InputProps } from "../types/input-props";

function Input({ errors, ...rest }: InputProps, ref: Ref<HTMLInputElement>) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full md:w-3/4 border-gray-500 border-2 rounded-xl h-10 flex items-center p-1">
        <input 
          {...rest}
          className="outline-none border-none w-full" 
          ref={ref}
        />
      </div>

      <p className="text-red-500"> {errors} </p>
    </div>
  );
}

export const UserInput = forwardRef(Input);