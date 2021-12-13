import {useAuth0} from '@auth0/auth0-react';
import Login from "../components/LoginButton"
import Logout from "../components/LogoutButton"
import Profile from '../components/Profile';
export default function (){
    const {isAuthenticated, isLoading} = useAuth0()
    if(isLoading) return <h1>warro..</h1>
    return(
        <>
      <div className="App">
      <h1> app</h1>
      { isAuthenticated ? <Logout/> : <Login/> }
      
      <Profile/>
      
    </div>
        </>
    )
}