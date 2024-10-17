import { useEffect, useState } from 'react';
import './App.css';

const FAQItem = ({faq,index})=>{

    const [isShow , setISHow] = useState(false)

    useEffect(()=>{
        if(index==0)
        {
            setISHow(true);
        }
    },[])


    const setShow = ()=>{
        setISHow((isShow)=>!isShow)
    }

    return(
    <div className="faq-box">
        <div className="que">
            <button className={isShow?'arrow':''} onClick={setShow}>{'>'}</button>

            <div>{faq.question}</div>

        </div>
       {isShow&& <div className='ans'>{faq.answer}</div>}
    </div>
    )


}

export default FAQItem