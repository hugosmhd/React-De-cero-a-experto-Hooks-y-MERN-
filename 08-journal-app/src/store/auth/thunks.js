import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers"
import { clearNotesLogout } from "../journal"
import { checkingCredentials, login, logout } from "./"

export const checkingAuthentication = (email, password) => {
    return async(dispatch) => {
        dispatch(checkingCredentials())
    }
}

export const startGoogleSignIn = () => {
    return async(dispatch) => {
        dispatch(checkingCredentials());

        const result = await signInWithGoogle();
        // console.log({ result });
        if (!result.ok) return dispatch(logout(result.errorMessage));
        // delete result.ok;
        dispatch(login(result));
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async(dispatch) => {
        dispatch(checkingAuthentication());

        // const resp = await registerUserWithEmailPassword({ email, password, displayName });
        // console.log(resp);
        const result = await registerUserWithEmailPassword({ email, password, displayName });
        const errorMessage = result.errorMessage;
        if (!result.ok) return dispatch(logout({errorMessage}));

        dispatch(login(result))
    }
}

export const startLoginWithEmailPassword = ({email, password}) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());

        const result = await loginWithEmailPassword({ email, password });
        console.log(result);

        const errorMessage = result.errorMessage;
        if (!result.ok) return dispatch(logout({errorMessage}));
        dispatch(login(result))
    }
}

export const startLogout = () => {
    return async(dispatch) => {
        await logoutFirebase();
        dispatch(clearNotesLogout());
        dispatch(logout({}));
    }
}