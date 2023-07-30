import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import css from './Expertise.module.scss';
import { WhatDoIHelp, projectExperience } from '../../utils/data';
import { fadeIn, staggerContainer, textVariant } from '../../utils/motion';

export default function Expertise() {
	return (
		<motion.section
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
			className={clsx(css.wrapper)}
		>
			<a id="expertise" className={clsx('anchor')}></a>
			<div
				className={clsx(
					css.container,
					'paddings yPadding flexCenter innerWidth'
				)}
			>
				<div className={clsx(css.leftSide)}>
					{projectExperience.map((exp, idx) => {
						return (
							<motion.div
								variants={fadeIn('right', 'tween', (idx + 1) * 0.2, 1)}
								className={clsx(css.exp)}
								key={idx}
							>
								<div
									className={clsx('flexCenter')}
									style={{ backgroundColor: exp.bg }}
								>
									<exp.icon size={25} color="white" />
								</div>
								<div>
									<span>{exp.name}</span>
									<span className="secondaryText">{exp.projects} Projects</span>
								</div>
							</motion.div>
						);
					})}
				</div>
				<motion.div variants={textVariant(0.5)} className={clsx(css.rightSide)}>
					<h3 className="primaryText">What do I help?</h3>
					{WhatDoIHelp.map((paragraph, idx) => {
						return (
							<p key={idx} className="secondaryText">
								{paragraph}
							</p>
						);
					})}
					<div className={clsx(css.stats, 'flexCenter')}>
						<div className={clsx(css.stat, 'flexCenter')}>
							<span className="primaryText">285+</span>
							<span className="secondaryText">Project Completed</span>
						</div>
						<div className={clsx(css.stat, 'flexCenter')}>
							<span className="primaryText">190+</span>
							<span className="secondaryText">Happy Clients</span>
						</div>
					</div>
				</motion.div>
			</div>
		</motion.section>
	);
}
