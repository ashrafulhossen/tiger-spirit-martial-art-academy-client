import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import React from "react";

const SingleSelectedClass = ({ selectedClass, enrollEvent, deleteEvent }) => {
	const { name, image, price, instructor, _id } = selectedClass;
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
				<p className="text-base text-zinc-600 font-semibold">{price}</p>
			</th>
			<th className="flex items-center justify-center gap-6">
				<>
					<button
						className="purple-btn"
						onClick={() => enrollEvent(_id)}
					>
						Enroll
					</button>
					<button
						className="purple-btn"
						onClick={() => deleteEvent(_id)}
					>
						Delete
					</button>
				</>
			</th>
		</tr>
	);
};

SingleSelectedClass.propTypes = {
	selectedClass: PropTypes.object.isRequired,
	enrollEvent: PropTypes.func,
	deleteEvent: PropTypes.func
};

export default SingleSelectedClass;
