class testElementos{
     
    campoPrimeiroNome = () => {return ':nth-child(1) > :nth-child(2) > .form-control'}
    campoSegundoNome = () => {return ':nth-child(1) > :nth-child(3) > .form-control'}
    adress = () => {return '.col-md-8 > .form-control'}
    emailAndress = () => {return '#eid > .form-control'}
    phone = () =>{return ':nth-child(4) > .col-md-4 > .form-control'}
    botaoRefresh = () =>{return '#Button1'}
    genderMale = () =>{return "[type='radio']"}
    hobbies = () => {return '#checkbox2'}
    languagens = () =>{return 'div#msdd'}
    skills = () => {return '#Skills'}
    country = () => {return '#countries'}
    selectyCountry = () =>{return '.select2-selection'}
    year = () =>{ return '#yearbox'} // year date of birth
    month = () => {return ':nth-child(11) > :nth-child(3) > .form-control'} // The month date of birth
    day = () =>{ return '#daybox'} // The day date of birth  
    password = () => {return '#firstpassword'}
    passwordConfirm = () => {return '#secondpassword'}
}


export default testElementos;