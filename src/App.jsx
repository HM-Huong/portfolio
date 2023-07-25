import clsx from 'clsx';

import Header from './components/Header/Header';
import css from './styles/app.module.scss'

const App = () => {
	return (
		<div className={clsx(css.container, "bg-primary")}>
			<Header/>
		</div>
	);
};

export default App;
