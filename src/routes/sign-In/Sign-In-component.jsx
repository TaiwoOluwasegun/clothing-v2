import {signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase.utils'

const SignIn = () => {

    const logGoogleUser = async()=>{
         const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    }
 return(
     <div>
         <h1>sign in</h1>
         <button onClick={logGoogleUser}>Google Sign-Up</button>
     </div>
 )
}

export default SignIn