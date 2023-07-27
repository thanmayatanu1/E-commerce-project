import {Link} from 'react-router-dom';
import {useContext} from 'react';
import AuthContext from '../Authentication/AuthContext';
import { Button } from 'react-bootstrap';


const MainNavigation = () => {
    const authCtx = useContext(AuthContext);
    const isLoggedIn= authCtx.isLoggedIn;

    return (
        <header>
        <Link to='./'>
        <div>React Auth</div>
        </Link>
        <nav>
            <ul>
                {!isLoggedIn && (
                <li>
                    <Link to='/auth'>Login</Link>
                </li>
                )}
                {isLoggedIn && (
                <li>
                    <Link to='/profile'>Profile</Link>
                </li>
                 )}
                 {isLoggedIn && (
                 <li>
                    <Button>Logout</Button>
                </li>
                )}
            </ul>
        </nav>
        </header>
    )
}
export default MainNavigation;