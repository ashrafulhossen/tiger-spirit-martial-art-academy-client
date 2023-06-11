// eslint-disable-next-line no-unused-vars
import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
import loadingImg from "/assets/logo1.png";

const LoadingData = () => {
	return (
		<div className="flex items-center justify-center py-10 px-2  w-full h-full bg-purple-100 bg-opacity-70">
			<div className="w-[17rem] h-[17rem] border-4 border-purple-600 flex flex-col items-center justify-center rounded-full bg-purple-300">
				<img src={loadingImg} className=" rounded-full" alt="" />
				<BeatLoader color="#a855f7" margin={3} size={18} />
			</div>
		</div>
	);
};

export default LoadingData;
