// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
	const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm();
	const [showPassword, setShowPassword] = useState(false);

	const onSubmit = (data) => {
		const { email, password } = data;
		signIn(email, password)
			.then(() => {
				console.log("User logged in");
				reset();
			})
			.catch((err) => console.log(err.message));
	};

	const showPasswordEvent = () => setShowPassword(!showPassword);

	return (
		<div className="hero min-h-screen bg-base-200 py-20">
			<div className="hero-content max-w-5xl mx-auto flex-col lg:flex-row gap-16">
				<div className="text-center lg:text-left w-1/2">
					<h1 className="text-5xl font-bold">Login now!</h1>
					<p className="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut
						assumenda excepturi exercitationem quasi. In deleniti
						eaque aut repudiandae et a id nisi.
					</p>
				</div>
				<div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
					<form
						className="card-body pb-4 w-full"
						onSubmit={handleSubmit(onSubmit)}
					>
						<div className="form-control w-full">
							<label className="label">
								<span className="label-text font-bold text-lg">
									Email
								</span>
							</label>
							<input
								type="email"
								placeholder="Enter your email"
								className="input input-bordered"
								{...register("email", {
									required: true
								})}
							/>
						</div>
						<div className="form-control w-full">
							<label className="label">
								<span className="label-text font-bold text-lg">
									Password
								</span>
							</label>
							<div className="relative">
								<input
									type={showPassword ? "text" : "password"}
									placeholder="Enter your password"
									className="input input-bordered w-full"
									{...register("password", {
										pattern:
											/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=~`[\]{}|:;"'<>,.?/])(.{6,})$/i,
										minLength: 6
									})}
								/>
								<span
									onClick={showPasswordEvent}
									className="absolute pt-1 top-3 right-3"
								>
									{showPassword ? (
										<FaEye className="w-5 h-4" />
									) : (
										<FaEyeSlash className="w-5 h-4" />
									)}
								</span>
							</div>
							{errors.password && (
								<p>
									You must enter 8 digit, minimum 1 special
									and 1 capital character
								</p>
							)}
						</div>
						<div className="form-control w-full mt-6">
							<button className="btn btn-primary">Login</button>
						</div>
					</form>
					<div className="px-8 pb-8">
						<p className="mb-3 flex items-center justify-center">
							<span className="w-full h-0 block border border-zinc-500"></span>
							<span className="w-full text-center font-semibold">
								Or sign in using
							</span>
							<span className="w-full h-0 block border border-zinc-500"></span>
						</p>
						<button
							onClick={googleSignIn}
							className="text-xl btn w-full mb-3"
						>
							<FaGoogle className="w-6 h-6 mr-1" /> Google
						</button>
						<button
							onClick={githubSignIn}
							className="text-xl btn w-full mb-3"
						>
							<FaGithub className="w-6 h-6 mr-1" /> Github
						</button>
						<p className="text-sm text-center mt-2">
							Are you new in Tiger Spirit Martial Art Academy?{" "}
							<Link
								to={"/authentication/register"}
								className="ml-1 font-semibold link link-hover"
							>
								Sign Up
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
