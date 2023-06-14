import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import React from "react";

const AdminSingleClass = ({
	singleClass,
	approvedEvent,
	deniedEvent,
	feedbackEvent
}) => {
	const { name, image, price, instructor, _id, status, availableSeats } =
		singleClass;
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
				<p>{instructor.email}</p>
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
				<div className="flex items-center justify-center gap-4 h-full">
					<button
						className="purple-btn"
						onClick={() => approvedEvent(_id)}
						disabled={status === "approved"}
					>
						Approved
					</button>
					<button
						className="purple-btn"
						onClick={() => deniedEvent(_id)}
						disabled={status === "denied"}
					>
						Deny
					</button>
					<button
						className="purple-btn"
						onClick={() => window.my_modal.showModal()}
					>
						Feedback
					</button>
				</div>
				<dialog id="my_modal" name="my_modal" className="modal">
					<form method="dialog" className="modal-box">
						<h3 className="font-bold text-lg">Hello!</h3>
						<p className="py-4">
							Press ESC key or click the button below to close
						</p>
						<div className="modal-action">
							{/* if there is a button in form, it will close the modal */}
							<button
								className="purple-btn"
								onClick={() => feedbackEvent(_id)}
							>
								Send
							</button>
						</div>
					</form>
				</dialog>
			</th>
		</tr>
	);
};

AdminSingleClass.propTypes = {
	singleClass: PropTypes.object.isRequired,
	approvedEvent: PropTypes.func.isRequired,
	deniedEvent: PropTypes.func.isRequired,
	feedbackEvent: PropTypes.func.isRequired
};

export default AdminSingleClass;
