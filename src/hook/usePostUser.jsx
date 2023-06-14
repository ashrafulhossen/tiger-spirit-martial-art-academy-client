export const postUser = async (secureAxios, userInfo, userRole) => {
	const user = {
		name: userInfo?.displayName,
		email: userInfo?.email,
		uid: userInfo.uid,
		role: userRole
	};

	try {
		const res = await secureAxios.post("/users", user);
		console.log(res.data && "post user into database"); // Handle the response data
	} catch (error) {
		console.error(error); // Handle the error
	}
};
