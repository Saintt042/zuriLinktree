import ProfileCard from './pages/ProfileCard/ProfileCard';
import { Routes, Route } from 'react-router-dom';
import Layout from './component/layout/Layout';
import Contact from './pages/contact/Contact';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<ProfileCard />} />
				<Route path='contact' element={<Contact />} />
			</Route>
		</Routes>
	);
}

export default App;