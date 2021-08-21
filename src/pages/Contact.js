import '../styles/Contact.css'
import {useRef, useState} from 'react'
import {FaThumbsUp, FaWindowClose} from 'react-icons/fa'

const Contact = () => {
    const nameInputRef = useRef()
    const emailInputRef = useRef()
    const messageInputRef = useRef()
    const [inputName, setInputName] = useState(false)
    const [inputEmail, setInputEmail] = useState(false)
    const  [inputMsg, setInputMsg] = useState(false)
    const [showMsg, setShowMsg] = useState(false)

    const submitFormInput = (e) => {
        e.preventDefault();
        const nameInput = nameInputRef.current.value;
        const emailInput = emailInputRef.current.value;
        const messageInput = messageInputRef.current.value;

        if(nameInput === '' || emailInput === '' || messageInput === '' ){
            if(nameInput === ''){
                setInputName(true) 
            }
            
            if(emailInput === ''){
                setInputEmail(true) 
            }
            if(messageInput === ''){
                setInputMsg(true) 
            }
        }
        else if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailInput)){
            setInputEmail(true) 
        }
        else{
            const details = {
                name: nameInput,
                email: emailInput,
                message: messageInput
            }
            fetch('https://portfolio-2f480-default-rtdb.firebaseio.com/message.json', {
                method: 'POST',
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(details)
            })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setShowMsg(true)
                nameInputRef.current.value = ''
                emailInputRef.current.value = ''
                messageInputRef.current.value = ''
            })
        }

       
    }

    return (
        <div className='contact-page'>
               {showMsg && <div className="dark-bg"></div>}
               {showMsg && <div className="success-msg-box">
                   < FaWindowClose className= 'cancel-icon' onClick={() => setShowMsg(false)} />
                    <h3 className="title">Yeppeee!! <FaThumbsUp className= 'icon' /> </h3>
                    <p className="text">Your message was successfully sent to Timi, will get a feedback in your mail. Thanks</p>
                </div>}
            <div className="contact-section">
                <div className="title">Contact me</div>
                <form action="" className="form" onSubmit ={submitFormInput}>
                    <div className="form-group">
                        <label htmlFor="full-name" className="form-label">full name</label>
                        <input type="text" onChange = {() => setInputName(false)} id= 'full-name' ref ={nameInputRef} className={`form-input ${inputName && 'alert-input'}`}/>
                        {inputName && <div className="form-error-msg"><span>please input name !!!</span></div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">email</label>
                        <input type="email" onChange = {() => setInputEmail(false)} id = 'email' ref ={emailInputRef} className={`form-input ${inputEmail && 'alert-input'}`} />
                        {inputEmail && <div className="form-error-msg"><span>please input email !!!</span></div>}
                    </div>
                    <div className="form-group">
                        <textarea name="" onChange = {() => setInputMsg(false)} id="" cols="30" rows="10" ref ={messageInputRef} placeholder = 'send message'className={`form-message ${inputMsg && 'alert-input'}`}></textarea>
                        {inputMsg && <div className="form-error-msg"><span>please input message !!!</span></div>}
                    </div>
                    <button className="form-btn" ><input className='submit-btn' type="submit" value= 'submit'/></button>
                </form>
            </div>
        </div>
    )
}

export default Contact
