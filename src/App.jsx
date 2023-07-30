import clsx from 'clsx';

import Header from './components/Header/Header';
import css from './styles/app.module.scss';
import Hero from './components/Hero/Hero';
import Expertise from './components/Expertise/Expertise';
import Work from './components/Work/Work';
import Portfolio from './components/Portfolio/Portfolio';

const App = () => {
	return (
		<div className={clsx(css.container, 'bg-primary')}>
			<Header />
			<Hero />
			<Expertise/>
			<Work />
			<Portfolio />
		</div>
	);
};

export default App;
