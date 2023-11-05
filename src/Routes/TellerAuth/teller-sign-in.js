import {Link,useNavigate} from 'react-router-dom'

const TellerSignIn = ()=> {

    const navigate = useNavigate()
 

 const goHome = () => navigate('/home');



	return (
		<div>

	


		<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0 light-blue ">TELLER LOGIN</legend>

           
              <div className="mt3">
                <label className="db fw6 lh-copy f6 light-blue" htmlFor="name">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100"
                  type="text"
                  name="name"
                  id="name"
                 
                />
              </div>


              <div className="mt3">
                <label className="db fw6 lh-copy f6 light-blue" htmlFor="email-address">Password</label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100"
                  type="password"
                  name="password"
                  id="email-address"
                
                />
              </div>
        
            </fieldset>
            <div className="" >
              <input onClick = {goHome}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib light-blue"
                type="submit"
                value="Log In"
              />

              <Link to='/teller-sign-up'><span> Sign Up </span></Link>

            
           
            </div>
           
            </div>
        </main>
      </article>

		</div>

		)
}

export default TellerSignIn;