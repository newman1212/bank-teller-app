import {Link,useNavigate} from 'react-router-dom';
import { useState } from 'react';



const defaultFormFields = {

fullName :'',
email :'',
password :'',
}


const  TellerSignUp = ()=> {



const [formFields,setFormFields] = useState(defaultFormFields);
const {fullName,email,password} = formFields;



const navigate = useNavigate()
const goHome = () => navigate('/home');


const handleChange =(event) =>{
      const {name,value} = event.target;
      setFormFields({...formFields,[name]:value})  


}





  const onSubmitRegister = () => {
    fetch('http://localhost:3001/register-teller',{
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: email,
        password:password,
        name: fullName
      })
    })
      .then(response => response.json())
      .then(user=> console.log(user , 'SERVER RESPONSE'))
      .then(user=> {if (user){goHome()}
    })

    }
  
  

console.log(formFields,'FORMFIELDS')








	return (
		<div>
	
	


		<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0 light-blue ">CREATE TELLER ACCOUNT</legend>

              <div className="mt3">
                <label className="db fw6 lh-copy f6 light-blue" htmlFor="name">Full Name</label>
                <input
                  onChange={handleChange}
                  value = {fullName} 
                  className="pa2 input-reset ba bg-transparent w-100"
                  type="text"
                  name="fullName"
                  id="name"
                 
                />
              </div>

              <div className="mt3">
                <label className="db fw6 lh-copy f6 light-blue" htmlFor="name">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100"
                  onChange={handleChange}
                  type="email"
                  name="email"
                  value={email}
                 
                />
              </div>


              <div className="mt3">
                <label className="db fw6 lh-copy f6 light-blue" htmlFor="email-address">Password</label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100"
                  onChange={handleChange}
                  type="password"
                  name="password"
                  value={password}
                
                
                />
              </div>
        
            </fieldset>
            <div className="" >
              <input onClick = {onSubmitRegister}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib light-blue"
                type="submit"
                value="Create Account"
              />

               <Link to='/teller-sign-in'><span> Sign In </span></Link>
            
           
            </div>
           
            </div>
        </main>
      </article>

		</div>

		)
}

export default TellerSignUp;