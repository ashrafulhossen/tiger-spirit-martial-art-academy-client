// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SingleClass from './sections/SingleClass/SingleClass';

const Classes = () => {
    const allClasses = useLoaderData();
    console.log(allClasses);
    return (
        <div className=" bg-purple-100">
			<div className="max-w-7xl mx-auto py-20">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
					{allClasses.length > 0 &&
						allClasses.map((singleClass) => (
							<SingleClass
								key={singleClass._id}
								singleClass={singleClass}
							/>
						))}
				</div>
			</div>
		</div>
    )
}

export default Classes