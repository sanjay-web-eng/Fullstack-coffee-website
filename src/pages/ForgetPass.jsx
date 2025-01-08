import React, { useEffect, useState } from "react";
import { updatePassword } from "../appwrite/auth";
function ForgetPass() {
	const updatepass = "1234567890qwertyuiopsdf";
	const upPss = async () => {
		await updatePassword("1234567890poiuytrewq");
	};

	console.log(upPss());

	return (
		<div>
			<h1>ypuu</h1>
		</div>
	);
}

export default ForgetPass;
