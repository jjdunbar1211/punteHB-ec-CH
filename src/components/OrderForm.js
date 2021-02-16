import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// dsp vemos 
/* const ValidationMessage = props => {
    if(!props.valid) {
        return(
        <div className="alert-danger" role="alert">{props.message}</div>
        )
    }
    return null;
} */

const OrderForm = ({fnes}) => {

    const [firstName, setFirstName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [emailConfirm, setEmailConfirm] =useState('')
    const [errorMsg, setErrorMsg] = useState({})

    const [firstNameValid, setFirstNameValid] = useState(false)
    const [phoneValid, setPhoneValid] = useState(false)
    const [emailValid, setEmailValid] = useState(false)
    const [emailConfirmValid, setEmailConfirmValid] = useState(false)
    //const [formValid, setFormValid] = useState()
    
    // fn para validar el formulario completo
    /*  const validateForm = () => {

        setFormValid(firstNameValid && phoneValid && emailValid && emailConfirmValid)
        
    }
     */

    // fn para validad firstName
    const validateFirstName = (firstNameInput) => {
        
        let firstNameOK = true;

        if (firstNameInput.length < 6 || firstNameInput.length > 15) {
            firstNameOK = false;
            setErrorMsg({...errorMsg, firstName: "Nombre debe tener entre 6 y 15 caracteres"})
            console.log(errorMsg)
        }

        fnes.setName(firstNameInput)
        setFirstNameValid(firstNameOK) 
         
        //this.setState({usernameValid, errorMsg}, this.validateForm);
    }

        // fn para validad el celular
        const validatePhone = (phoneInput) => {

            let phoneOK = true;
    
            if (!/^[\d]{2}[-]*([\d]{4}[-]*){2}$/.test(phoneInput)) {
                phoneOK = false;
                setErrorMsg({...errorMsg, phone: "Formato de teléfono celular no válido. Formato: xx-xxxx-xxxx"})
            }
            
            fnes.setPhone(phoneInput)
            setPhoneValid(phoneOK)
            //this.setState({emailValid, errorMsg}, this.validateForm);
        }

    // fn para validad el email
    const validateEmail = (emailInput) => {

        let emailOK = true;

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput)) {
            emailOK = false;
            setErrorMsg({...errorMsg, email: "Formato de email incorrecto"})
        }

        setEmailValid(emailOK)
        //this.setState({emailValid, errorMsg}, this.validateForm);
    }

    // fn para validad que los emails ingresados coincidan
    const validateEmailConfirm = (email2Input) => {

        let emailConfirmOK = true;

        if (email !== email2Input) {
            emailConfirmOK = false;
            setErrorMsg({...errorMsg, emailConfirm: "Los emails ingresados no coinciden"})
        }

        fnes.setEmail(email2Input)
        setEmailConfirmValid(emailConfirmOK)
        //this.setState({ passwordConfirmValid, errorMsg}, this.validateForm);
    }

    // fn para limpiar el formulario
    const resetForm = (evt) => {
        evt.preventDefault()
        setFirstName('')
        setPhone('')
        setEmail('')
        setEmailConfirm('')
        setFirstNameValid(false)
        setPhoneValid(false)
        setEmailValid(false)
        setEmailConfirmValid(false)

    }

    return (
        <div>
            <form >
                {console.log('testeando ' + firstNameValid && phoneValid && emailValid && emailConfirmValid)}
                <div className="flex justify-center mt-4 ">
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                        {/* firstName */}
                        <div className="mb-4">
                            <label htmlFor="nombre" className="block text-grey-darker text-sm font-bold mb-2">Nombre</label>
                            <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="nombre" value={firstName}
                                onChange={ evt => { setFirstName(evt.target.value)
                                                    validateFirstName(evt.target.value) }
                                }/>
                            { !(firstNameValid) ? <span className="text-sm font-semibold text-red-600"> {errorMsg.firstName} </span> : <></>}
                        </div>
                        {/* phone */}
                        <div className="mb-4">
                            <label htmlFor="telefono" className="block text-grey-darker text-sm font-bold mb-2">Celular</label>
                            <input type="tel" className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="telefono" value={phone}
                                onChange={ evt => { setPhone(evt.target.value)
                                                    validatePhone(evt.target.value) }
                                }/>
                           { !(phoneValid) ? <span className="text-sm font-semibold text-red-600"> {errorMsg.phone} </span> : <></>}
                        </div>
                        {/* email */}
                        <div className="mb-4">
                            <label htmlFor="correo" className="block text-grey-darker text-sm font-bold mb-2">Email</label>
                            <input type="email" className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="correo" value={email}
                                onChange={ evt => { setEmail(evt.target.value)
                                                    validateEmail(evt.target.value) }
                                }/>
                            { !(emailValid) ? <span className="text-sm font-semibold text-red-600"> {errorMsg.email} </span> : <></>}
                        </div>
                        {/* confirm email */}
                        <div className="mb-4">
                            <label htmlFor="correo2" className="block text-grey-darker text-sm font-bold mb-2">Confirmar email</label>
                            <input type="email" className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="correo2" value={emailConfirm}
                                onChange={ evt => { setEmailConfirm(evt.target.value)
                                                    validateEmailConfirm(evt.target.value)}
                                }/>
                            { !(emailConfirmValid) ? <span className="text-sm font-semibold text-red-600"> {errorMsg.emailConfirm} </span> : <></>}
                        </div>
                        
                        {/* buttons */}
                        <div className="flex  ">
                            <Link to="/" >       
                                <button type="submit" disabled={!(firstNameValid && phoneValid && emailValid && emailConfirmValid)} className={ !(firstNameValid && phoneValid && emailValid && emailConfirmValid) ? "btn1" : "btn2"} 
                                        onClick={() => {
                                            fnes.submitOrder()
                                        }} >
                                  Click aquí para terminar !
                                </button>
                            </Link>
                            <button className="py-2 px-4 ml-2 rounded font-bold text-gray-800 border-2 border-gray-800 hover:text-white hover:shadow-md hover:bg-gray-800 hover:border-gray-800  transition-all ease-out duration-500 inline-flex items-center" 
                                        onClick={resetForm} >
                                  Resetear 
                            </button>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    )

}

export default OrderForm


// py-2 px-4 rounded text-pink-400 font-bold  border-2 border-pink-400 hover:text-white hover:bg-pink-400 hover:shadow-md transition-all ease-out duration-500 inline-flex items-center