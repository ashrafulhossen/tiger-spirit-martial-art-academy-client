import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import React from "react";

const AdminSingleUser = ({ singleUser, makeInstructor, makeAdmin }) => {
	const { name, email, role, uid } = singleUser;
	return (
		<tr>
			<td>
				<h4 className="text-xl font-bold">{name}</h4>
			</td>
			<td>
				<h4 className="text-xl font-bold">{email}</h4>
			</td>
			<th>
				<p className="text-base text-zinc-600 font-semibold">{role}</p>
			</th>
			<th>
				<div className="flex items-center justify-center gap-4 h-full">
					<button
						className="purple-btn"
						onClick={() => makeInstructor(uid)}
						disabled={role === "instructor"}
					>
						Make Instructor
					</button>
					<button
						className="purple-btn"
						onClick={() => makeAdmin(uid)}
						disabled={role === "admin"}
					>
						Make Admin
					</button>
				</div>
			</th>
		</tr>
	);
};

AdminSingleUser.propTypes = {
	singleUser: PropTypes.object.isRequired,
	makeAdmin: PropTypes.func.isRequired,
	makeInstructor: PropTypes.func.isRequired
};

export default AdminSingleUser;
