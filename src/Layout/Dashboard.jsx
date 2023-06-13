// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>
            <Outlet/>
        </div>
    )
}

export default Dashboard