import React from "react";
import style from "./FormControl.module.css";

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${style.formControl} ${hasError ? style.error : ""}`}>
            <textarea {...input} {...props}/>
            <div className={`${style.errorText}`}>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${style.formControl} ${hasError ? style.error : ""} ${style.valid}`}>
            <input {...input} {...props} required/>
            <div className={`${style.errorText}`}>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}