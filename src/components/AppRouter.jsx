import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../pages/logIn';
import Profile from '../pages/Profile';

const routes = createBrowserRouter([
	{	
		path: '/',
		element: <Profile />
	},
	{
		path: '/profile',
		element: <Profile />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	]);

const AppRouter = () => {
  return <RouterProvider router={routes} />;
};

export default AppRouter;