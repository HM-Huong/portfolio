import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import css from './Footer.module.scss';
import { footerVariants, staggerChildren } from '../../utils/motion';

export default function Footer() {
	return (
		<motion.section
			variants={staggerChildren}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
			className={clsx(css.wrapper, 'paddings')}
		>
			<motion.div
				variants={footerVariants}
				className={clsx(css.container, 'innerWidth yPaddings flexCenter')}
			>
				{/* left side */}
				<div className={clsx(css.left)}>
					<p className={clsx('primaryText')}>
						Let's make something <br /> amazing together.
					</p>
					<p className={clsx('primaryText')}>
						Start by <a href="mailto:hoangminhhuong1408@gmail.com">saying hi</a>
					</p>
				</div>

				{/* right side */}
				<div className={clsx(css.right)}>
					<div className={clsx(css.info)}>
						<p className={clsx('secondaryText')}>Information</p>
						<p>Chiến Thắng, Hà Đông, Hà Nội</p>
					</div>

					<ul className={css.menu}>
						<li>Services</li>
						<li>Works</li>
						<li>Notes</li>
						<li>Experience</li>
					</ul>
				</div>
			</motion.div>
		</motion.section>
	);
}
