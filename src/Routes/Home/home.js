import {useNavigate} from 'react-router-dom'

const Home = ()=> {

	const navigate = useNavigate()
 

 const goToRoute = (route) => navigate(`/${route}`);




	return (
		<div>
		<h1>Bank Teller App</h1>
		<button onClick={() => goToRoute('')} >Sign Out</button>
			<div class="vh-100 flex justify-center items-center">
			<button className="f3 link dim br3 ph3 pv2 mb2 dib white bg-blue" onClick={() => goToRoute('deposit')} >Deposit</button>
			<button className="f3 link dim br3 ph3 pv2 mb2 dib white bg-blue" onClick={() => goToRoute('withdraw')} > Withdraw</button>
			<button className="f3 link dim br3 ph3 pv2 mb2 dib white bg-blue" onClick={() => goToRoute('register')}>Register Customer</button>
			<button className="f3 link dim br3 ph3 pv2 mb2 dib white bg-blue" onClick={() => goToRoute('report')}>View Transaction Report</button>

			</div>
		</div>

		)
}

export default Home;



