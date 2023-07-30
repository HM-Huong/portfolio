import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import css from './Hero.module.scss';
import { fadeIn, slideIn, staggerContainer } from '../../utils/motion';

export default function Hero() {
	return (
		<section className={clsx(css.wrapper, 'paddings')}>
			<motion.div
				variants={staggerContainer}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.25 }}
				className={clsx(css.container, 'innerWidth')}
			>
				{/* Upper elements */}
				<div className={clsx(css.upperElements)}>
					<motion.span
						variants={fadeIn('right', 'tween', 0.2, 1)}
						className="primaryText"
					>
						Hey There, <br /> I'm Huong.
					</motion.span>
					<motion.span
						variants={fadeIn('left', 'tween', 0.4, 1)}
						className="secondaryText"
					>
						I design beautiful simple <br /> things, And I love what i do
					</motion.span>
				</div>

				{/* Person image */}
				<motion.div
					variants={fadeIn('up', 'tween', 0.3, 1)}
					className={clsx(css.person)}
				>
					<motion.img
						variants={slideIn('up', 'tween', 0.5, 1.3)}
						src="/person.png"
						alt=""
					/>
				</motion.div>

				{/* email */}
				<a
					className={clsx(css.email)}
					href="mailto:hoangminhhuong1408@gmail.com"
				>
					hoangminhhuong1408@gmail.com
				</a>

				{/* Lower elements */}
				<div className={clsx(css.lowerElements)}>
					<motion.div
						variants={fadeIn('right', 'tween', 0.3, 1)}
						className={clsx(css.experience)}
					>
						<div className="primaryText">10</div>
						<div className="secondaryText">
							<div>Years</div>
							<div>Experience</div>
						</div>
					</motion.div>
					<motion.div
						variants={fadeIn('left', 'tween', 0.5, 1)}
						className={clsx(css.certificate)}
					>
						<img src="/certificate.png" alt="" />
						<span>CERTIFIED PROFATIONAL</span>
						<span>UI/UX DESIGNER</span>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
}
