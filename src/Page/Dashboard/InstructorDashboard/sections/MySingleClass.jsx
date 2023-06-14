import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import React from "react";
import Modal from "../../../../components/Modal/Modal";
import UpdateClass from "./UpdateClass";

const MySingleClass = ({ singleClass }) => {
	const {
		_id,
		name,
		image,
		price,
		status,
		availableSeats,
		enroll,
		feedback
	} = singleClass;
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
				<p className="text-base text-zinc-600 font-semibold">
					{enroll}
				</p>
			</td>
			<th>
				<p className="text-base text-zinc-600 font-semibold">
					{availableSeats}
				</p>
			</th>
			<th>
				<p className="text-base text-zinc-600 font-semibold">{price}</p>
			</th>
			<th>
				<p className="text-base text-zinc-600 font-semibold">
					{status}
				</p>
			</th>
			<th>
				<p className="text-base text-zinc-600 font-semibold">
					{feedback ? feedback : "No Feedback"}
				</p>
			</th>
			<th>
				<Modal btnName={"Update"}>
                    <UpdateClass classId={_id} />
                </Modal>
			</th>
		</tr>
	);
};

MySingleClass.propTypes = {
	singleClass: PropTypes.object.isRequired,
	updateEvent: PropTypes.func.isRequired
};

export default MySingleClass;
