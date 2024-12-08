import {Routes,Route} from 'react-router-dom';
import * as routes from './routes'
import { 
    HomePage,
    BookSessionPage,
    ContactPage,
    BookingPage
} from '../pages';
import { LayoutComponent } from '../components';

const RouterConfig = () => {
    return (
        <Routes>
            <Route element={<LayoutComponent/>}>
                <Route path={routes.HOME} element={<HomePage />} />
                <Route path={routes.CONTACT} element={<ContactPage />} />
                <Route path={routes.SESSION} element={<BookSessionPage />} />
                <Route path={routes.BOOKING} element={<BookingPage />} />
            </Route>
        </Routes>
    )
}

export default RouterConfig