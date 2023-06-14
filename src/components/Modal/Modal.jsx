import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Modal = ({ children, btnName, eventHandler }) => {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<>
			<button className="purple-btn" onClick={openModal}>
				{btnName}
			</button>

			{isOpen && (
				<div className="transition-all max-w-4xl mx-auto duration-500 fixed inset-0 flex w-full items-center justify-center z-50">
					<div className="fixed inset-0 bg-gray-900 w-full opacity-60"></div>
					<div className="bg-white p-8 rounded-lg w-full z-10">
						<div>{children}</div>
						<div className="px-8 text-right">
							<button className="purple-btn" onClick={closeModal}>
								Close
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

Modal.propTypes = {
	children: PropTypes.element.isRequired,
	btnName: PropTypes.string.isRequired,
	eventHandler: PropTypes.func
};

export default Modal;
