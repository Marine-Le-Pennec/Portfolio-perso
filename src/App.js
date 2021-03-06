import './App.css';
import './Assets/CSS/reset.css';

// Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import pages
import Homepage from './Containers/Homepage';
import Aboutme from './Containers/Aboutme';
import Contact from './Containers/Contact';
import Skills from './Containers/Skills';
import Projects from './Containers/Projects';

// Import project pages
import Echoes from './Containers/Project-pages/ProjectEchoes';
import Formnest from './Containers/Project-pages/ProjectFormnest';
import Marvel from './Containers/Project-pages/ProjectMarvel';
import Portfolio from './Containers/Project-pages/ProjectPortfolio';

// Icones
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
	faEnvelope,
	faFileAlt,
	faHome,
	faPhoneSquareAlt,
} from '@fortawesome/free-solid-svg-icons';

library.add(
	faFileAlt,
	faHome,
	faPhoneSquareAlt,
	faEnvelope,
	faLinkedin,
	faGithub
);

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route path='/about-me'>
						<Aboutme />
					</Route>
					<Route path='/contact'>
						<Contact />
					</Route>
					<Route path='/skills'>
						<Skills />
					</Route>
					<Route path='/projects'>
						<Projects />
					</Route>
					<Route path='/echoes'>
						<Echoes />
					</Route>
					<Route path='/formnest'>
						<Formnest />
					</Route>
					<Route path='/marvel'>
						<Marvel />
					</Route>
					<Route path='/portfolio'>
						<Portfolio />
					</Route>
					<Route exact path='/'>
						<Homepage />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
