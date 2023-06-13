export const postUser = async (result, userRole) => {
	const user = {
		name: result.user.displayName,
		email: result.user.email,
		uid: result.user.uid,
        role: userRole
	};
	const res = await fetch("http:/localhost:5000/users", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(user)
	});
	const data = await res.json();
	console.log(data);
};
