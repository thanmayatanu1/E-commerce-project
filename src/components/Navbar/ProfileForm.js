import {useRef, useContext} from 'react';
import AuthContext from '../Authentication/AuthContext';
import {useHistory} from 'react-router-dom';

const ProfileForm = () => {
    const history = useHistory();
    const newPasswordInputRef = useRef();
    const authCtx = useContext(AuthContext);

    constsubmitHandler = (event) => {
        event.preventDefault();

        const enteredNewPassword = newPasswordInputRef.current.value;

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCrPiMlfXdXKQWJ8LcnF_RA6hTW6qt20gs', {
            method: 'POST',
            body: JSON.stringify({
                idToken: authCtx.token,
                password: enteredNewPassword,
                returnSecureToken:false
            }),
            headers: {
              'Content-type': 'application/json'  
            }
        }).then(res => {
            // asumption always successful
            history.replace('/');
        });
        

    };

    return (
        <form>
            <div onSubmit={submitHandler}>
                <label htmlFor='new-password'>New Password</label>
                <input type='password' id='new-password' minLength="7" ref={newPasswordInputRef} />
            </div>
            <div >
                <label htmlFor='new-password'>Change Password</label>
                <input type='password' id='new-password' ref={newPasswordInputRef} />
            </div>
        </form>
    )
}
export default ProfileForm;