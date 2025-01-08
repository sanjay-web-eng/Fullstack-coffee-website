import React, { useEffect, useState } from "react";

function Skeleton({ num }) {
	const [NumberOfSkeleton, setNumberOfSkeleton] = useState(num);

	return (
		<div className="h-full w-full items-center justify-center flex flex-wrap gap-3">
			{Array.from({ length: NumberOfSkeleton }).map((id) => {
				return (
					<div
						key={id}
						className=" w-[350px] h-[500px] p-3 rounded-lg shadow-xl animate-pulse"
					>
						<div className="h-[350px] rounded-lg w-full bg-gray-200"></div>
						<div className="h-6 bg-gray-200 rounded w-1/2 mt-3"></div>
						<div className="h-6 bg-gray-200 rounded w-1/3 mt-3"></div>
						<div className="bg-gray-200 px-5 py-2 mt-2 rounded-lg h-10"></div>
					</div>
				);
			})}
		</div>
	);
}

export default Skeleton;
