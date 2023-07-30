import React, { useEffect, useState } from 'react';
import { BiMenuAltRight, BiPhoneCall } from 'react-icons/bi';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import css from './Header.module.scss';
import { headerVariants } from '../../utils/motion';
import useHeaderShadow from '../../hooks/useHeaderShadow';

export default function Header() {
	const [menuOpened, setMenuOpened] = useState(false);
	const headerShadow = useHeaderShadow();

	useEffect(() => {
		function handleClickOutOfMenu() {
			setMenuOpened(false);
		}
		document.addEventListener('click', handleClickOutOfMenu);
		return () => {
			document.removeEventListener('click', handleClickOutOfMenu);
		};
	}, []);

	return (
		<motion.div
			initial="hidden"
			whileInView="show"
			variants={headerVariants}
			// once chỉ có hiệu ứng khi load lần đầu
			// amount: 0.25 hiệu ứng sẽ bắt đầu khi motion.div xuất hiện trong viewport > 25%
			viewport={{ once: true, amount: 0.25 }}
			className={clsx(css.wrapper, 'paddings bg-primary')}
			style={{ boxShadow: headerShadow }}
		>
			<div className={clsx(css.container, 'flexCenter innerWidth')}>
				<div className={clsx(css.name)}>HMHuong</div>

				<ul
					className={clsx(css.menu, 'flexCenter', {
						[css.menuNotOpened]: !menuOpened,
					})}
				>
					<li>
						<a href="#expertise">SERVICES</a>
					</li>
					<li>
						<a href="#work">Experience</a>
					</li>
					<li>
						<a href="#portfolio">Portfolio</a>
					</li>
					<li>
						<a href="#people">Testimonials</a>
					</li>
					<li className={clsx(css.phone, 'flexCenter')}>
						<p>+84 787 238 967</p>
						<BiPhoneCall size={'40px'} />
					</li>
				</ul>
				<div
					className={css.menuIcon}
					onClick={(e) => {
						e.stopPropagation();
						setMenuOpened(!menuOpened);
					}}
				>
					<BiMenuAltRight size={'30px'} />
				</div>
			</div>
		</motion.div>
	);
}
