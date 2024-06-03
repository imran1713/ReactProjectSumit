
import '../styles/global.css'
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Quiz from "./pages/Quiz.jsx";
import Result from "./pages/Result.jsx";
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
const App = () => {

	return (
		<div 
			className={'App'}
		>
			<Layout>
				<Router>
					<Routes>
						<Route
							path={'/'}
							element={<Home/>}
						/>
						<Route
							path={'/signup'}
							element={<Signup/>}
						/>
						<Route
							path={'/login'}
							element={<Login/>}
						/>
						<Route
							path={'/quiz'}
							element={<Quiz/>}
						/>
						<Route
							path={'/result'}
							element={<Result/>}
						/>
					</Routes>
				</Router>

			</Layout>
		</div>
	);
};

export default App;