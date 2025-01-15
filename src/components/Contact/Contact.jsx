import React, {useState,useRef,useEffect} from "react";
import './Contact.css';
import Button from '../Button/Button'
import { validateEmail, validateSubject } from "../../utils/validators";

const Contact = () => {
        const [subject, setSubject] = useState('');
        const [email, setEmail] = useState('');
        const [textArea, settextArea] = useState('');
        const [errors, setErrors] = useState({});
        const inputSubjectRef = useRef(null)

        const handleChangeInputText = (event) => {
            if(validateSubject(event.target.value)){
                setErrors({
                    ...errors,
                    subject: null,
                })
                setSubject(event.target.value)
            }else{
                setErrors({
                    ...errors,
                    subject: 'Subject Must more than 8 char'
                })
            }
        }

        const handleChangeInputEmail = (event) => {
            if(validateEmail(event.target.value)){
                setErrors({
                    ...errors,
                    email: null,
                })
                setEmail(event.target.value)
            }else{
                setErrors({
                    ...errors,
                    email: 'email is not correct'
                })
            }
        }
        const handleChangeInputTextArea = (event) => {
            settextArea(event.target.value)
        }
        const handleSubmit = () => {
            console.log("subject",subject)
            console.log("email",email)
            console.log("textArea",textArea)
        }
        useEffect(()=>{
            inputSubjectRef.current.focus()
        }, [])
        return (
        <div className="contact">
            <div className="form-contact">
                <input ref={inputSubjectRef} onChange={handleChangeInputText} type="text" placeholder="subject" className="input-element"/>
                {errors.subject && <span>{errors.subject}</span>}
                <input onChange={handleChangeInputEmail} type="email" placeholder="email" className="input-element"/>
                {errors.email && <span>{errors.email}</span>}
                <textarea onChange={handleChangeInputTextArea}>
                    Your request here
                </textarea>
                <Button handleClick={handleSubmit}>Submit</Button>
            </div>        
        </div>)
    }

export default Contact