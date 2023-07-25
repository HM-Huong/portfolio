import React, { useState } from 'react';
import { BiMenuAltRight, BiPhoneCall } from 'react-icons/bi';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import css from './Header.module.scss';
import { getMenuStyles, headerVariants } from '../../utils/motion';
import useHeaderShadow from '../../hooks/useHeaderShadow';

export default function Header() {
	const [menuOpened, setMenuOpened] = useState(false );
	const headerShadow = useHeaderShadow();

	return (
		<motion.div
			initial="hidden"
			whileInView="show"
			variants={headerVariants}
			// once chỉ có hiệu ứng khi load lần đầu
			// amount: 0.25 hiệu ứng sẽ bắt đầu khi motion.div xuất hiện trong viewport > 25%
			viewport={{once: false, amount: 0.25}} 
			className={clsx(css.wrapper, 'paddings')}
			style={{boxShadow: headerShadow}}
		>
			<div className={clsx(css.container, 'flexCenter innerWidth')}>
				<div className={clsx(css.name)}>Binjan</div>

				<ul className={clsx(css.menu, 'flexCenter')} style={getMenuStyles(menuOpened)}>
					<li>
						<a href="">SERVICES</a>
					</li>
					<li>
						<a href="">Experience</a>
					</li>
					<li>
						<a href="">Portfolio</a>
					</li>
					<li>
						<a href="">Testimonials</a>
					</li>
					<li className={clsx(css.phone, 'flexCenter')}>
						<p>+001 (313) 345 678</p>
						<BiPhoneCall size={'40px'} />
					</li>
				</ul>
				<div className={css.menuIcon}
				onClick={() => setMenuOpened(!menuOpened)}
				>
					<BiMenuAltRight size={"30px"}/>
				</div>
			</div>
		</motion.div>
	);
}
