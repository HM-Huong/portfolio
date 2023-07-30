import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import css from './Work.module.scss';
import {
	fadeIn,
	staggerChildren,
	textVariant2,
	zoomIn,
} from '../../utils/motion';
import { workExp } from '../../utils/data';

export default function Work() {
	return (
		<motion.section
			variants={staggerChildren}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
			className={clsx(css.wrapper, 'paddings')}
		>
			<a id="work" className={clsx('anchor')}></a>
			<div className={clsx(css.container, 'flexCenter innerWidth')}>
				<h2 className={clsx('primaryText yPaddings')}>My Work Experience</h2>
				<div className={clsx(css.experiences, 'flexCenter')}>
					{workExp.map((exp, i) => {
						return (
							<motion.div
								key={i}
								className={clsx(css.exp, 'flexCenter')}
								variants={textVariant2}
							>
								<div className={clsx(css.post)}>
									<h3>{exp.place}</h3>
									<p>{exp.tenure}</p>
								</div>
								<div className={clsx(css.role)}>
									<h3>{exp.role}</h3>
									<p>{exp.detail}</p>
								</div>
							</motion.div>
						);
					})}
					<motion.div variants={zoomIn(1, 1)} className={clsx(css.progressBar)}>
						<motion.div
							variants={fadeIn('down', 'tween', 1.5, 1.5)}
							className={clsx(css.line)}
						></motion.div>
						<div>
							<div
								className={clsx(css.circle)}
								style={{ background: '#286F6C' }}
							></div>
						</div>
						<div>
							<div
								className={clsx(css.circle)}
								style={{ background: '#F2704E' }}
							></div>
						</div>
						<div>
							<div
								className={clsx(css.circle)}
								style={{ background: '#EEC048' }}
							></div>
						</div>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
}
