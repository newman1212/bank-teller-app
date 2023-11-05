import NavBar from '../../Components/Navigation/nav';

const Register = ()=> {


	return (
		<div>
		<NavBar/>
	


		      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0 light-blue ">Registration</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6 light-blue" htmlFor="name">Full Name</label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100"
                  type="text"
                  name="name"
                 
                 
                />
              </div>

                  <div className="mt3">
                <label className="db fw6 lh-copy f6 light-blue" htmlFor="name">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent  w-100"
                  type="email"
                  name="email"
                  
                 
                />
              </div>


              <div className="mt3">
                <label className="db fw6 lh-copy f6 light-blue" htmlFor="email-address">Phone Number</label>
                <input
                  className="pa2 input-reset ba bg-transparent  w-100"
                  type="tel"
                 />
              </div>
                  <div className="mt3">
                <label className="db fw6 lh-copy f6 light-blue" htmlFor="email-address">Address</label>
                <input
                  className="pa2 input-reset ba bg-transparent  w-100"
                  type="text"
                  name="address"
                                
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy  light-blue f6" htmlFor="password">Account Number</label>
                <input
                  className="b pa2 input-reset ba bg-transparent  w-100"
                  type="text"
             
                
                />
              </div>
            </fieldset>
            <div className="" >
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib light-blue"
                type="submit"
                value="Register"
              />

            
           
            </div>
            </div>
        </main>
      </article>

		</div>

		)
}

export default Register;