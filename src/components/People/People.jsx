import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Slider from 'react-slick';

import css from './People.module.scss';
import { footerVariants, staggerChildren } from '../../utils/motion';
import { comments, sliderSettings } from '../../utils/data';

export default function People() {
	return (
		<motion.section
			variants={staggerChildren}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
			className={clsx(css.wrapper, 'paddings ')}
		>
			<motion.div
				variants={footerVariants}
				className={clsx(css.container, 'yPaddings innerWidth')}
			>
				<div className={clsx(css.heading, 'flexCenter')}>
					<h3 className={clsx('primaryText')}>People talk about us</h3>
					<p style={{ marginTop: '2rem' }}>
						I got a job that was in accordance with the salary and field of work
					</p>
					<p>The process of submitting an application was quite cosy</p>
				</div>

				{/* Slider */}
				<div className={clsx(css.comments, 'yPaddings')}>
					<Slider {...sliderSettings} className={clsx(css.slider)}>
						{comments.map((comment, i) => {
							return (
								<div key={i} className={clsx(css.comment)}>
									<img src={comment.img} alt="" />
									<p>{comment.comment}</p>

									<div className={clsx(css.line)}></div>

									<div className={clsx(css.bio)}>
										<p>{comment.name}</p>
										<p>{comment.post}</p>
									</div>
								</div>
							);
						})}
					</Slider>
				</div>
			</motion.div>
		</motion.section>
	);
}
