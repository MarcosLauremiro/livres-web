import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react";
import { InputStyle } from "./style";


interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const Input = forwardRef(({label, ...rest}: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return(
        <div>
            {label ? <label>{label}</label> : null}
            <InputStyle ref={ref} {...rest} />
        </div>
    )
})