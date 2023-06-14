import { updateProfile } from "firebase/auth";
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { postUser } from "../../hook/usePostUser";
import useSecureAxios from "../../hook/useSecureAxios";

const Register = () => {
	const { secureAxios } = useSecureAxios();
	const { signUp, googleSignIn, githubSignIn } = useContext(AuthContext);
	const userRole = "student";
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors }
	} = useForm();
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const onSubmit = (data) => {
		const { name, email, password, phone, image } = data;
		signUp(email, password)
			.then((result) => {
				const user = result.user;

				updateProfile(user, {
					displayName: name,
					photoURL: image || "",
					phoneNumber: phone
				})
					.then(() => {
						console.log("user data updated");
						postUser(secureAxios, user, userRole);
						console.log("active");
					})
					.catch((err) => console.log(err.message));

				console.log(user);
				reset();
				navigate("/");
			})
			.catch((err) => {
				console.log(err.message);
			});
		console.log(data);
	};

	const showPasswordEvent = () => setShowPassword(!showPassword);
	const showConfirmPasswordEvent = () =>
		setShowConfirmPassword(!showConfirmPassword);

	return (
		<div className="hero min-h-screen bg-base-200 py-20">
			<div className="hero-content max-w-4xl w-full mx-auto flex-col lg:flex-row gap-16">
				<div className="card flex-shrink-0 w-full max-w-6xl shadow-2xl">
					<h1 className="text-5xl font-bold text-center pt-10">
						Register
					</h1>
					<form
						className="card-body pb-4 w-full grid grid-cols-2 gap-x-6"
						onSubmit={handleSubmit(onSubmit)}
					>
						<div>
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text font-bold text-lg">
										Name
									</span>
								</label>
								<input
									type="text"
									required
									placeholder="Enter your name"
									className="input input-bordered"
									{...register("name", {
										required: true
									})}
								/>
							</div>
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text font-bold text-lg">
										Phone Number
									</span>
								</label>
								<input
									type="number"
									placeholder="Enter your name"
									required
									className="input input-bordered"
									{...register("phone", {
										required: true
									})}
								/>
							</div>
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text font-bold text-lg">
										Gender
									</span>
								</label>
								<select
									className="input input-bordered"
									{...register("gender")}
								>
									<option value="male">Male</option>
									<option value="female">Female</option>
									<option value="other">Other</option>
								</select>
							</div>
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text font-bold text-lg">
										Address
									</span>
								</label>
								<input
									type="text"
									placeholder="Enter your address"
									className="input input-bordered"
									{...register("address", {
										required: true
									})}
								/>
							</div>
						</div>
						<div>
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text font-bold text-lg">
										Email
									</span>
								</label>
								<input
									type="email"
									required
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
										type={
											showPassword ? "text" : "password"
										}
										placeholder="Enter your password"
										required
										className="input input-bordered w-full"
										{...register("password", {
											required: true,
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
									<p className="px-1 py-2 text-red-500 text-sm">
										You must enter 8 digit, minimum 1
										special, 1 capital character and 1
										number
									</p>
								)}
							</div>
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text font-bold text-lg">
										Confirm Password
									</span>
								</label>
								<div className="relative">
									<input
										type={
											showConfirmPassword
												? "text"
												: "password"
										}
										required
										placeholder="Re-enter your password"
										className="input input-bordered w-full"
										{...register("confirmPassword", {
											required: true,
											validate: (value) =>
												value === watch("password") ||
												"Passwords do not match"
										})}
									/>
									<span
										onClick={showConfirmPasswordEvent}
										className="absolute pt-1 top-3 right-3"
									>
										{showConfirmPassword ? (
											<FaEye className="w-5 h-4" />
										) : (
											<FaEyeSlash className="w-5 h-4" />
										)}
									</span>
								</div>
								{errors.confirmPassword && (
									<p className="mt-1 text-red-500">
										{errors.confirmPassword.message}
									</p>
								)}
							</div>
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text font-bold text-lg">
										Photo URL
									</span>
								</label>
								<input
									type="text"
									placeholder="Enter your photo url"
									className="input input-bordered"
									{...register("image", {})}
								/>
							</div>
						</div>
						<div className="col-span-2">
							<div className="form-control w-full mt-6">
								<button className="btn btn-primary">
									Sign Up
								</button>
							</div>
						</div>
					</form>
					<div className="px-8 pb-8 w-full pt-4">
						<p className="mb-4 flex items-center justify-center">
							<span className="w-full h-0 block border border-zinc-500"></span>
							<span className="w-full text-center font-semibold">
								Or sign up using
							</span>
							<span className="w-full h-0 block border border-zinc-500"></span>
						</p>
						<div className="grid grid-cols-2 w-full gap-6 mb-6">
							<button
								onClick={googleSignIn}
								className="text-xl btn bg-zinc-300"
							>
								<FaGoogle className="w-6 h-6 mr-1" /> Google
							</button>
							<button
								onClick={githubSignIn}
								className="text-xl btn bg-zinc-300"
							>
								<FaGithub className="w-6 h-6 mr-1" /> Github
							</button>
						</div>
						<p className="text-base text-center mt-2 font-medium">
							Already have an account?{" "}
							<Link
								to={"/authentication/login"}
								className="ml-1 font-bold link link-hover"
							>
								Sign In
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;