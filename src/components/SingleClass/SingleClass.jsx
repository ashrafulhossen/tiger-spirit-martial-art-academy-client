import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useSecureAxios from "../../hook/useSecureAxios";

const SingleClass = ({ singleClass }) => {
	const { user } = useContext(AuthContext);
	const {secureAxios} = useSecureAxios();

	const { name, image, instructor, availableSeats, price } = singleClass;
	const [availableSeatsState, setAvailableSeatsState] =
		useState(availableSeats);
	const navigate = useNavigate();
	const location = useLocation();

	const selectedClassEvent = () => {
		const availableSeats = singleClass.availableSeats - 1;
		const enroll = singleClass.enroll + 1;
		const classUpdatableData = { availableSeats, enroll };
		const selectedClassObj = {
			name: singleClass.name,
			image: singleClass.image,
			price: singleClass.price,
			isPaid: false,
			instructor: singleClass.instructor,
			studentUid: user?.uid
		};
		const postData = async () => {
			const res = await secureAxios.post(
				`http://localhost:5000/selectedClass/${singleClass._id}`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						selectedClassObj,
						classUpdatableData
					})
				}
			);
			if (res.data.modifiedCount && res.data.insertedId) {
				setAvailableSeatsState(availableSeats);
			} else if (res.data.status) {
				Swal.fire({
					icon: "warning",
					title: res.data.status,
					showConfirmButton: false,
					timer: 1000
				});
			}
		};
		if (user) {
			console.log(selectedClassObj, availableSeats);
			postData();
		} else {
			Swal.fire({
				title: "You Need To Login First To Select A Class",
				showCancelButton: true,
				confirmButtonText: "Login"
			}).then((result) => {
				/* Read more about isConfirmed, isDenied below */
				if (result.isConfirmed) {
					navigate("/authentication/login", {
						state: { from: location }
					});
				} else {
					Swal.fire(
						"Something went wrong. Please login first",
						"",
						"error"
					);
				}
			});
		}
	};

	return (
		<div
			className={`card w-full glass ${
				availableSeatsState > 0 ? "bg-purple-400" : "bg-red-600"
			}`}
		>
			<figure>
				<img
					className="h-72 w-full object-cover object-top"
					src={image}
					loading="lazy"
					alt={name}
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title text-3xl text-white">{name}</h2>
				<p className="text-lg text-white">
					Instructor Name: {instructor?.name}
				</p>
				<p className="text-lg text-white">
					Available Seats: {availableSeatsState}
				</p>
				<p className="text-lg text-white">Price: {price}</p>

				<div className="card-actions justify-end">
					<button
						onClick={selectedClassEvent}
						className="purple-btn"
						disabled={availableSeatsState == 0 && true}
					>
						Select
					</button>
				</div>
			</div>
		</div>
	);
};

SingleClass.propTypes = {
	singleClass: PropTypes.object.isRequired
};

export default SingleClass;
