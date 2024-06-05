import React,{useRef,useEffect, useState} from 'react'
import { Helmet } from 'react-helmet';
import { Input,InputGroup, InputLeftElement, Textarea,Button  } from "@chakra-ui/react"
import {BsEnvelope, GiPositionMarker, HiOutlinePhone} from 'react-icons/all'
import './contactus.css'
const Contactus = () => {
    const [email, setemail] = useState('')
    const [body, setbody] = useState('')

    const handlesubmit = () =>{
        window.open(`harshana:mastertech@gmail.com?subject=Sample&body=${body}`)
    }

    const Line = useRef(null);
    const text = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            if (Line.current) {
                Line.current.classList.add('lineon');
            }
            if (text.current) {
                text.current.classList.add('titleon');
            }
        }, 5);


        return () => {

        }
    },[])

    return (

        <>
            <Helmet>
                <title>Contact</title>
            </Helmet>

            <div className='heading' >
                <div className = 'line' ref={Line}>
                </div>
                <h1 className ='title' ref={text}>Contact</h1>
            </div>

        <div className="contactUs">
        <div className="card-contact">
            <div className="sendMsg">
                <h4>Send Us A Message</h4>
                    <div className="inputContact">
                        <InputGroup width="450px" >
                            <InputLeftElement       pointerEvents="none"  children={<BsEnvelope className = 'envolope' color="white" />}/>
                            <Input value = {email} onChange = {e=> setemail(e.target.value)} type="text" color="white" placeholder="Your Email Address"/>
                        </InputGroup>
                        
                    </div>
                    <div className="textAreaCnt">
                        <Textarea value = {body} onChange = {e=> setbody(e.target.value)} width="450px" color="white"  placeholder="How Can We Help" height="200px" />
                    </div>
                    <div className="contentContact">
                        <Button onClick = {handlesubmit} borderRadius="90px" backgroundColor="#03e9f4" size="180px" className="contactBtn">Submit</Button>
                    </div>

            </div>
            <div className="showAdrss">
                <div className="box">
                    <div className="iconCtn"><GiPositionMarker opacity="0.8"/></div>
                    <div className="adressCtn">

                        <h3> Address</h3>
                        <p>MC Plaza, 12, 2nd Floor, Kurunegala 60000</p>
                    </div>
                </div>
                    <div className="box">
                    <div className="iconCtn"><HiOutlinePhone opacity="0.8"/></div>
                    <div className="adressCtn">

                        <h3>Tel No:</h3>
                        <p className="infoCtn">0371234567</p>
                    </div>
                </div>
                <div className="box">
                    <div className="iconCtn"><BsEnvelope opacity="0.8"/></div>
                    <div className="adressCtn">

                        <h3>E-Mail</h3>
                        <p className="infoCtn">info@Mastertech.lk</p>
                    </div>
                </div>
            </div>
        </div>
</div>
</>
    )
}

export default Contactus
