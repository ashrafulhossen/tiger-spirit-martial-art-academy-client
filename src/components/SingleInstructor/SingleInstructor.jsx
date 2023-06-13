import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import React from "react";

const SingleInstructor = ({ singleInstructor, showBtn }) => {
	const { _id, name, image, email } = singleInstructor;
	return (
		<div className="card w-full glass bg-gradient-to-br from-purple-700 via-purple-400 to-purple-200">
			<figure>
				<img
					className="h-72 w-full object-cover object-top"
					src={image}
					loading="lazy"
					alt={name}
				/>
			</figure>
			<div className="card-body items-center justify-center">
				<h2 className="card-title text-3xl">{name}</h2>
				<p className="text-lg ">Email: {email}</p>
				{showBtn && (
					<div className="card-actions">
						<button className="btn btn-primary">See Classes</button>
					</div>
				)}
			</div>
		</div>
	);
};

SingleInstructor.propTypes = {
	singleInstructor: PropTypes.object.isRequired,
	showBtn: PropTypes.bool
};

export default SingleInstructor;
