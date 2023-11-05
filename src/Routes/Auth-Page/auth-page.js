import {useNavigate} from 'react-router-dom'

const AuthPage = ()=> {

	const navigate = useNavigate()
 

 const goToRoute = (route) => navigate(`/${route}`);




	return (
		<div>
		<h1 class="tc">Hi There, Welcome to The Bank Teller App</h1>
			<div class="vh-100 flex justify-center items-center">
			<button className="f3 link dim br3 ph3 pv2 mb2 dib white bg-blue" onClick={() => goToRoute('teller-sign-up')} >Create A Teller Account</button>
			<button className="f3 link dim br3 ph3 pv2 mb2 dib white bg-blue" onClick={() => goToRoute('teller-sign-in')} > Sign In To Your Teller Account</button>
		

			</div>
		</div>

		)
}

export default AuthPage;



