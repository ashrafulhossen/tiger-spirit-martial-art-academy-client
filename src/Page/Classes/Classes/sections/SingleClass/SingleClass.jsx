import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import React from "react";

const SingleClass = ({ singleClass }) => {
	const { _id, name, image, instructor,availableSeats, price } = singleClass;
	return (
		<div className="card w-full glass">
			<figure>
				<img
					className="h-72 w-full object-cover object-top"
					src={image}
					loading="lazy"
					alt={name}
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title text-3xl">{name}</h2>
				<p className="text-lg ">Instructor Name: {instructor.name}</p>
				<p className="text-lg ">Available Seats: {availableSeats}</p>
				<p className="text-lg ">Price: {price}</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary">Select</button>
				</div>
			</div>
		</div>
	);
};

SingleClass.propTypes = {
	singleClass: PropTypes.object.isRequired
};

export default SingleClass;
