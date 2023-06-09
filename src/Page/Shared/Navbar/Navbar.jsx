// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/assets/logo-dark.svg";

const Navbar = () => {
	const menuItems = (
		<>
			<li>
				<NavLink
					to={"/"}
					className={({ isActive }) =>
						`navlink ${isActive && "border-b-2 border-zinc-600"}`
					}
				>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					to={"/instructors"}
					className={({ isActive }) =>
						`navlink ${isActive && "border-b-2 border-zinc-600"}`
					}
				>
					Instructors
				</NavLink>
			</li>
			<li>
				<NavLink
					to={"/classes"}
					className={({ isActive }) =>
						`navlink ${isActive && "border-b-2 border-zinc-600"}`
					}
				>
					Classes
				</NavLink>
			</li>
			<li>
				<NavLink
					to={"/dashboard"}
					className={({ isActive }) =>
						`navlink ${isActive && "border-b-2 border-zinc-600"}`
					}
				>
					Dashboard
				</NavLink>
			</li>
			<li>
				<NavLink
					to={"/authentication/login"}
					className={({ isActive }) =>
						`navlink ${isActive && "border-b-2 border-zinc-600"}`
					}
				>
					Login
				</NavLink>
			</li>
		</>
	);

	return (
		<div className="navbar bg-base-100 py-4 px-4">
			<div className="navbar-start justify-between lg:justify-start w-full lg:w-2/5">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						{menuItems}
					</ul>
				</div>
				<Link
					to={"/"}
					className="min-w-[180px] flex flex-col xs:flex-row items-center justify-center gap-2 mb-3"
				>
					<img src={logo} alt="logo" className="w-16" />
					<h1 className="flex flex-col items-center justify-center space-y-1">
						<span className="text-3xl font-bold">Tiger Spirit</span>
						<span className="text-base tracking-wide">
							Martial Art Academy
						</span>
					</h1>
				</Link>
			</div>
			<div className="navbar-end w-0 lg:w-3/5">
				<ul className="menu menu-horizontal px-1 hidden lg:flex">
					{menuItems}
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
