import { useAuth0 } from "@auth0/auth0-react";
const LogoutButton = () => {
    const {logout} = useAuth0()
    return (
        <button className="btn" onClick={() => logout()} >
                logout
        </button>
    )
}
export default LogoutButton