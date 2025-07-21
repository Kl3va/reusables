"use client";
import { useState } from "react";
// import { Controller, useFormContext } from "react-hook-form";
// import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface FormFieldProps {
  fieldConfig: {
    type: string;
    name: string;
    label: string;
    placeholder: string;
    required: boolean;
  };
}

const FormField = ({ fieldConfig }: FormFieldProps) => {
  // const {
  //   control,
  //   formState: { errors },
  // } = useFormContext();
  const { name, type, label } = fieldConfig; //attach placeholder if needed
  const [show, setShow] = useState(false);
  // const inputType = type === "password" ? (show ? "text" : "password") : type;
  // const error = errors[name]; // Uncomment the above line if using react-hook-form
  const error = { message: "error" }; //comment out when using react-hook-form

  return (
    <div className="w-full relative">
      <label
        htmlFor={name}
        className="block mb-2 text-sm text-fg-400 min-lg:text-base"
      >
        {label}
      </label>
      <div className="relative w-full h-9 min-lg:h-13">
        {/* add ...field to an empty object within the input*/}
        {/* <Controller
          name={name}
          control={control}
          defaultValue=""
          render={({}) => (
            <input
             

              id={name}
              type={inputType}
              placeholder={placeholder}
              className={`block w-full h-full border px-6 rounded-xl border-fg-300 ${
                error
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-fg-300 focus:ring-accent-100 focus:border-accent-100"
              }`}
            />
          )}
        /> */}
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            className="absolute inset-y-0 right-4 flex items-center text-gray-500"
          >
            {/* {show ? <AiFillEye /> : <AiFillEyeInvisible />} */}
            {show ? <span /> : <span />}
          </button>
        )}
      </div>
      {error && (
        <p className="absolute -bottom-4 text-sm text-red-600">
          {error.message as string}
        </p>
      )}
    </div>
  );
};

export default FormField;
