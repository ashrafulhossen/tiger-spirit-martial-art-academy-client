// eslint-disable-next-line no-unused-vars
import React from "react";
import {
	FaAngleRight,
	FaEnvelope,
	FaFacebookF,
	FaMapMarkerAlt,
	FaPhoneAlt,
	FaTwitter,
	FaYoutube
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "/assets/logo1.png";

const Footer = () => {
	return (
		<footer className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-6 justify-items-center px-4 md:px-10 lg:pl-16 pb-4 pt-20 bg-zinc-100 text-base-content">
			<div className="min-w-[240px] w-[17rem] sm:p-0 ml-4 sm:ml-0">
				<Link
					to={"/"}
					className="w-[310px] flex items-center justify-center gap-2 mb-3 mx-auto sm:mx-0"
				>
					<img src={logo} alt="logo" className="w-16" />
					<h1 className="flex flex-col items-center justify-center space-y-1 logo-gradient">
						<span className="text-[28px] font-extrabold uppercase text-transparent">
							Tiger Spirit
						</span>
						<span className="text-base text-transparent capitalize font-semibold">
							Martial Art Academy
						</span>
					</h1>
				</Link>
				<p className="text-base text-center">
					Martial arts are ancient combat practices encompassing
					various disciplines and techniques. They promote physical
					fitness, self-defense, discipline, and mental
				</p>
			</div>
			<div className="max-w-[20rem] max-[699px]:w-[15rem] min-[700px]:w-auto pl-3">
				<span className="footer-title block text-center sm:text-left text-2xl text-purple-700 opacity-70">
					About Us
				</span>
				<p className="mt-4 text-center sm:text-left text-base mb-1 leading-6">
					Welcome to Tiger Spirit Martial Art Academy! Discover your
					inner strength through disciplined training, self-defense
					techniques, and personal growth. Join our supportive
					community, learn diverse martial.....{" "}
					<span className="ml-1 pl-1 capitalize hover:border-b-2 border-black font-semibold">
						read more <FaAngleRight className="inline-flex" />
					</span>
				</p>
			</div>
			<div>
				<span className="footer-title block text-center sm:text-left text-2xl text-purple-700 opacity-70">
					Contact Info
				</span>
				<p className="mt-4 link link-hover text-center sm:text-left text-lg mb-2">
					<FaEnvelope className="w-5 h-5 inline-flex mr-2" />
					tigerspirit@gmail.com
				</p>
				<p className="link link-hover text-center sm:text-left text-lg mb-2">
					<FaPhoneAlt className="w-5 h-5 inline-flex mr-2" />
					+880 2 9556738
				</p>
				<p className="link link-hover text-center sm:text-left text-lg mb-2">
					<FaMapMarkerAlt className="w-5 h-5 inline-flex mr-2" />
					89, Nawbpur Road, Dhaka
				</p>
			</div>
			<div>
				<span className="footer-title block text-center sm:text-left text-2xl text-purple-700 opacity-70">
					Social Links
				</span>
				<p className="mt-6 link link-hover text-center sm:text-left text-lg mb-3">
					<FaFacebookF className="inline-flex mr-2 bg-zinc-200 p-2 text-4xl rounded-md" />
					Facebook
				</p>
				<p className="link link-hover text-center sm:text-left text-lg mb-3">
					<FaTwitter className="inline-flex mr-2 bg-zinc-200 p-2 text-4xl rounded-md" />
					Twitter
				</p>
				<p className="link link-hover text-center sm:text-left text-lg mb-3">
					<FaYoutube className="inline-flex mr-2 bg-zinc-200 p-2 text-4xl rounded-md" />
					Youtube
				</p>
			</div>
			<div className="col-span-full border-t border-zinc-400 pt-4 w-full">
				<p className="text-center text-zinc-500 text-sm">
					Copyright © 2023 - All right reserved by Tiger Spirit
					Martial Art Academy
				</p>
			</div>
		</footer>
	);
};

export default Footer;
