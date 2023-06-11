// eslint-disable-next-line no-unused-vars
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import bannerImg1 from "/assets/home/Banner1.png";
import bannerImg2 from "/assets/home/Banner2.png";
import bannerImg3 from "/assets/home/Banner3.png";
import bannerImg4 from "/assets/home/Banner4.png";

const Banner = () => {
	return (
		<div>
			<Carousel autoPlay showThumbs={false}>
                {/* Slider 1 */}
				<div className="flex items-center flex-col-reverse lg:flex-row justify-center px-1 lg:px-20 py-28 gap-10 bg-purple-100 dark:bg-dark">
					<div className="w-full lg:w-1/2 space-y-8 px-6">
						<h2 className="text-6xl pb-2 font-bold gradient bg-clip-text text-transparent">
							Martial Art
						</h2>
						<p
							style={{ textShadow: "0px 0px 1px purple" }}
							className="text-lg tracking-wide text-purple-600"
						>
							Martial art is a disciplined practice combining
							physical techniques and mental training for
							self-defense, combat, and personal development. It
							encompasses a wide range of styles, such as karate,
							taekwondo, judo, and kung fu, each with its unique
							techniques, philosophies, and cultural influences.
							Martial art promotes fitness, discipline, respect,
							and self-confidence, while nurturing mental
							resilience and spiritual growth. It is a path of
							continuous learning, self-discovery, and mastery of
							the body and mind.
						</p>
						<button className="tracking-widest rounded-full text-lg px-6 btn btn-outline border-2 hover:bg-purple-600 border-purple-600 hover:border-purple-600 text-purple-600">
							Join Now
						</button>
					</div>
					<div className="rounded-full border-[12px] sm:border-[1rem] border-purple-300 overflow-hidden m-0">
						<div className="rounded-full border-[12px] sm:border-[1rem] border-purple-500 overflow-hidden">
							<div className="max-w-[25rem] max-h-[25rem] min-w-[10rem] min-h-[10rem] rounded-full border-[12px] sm:border-[1rem] border-purple-800 overflow-hidden">
								<img
									className="object-cover object-top h-full w-full"
									src={bannerImg1}
									alt="banner image 1"
								/>
							</div>
						</div>
					</div>
				</div>

                {/* Slider 2 */}
				<div className="flex items-center flex-col-reverse lg:flex-row justify-center px-1 lg:px-20 py-28 gap-10 bg-purple-100 dark:bg-dark">
					<div className="w-full lg:w-1/2 space-y-8 px-6">
						<h2 className="text-6xl pb-2 font-bold gradient bg-clip-text text-transparent">
							Tiger Style Martial Art
						</h2>
						<p
							style={{ textShadow: "0px 0px 1px purple" }}
							className="text-lg tracking-wide text-purple-600"
						>
							Tiger style martial art, inspired by the movements
							of a tiger, is characterized by its powerful,
							dynamic, and ferocious nature. It emphasizes
							strength, agility, and explosive power,
							incorporating clawing, striking, and pouncing
							techniques. Practitioners cultivate discipline,
							mental focus, and the predatory instincts of the
							tiger to dominate in combat.
						</p>
						<button className="tracking-widest rounded-full text-lg px-6 btn btn-outline border-2 hover:bg-purple-600 border-purple-600 hover:border-purple-600 text-purple-600">
							Join Now
						</button>
					</div>
					<div className="rounded-full border-[1rem] border-purple-300 overflow-hidden m-0">
						<div className="rounded-full border-[1rem] border-purple-500 overflow-hidden">
							<div className="max-w-[25rem] max-h-[25rem] min-w-[12rem] min-h-[12rem] rounded-full border-[1rem] border-purple-800 overflow-hidden">
								<img
									className="object-cover object-top h-full w-full"
									src={bannerImg2}
									alt="banner image 1"
								/>
							</div>
						</div>
					</div>
				</div>

                {/* Slider 3 */}
				<div className="flex items-center flex-col-reverse lg:flex-row justify-center px-1 lg:px-20 py-28 gap-10 bg-purple-100 dark:bg-dark">
					<div className="w-full lg:w-1/2 space-y-8 px-6">
						<h2 className="text-6xl pb-2 font-bold gradient bg-clip-text text-transparent">
							Spinning Crescent Kick
						</h2>
						<p
							style={{ textShadow: "0px 0px 1px purple" }}
							className="text-lg tracking-wide text-purple-600"
						>
							The Spinning Crescent Kick is a dynamic and
							acrobatic kicking technique used in various martial
							arts styles. It involves rotating the body 180
							degrees while executing a sweeping crescent kick in
							an upward or horizontal arc. This high-impact kick
							requires excellent balance, flexibility, timing, and
							coordination to deliver powerful strikes and
							surprise opponents with its rotational motion.
						</p>
						<button className="tracking-widest rounded-full text-lg px-6 btn btn-outline border-2 hover:bg-purple-600 border-purple-600 hover:border-purple-600 text-purple-600">
							Join Now
						</button>
					</div>
					<div className="rounded-full border-[1rem] border-purple-300 overflow-hidden m-0">
						<div className="rounded-full border-[1rem] border-purple-500 overflow-hidden">
							<div className="max-w-[25rem] max-h-[25rem] min-w-[12rem] min-h-[12rem] rounded-full border-[1rem] border-purple-800 overflow-hidden">
								<img
									className="object-cover object-top h-full w-full"
									src={bannerImg3}
									alt="banner image 1"
								/>
							</div>
						</div>
					</div>
				</div>

                {/* Slider 4 */}
				<div className="flex items-center flex-col-reverse lg:flex-row justify-center px-1 lg:px-20 py-28 gap-10 bg-purple-100 dark:bg-dark">
					<div className="w-full lg:w-1/2 space-y-8 px-6">
						<h2 className="text-6xl pb-2 font-bold gradient bg-clip-text text-transparent">
							Martial art Seiken
						</h2>
						<p
							style={{ textShadow: "0px 0px 1px purple" }}
							className="text-lg tracking-wide text-purple-600"
						>
							Seiken, meaning (forefist) or (proper fist) in Japanese, refers to the fundamental punching technique used in various martial arts. It involves striking with the first two knuckles of the closed hand, aligning the wrist and forearm for maximum power and stability. Seiken strikes are precise, direct, and commonly employed in disciplines such as karate, boxing, and some forms of taekwondo. They require proper form, accuracy, and focus to generate effective punches with maximum impact.
						</p>
						<button className="tracking-widest rounded-full text-lg px-6 btn btn-outline border-2 hover:bg-purple-600 border-purple-600 hover:border-purple-600 text-purple-600">
							Join Now
						</button>
					</div>
					<div className="rounded-full border-[1rem] border-purple-300 overflow-hidden m-0">
						<div className="rounded-full border-[1rem] border-purple-500 overflow-hidden">
							<div className="max-w-[25rem] max-h-[25rem] min-w-[12rem] min-h-[12rem] rounded-full border-[1rem] border-purple-800 overflow-hidden">
								<img
									className="object-cover object-top h-full w-full"
									src={bannerImg4}
									alt="banner image 1"
								/>
							</div>
						</div>
					</div>
				</div>
			</Carousel>
		</div>
	);
};

export default Banner;
