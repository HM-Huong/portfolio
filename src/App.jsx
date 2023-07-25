import clsx from 'clsx';

import Header from './components/Header/Header';
import css from './styles/app.module.scss';
import Hero from './components/Hero/Hero';

const App = () => {
	return (
		<div className={clsx(css.container, 'bg-primary')}>
			<Header />
			<Hero />
		</div>
	);
};

export default App;
