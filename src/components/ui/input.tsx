import React, { InputHTMLAttributes } from "react";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ ...props }, ref) => {
        return <input ref={ref} {...props}></input>;
    }
);

export default Input;
