import NavBar from '../../Components/Navigation/nav';
import {useNavigate} from 'react-router-dom'


const Withdraw = ()=> {

	  const navigate = useNavigate()
 

 const viewStatus= () => navigate('/withdrawal-status');



	return (
		<div>
		<NavBar/>
		


		      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0 light-blue ">Withdrawal</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6 light-blue" htmlFor="name">Full Name</label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100"
                  type="text"
                  name="name"
                  id="name"
                 
                />
              </div>
                  <div className="mt3">
                <label className="db fw6 lh-copy f6 light-blue" htmlFor="name">Account Number</label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100"
                  type="text"
                  name="name"
                  id="name"
                 
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6 light-blue" htmlFor="email-address">Amount</label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100"
                  name="email-address"
                  id="email-address"
                
                />
              </div>
              
            </fieldset>
            <div className="" >
              <input onClick = {viewStatus}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib light-blue"
                type="submit"
                value="Initiate Withdrawal"
              />

            
           
            </div>
           
            </div>
        </main>
      </article>

		</div>

		)
}

export default Withdraw;