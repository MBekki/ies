import { createBrowserRouter } from 'react-router';
import Layout from '../layout';
import Home from '../pages/Home';
import CardId from '../components/CardId';

const AppRouter = () => {
    const routes = [
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: '/category/:id',
                    element: <CardId />,
                },
            ],
        },
    ];

    return createBrowserRouter(routes);
};
export default AppRouter;
