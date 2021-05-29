import React,{useState} from 'react'
import axios from 'axios'

const InputForm= () => {

    const [first_name,setFirst_name]=useState("")
    const [last_name,setLast_name]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [re_password, setRe_password] = useState("")
    const [birthday,setBirthday] = useState("")
    const [errors, setErrors] = useState({})
    const [validEmail, setValidEmail] = useState(false)

    const changeFirstName = (e) =>{
        setFirst_name(e.target.value)
    }
    const changeLastName = (e) =>{
        setLast_name(e.target.value)
    }
    const changeEmail = (e) =>{
        setEmail(e.target.value)
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if ( re.test(email) ) {
            setValidEmail(false)
        }else{
            setValidEmail(true)
        }
    }
    const changePassword = (e) =>{
        setPassword(e.target.value)
    }
    const changeRe_password = (e) =>{
        setRe_password(e.target.value)
    }
    const changeBirthday = (e) =>{
        setBirthday(e.target.value)
    }
    const onSubmit = (event) =>{
        event.preventDefault()
        if(validate()){
           
      
        const user = {
            first_name: first_name,
            last_name: last_name,
            email:email,
            birthday: birthday,
            password:password
        }

        axios.post('https://momsrecipebackend.herokuapp.com/users',user)
        .then()
        
        setBirthday("")
        setEmail("")
        setFirst_name("")
        setLast_name("")
        setPassword("")
        setRe_password("")
        setErrors({})
        }      
    }
    const validate = () =>{
        let isValid = true;
        let validateError = {}
        if( typeof password != 'undefined' && typeof re_password != 'undefined'){
            if(password !== re_password){
                validateError["unmatchedPassword"] = "Confirm Password does not match"
                isValid = false
            }
        }
        if(!first_name){
            validateError["first_name"] = "Please enter your first name"
            isValid = false
        }
        if(!last_name){
            validateError["last_name"] = "Please enter your last name"
            isValid = false
        }
        if(!birthday){
            validateError["birthday"] = "Please pick your birthday"
            isValid = false
        }
        if(!email){
            validateError["email"] = "Please enter your email"
            isValid = false
        }
        if(!password){
            validateError["password"] = "Please enter password"
            isValid = false
        }
        if(!re_password){
            validateError["re_password"] = "Please enter confirm password"
            isValid = false
        }
        setErrors(validateError)
        return isValid
    }

    return (
        
    <form className = 'form-div mx-auto' onSubmit={onSubmit}>
        <label>First Name</label>
        <input 
        type='text'
        placeholder= "First Name"
        onChange= {changeFirstName}
        value = {first_name}
        className = 'form-group form-control  m-2 px-2'
        />
        {errors.first_name? 
        <div className="text-danger  m-2">{errors.first_name}</div>
        :<div></div>
        }
         <label>Last Name</label>
         <input 
        type='text'
        placeholder= "Last Name "
        onChange={changeLastName}
        value = {last_name}
        className = 'form-group form-control m-2 px-2'
        />
        {errors.last_name? 
        <div className="text-danger  m-2">{errors.last_name}</div>
        :<div></div>
        }
         <label>Birthday</label>
        <input 
        type='date'
        placeholder= "Birthday"
        onChange={changeBirthday}
        value = {birthday}
        className = 'form-group form-control m-2 px-2'
        />
         {errors.birthday? 
        <div className="text-danger  m-2">{errors.birthday}</div>
        :<div></div>
        }
         <label>Email</label>
         <input 
        type='email'
        placeholder= "Email"
        onChange={changeEmail}
        value = {email}
        className = 'form-group form-control m-2 px-2'
        />
        {validEmail?<div className="text-danger  m-2">Please use correct email format</div>
        :
        <div></div>
        }
         {errors.email? 
        <div className="text-danger  m-2">{errors.email}</div>
        :<div></div>
        }
         <label>Password</label>
         <input 
        type='password'
        placeholder= "Password"
        onChange= {changePassword}
        value = {password}
        className = 'form-group w-50 px-2 m-2'
        />
         {errors.password? 
        <div className="text-danger  m-2">{errors.password}</div>
        :<div></div>
        }
         <label>Confirm Password</label>
         <input 
        type='password'
        placeholder= "Retype password"
        onChange={changeRe_password}
        value = {re_password}
        className = 'form-group w-50 m-2 px-2'
        />
         {errors.re_password? 
        <div className="text-danger  m-2">{errors.re_password}</div>
        :<div></div>
        }
         {errors.unmatchedPassword? 
        <div className="text-danger  m-2">{errors.unmatchedPassword}</div>
        :<div></div>
        }
        <br></br>
        <input type = 'submit' className='btn btn-outline-primary active' value='Sign Up' />
    </form>
    
    )
}

export default InputForm
