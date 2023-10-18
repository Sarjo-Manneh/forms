import React from 'react';
import { useForm } from "react-hook-form";

function SignUpUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="hook">
      <div><h1>Sign Up</h1></div>
      
      <div className="hook__field">
        <label className="hook__text">First Name</label>
        <input
          {...register("firstName", { required: "First name is required" })}
          className="hook__input"
        />
        {errors.firstName && <p className="hook__error">{errors.firstName.message}</p>}
      </div>
      
      <div className="hook__field">
        <label className="hook__text">Last Name</label>
        <input
          {...register("lastName", { required: "Last name is required" })}
          className="hook__input"
        />
        {errors.lastName && <p className="hook__error">{errors.lastName.message}</p>}
      </div>
      
      <div className="hook__field">
        <label className="hook__text">Username</label>
        <input
          {...register("userName", { required: "Username is required" })}
          className="hook__input"
        />
        {errors.userName && <p className="hook__error">{errors.userName.message}</p>}
      </div>
      
      <div className="hook__field">
        <label className="hook__text">Email</label>
        <input
          type="email"
          className="hook__input"
          {...register("email", { required: "Email is required", pattern: {value: /^\S+@\S+$/i, message: "Invalid email format"} })}
        />
        {errors.email && <p className="hook__error">{errors.email.message}</p>}
      </div>

      <div className="hook__field">
        <label className="hook__text">Password</label>
        <input
          type="password"
          className="hook__input"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <p className="hook__error">{errors.password.message}</p>}
      </div>

      <div className="hook__field">
        <label className="hook__text">Confirm Password</label>
        <input
          type="password"
          className="hook__input"
          {...register("confirmPassword", { 
            required: "Confirm your password",
            validate: value => value === getValues().password || "Passwords don't match"
          })}
        />
        {errors.confirmPassword && <p className="hook__error">{errors.confirmPassword.message}</p>}
      </div>

      <button className="hook__button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default SignUpUser;
