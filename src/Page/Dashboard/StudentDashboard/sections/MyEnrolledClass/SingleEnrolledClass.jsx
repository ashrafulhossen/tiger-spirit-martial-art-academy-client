import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import React from "react";

const SingleEnrolledClass = ({ enrolledClass }) => {
	const { name, image, instructor} = enrolledClass;
	return (
		<tr>
			<td>
				<div className="flex items-center space-x-3">
					<div className="avatar">
						<div className="mask mask-squircle w-24 h-24">
							<img src={image} alt={name} />
						</div>
					</div>
				</div>
			</td>
			<td>
				<h4 className="text-xl font-bold">{name}</h4>
			</td>
			<td>
				<h4 className="text-xl font-bold">{instructor.name}</h4>
			</td>
			<th>
				<p className="text-base text-green-600 px-4 py-2 bg-green-50 rounded-xl text-center font-semibold">
					Successfully Enrolled
				</p>
			</th>
		</tr>
	);
};

SingleEnrolledClass.propTypes = {
	enrolledClass: PropTypes.object.isRequired
};

export default SingleEnrolledClass;
