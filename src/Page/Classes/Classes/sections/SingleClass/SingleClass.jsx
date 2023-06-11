import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import React from "react";

const SingleClass = ({ singleClass }) => {
	const { _id, name, image, instructor, availableSeats, price } = singleClass;
	return (
		<div
			className={`card w-full glass ${
				availableSeats > 0 ? "bg-purple-400" : "bg-red-600"
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
				<p className="text-lg text-white">Instructor Name: {instructor.name}</p>
				<p className="text-lg text-white">Available Seats: {availableSeats}</p>
				<p className="text-lg text-white">Price: {price}</p>

				<div className="card-actions justify-end">
					<button
						className="purple-btn"
						disabled={availableSeats == 0 && true}
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
