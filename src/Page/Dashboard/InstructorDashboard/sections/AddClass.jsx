// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import useSecureAxios from "../../../../hook/useSecureAxios";

const AddClass = () => {
	const { secureAxios } = useSecureAxios();
	const { user } = useContext(AuthContext);
	const [className, setClassName] = useState("");
	const [classImage, setClassImage] = useState("");
	const [price, setPrice] = useState("");
	const [availableSeats, setAvailableSeats] = useState("");

	const classNameEvent = (e) => setClassName(e.target.value);
	const classImageEvent = (e) => setClassImage(e.target.value);
	const priceEvent = (e) => setPrice(e.target.value);
	const availableSeatsEvent = (e) => setAvailableSeats(e.target.value);

	const onSubmit = (e) => {
		e.preventDefault();
		const classObj = {
			name: className,
			image: classImage,
			price,
			availableSeats,
			enroll: 0,
			status: "pending",
			instructor: {
				name: user?.displayName,
				email: user?.email,
				uid: user?.uid
			}
		};
		const postClass = async () => {
			const res = await secureAxios.post(`/class`, classObj);
			if (res.data.insertedId) {
				Swal.fire({
					icon: "success",
					title: "Your Class is successfully added",
					showConfirmButton: true,
					timer: 1500
				});

				setClassName("");
				setClassImage("");
				setPrice("");
				setAvailableSeats("");
			} else {
				Swal.fire({
					icon: "error",
					title: "Opps.. SomeThing went wrong. Please try again later.",
					showConfirmButton: true,
					timer: 1500
				});
			}
		};
		postClass();
	};

	return (
		<div className="hero min-h-screen bg-base-200 py-20">
			<div className="hero-content max-w-4xl w-full mx-auto flex-col lg:flex-row gap-16">
				<div className="card flex-shrink-0 w-full max-w-6xl shadow-2xl">
					<h1 className="text-5xl font-bold text-center pt-10">
						Add A Class
					</h1>
					<form
						className="card-body pb-12 w-full grid grid-cols-2 gap-x-6"
						onSubmit={onSubmit}
					>
						<div>
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text font-bold text-lg">
										Class Name
									</span>
								</label>
								<input
									type="text"
									required
									onChange={classNameEvent}
									value={className}
									placeholder="Enter class name"
									className="input input-bordered"
								/>
							</div>
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text font-bold text-lg">
										Class Image
									</span>
								</label>
								<input
									type="text"
									placeholder="Enter class image"
									required
									onChange={classImageEvent}
									value={classImage}
									className="input input-bordered"
								/>
							</div>

							<div className="form-control w-full">
								<label className="label">
									<span className="label-text font-bold text-lg">
										Price
									</span>
								</label>
								<input
									type="text"
									placeholder="Enter price"
									onChange={priceEvent}
									value={price}
									className="input input-bordered"
								/>
							</div>
						</div>
						<div>
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text font-bold text-lg">
										Instructor Name
									</span>
								</label>
								<input
									type="text"
									required
									readOnly
									value={user?.displayName}
									placeholder="Enter instructor Name"
									className="px-4 py-2 input input-bordered"
								/>
							</div>
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text font-bold text-lg">
										Instructor Email
									</span>
								</label>
								<input
									type="email"
									readOnly
									required
									value={user?.email}
									placeholder="Enter instructor email"
									className="px-4 py-2 input input-bordered w-full"
								/>
							</div>
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text font-bold text-lg">
										Available Seats
									</span>
								</label>
								<input
									type="text"
									onChange={availableSeatsEvent}
									value={availableSeats}
									placeholder="Enter available seats"
									className="input input-bordered"
								/>
							</div>
						</div>
						<div className="col-span-2">
							<div className="form-control w-full mt-6">
								<button className="purple-btn">Add</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddClass;
