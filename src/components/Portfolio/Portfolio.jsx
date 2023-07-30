import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import css from './Portfolio.module.scss';
import { fadeIn, staggerChildren } from '../../utils/motion';

export default function Portfolio() {
	return (
		<motion.section
			variants={staggerChildren}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
			className={clsx(css.wrapper, 'paddings')}
		>
			<a id="portfolio" className={clsx('anchor')}></a>
			<div className={clsx(css.container, 'innerWidth flexCenter')}>
				{/* Heading */}
				<div className={clsx(css.heading, 'flexCenter')}>
					<div>
						<h3 className={clsx('primaryText')}>My Latest Works</h3>
						<p style={{ marginTop: '10px' }}>
							Perfect solution for digital experience
						</p>
					</div>
					<a className={clsx('secondaryText')} href="#">
						Explore More Works
					</a>
				</div>

				{/* Show case */}
				<div className={clsx(css.showCase, 'flexCenter')}>
					<motion.img
						variants={fadeIn('up', 'tween', 0.5, 0.6)}
						src="/showCase1.png"
						alt="project"
					/>
					<motion.img
						variants={fadeIn('up', 'tween', 0.7, 0.6)}
						src="/showCase2.png"
						alt="project"
					/>
					<motion.img
						variants={fadeIn('up', 'tween', 0.9, 0.6)}
						src="/showCase3.png"
						alt="project"
					/>
				</div>
			</div>
		</motion.section>
	);
}
