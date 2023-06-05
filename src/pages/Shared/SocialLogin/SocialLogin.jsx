import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";


const SocialLogin = () => {
    const { loginWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        loginWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('https://bistro-boss-server-swart-one.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });

                    })
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="text-center mb-5">
            <div className="divider"></div>
            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-error btn-outline">
                <FaGoogle></FaGoogle>
            </button>
        </div>
    );
};

export default SocialLogin;