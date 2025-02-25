import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/logIn';
import { AuthProvider } from './hoc/AuthProvide';
import AppRouter from './components/AppRouter';

function App() {
	return (
	<>
		<AppRouter />
	</>
	)
}

export default App
