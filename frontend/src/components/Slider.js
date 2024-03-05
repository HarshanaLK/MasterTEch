import {React,useEffect,useState}  from 'react'
import {IoIosArrowForward,IoIosArrowBack} from 'react-icons/all'
import { Link } from 'react-router-dom';
import ShopNowBtn from './ShopNowBtn'
const Slider = () => {
     const SliderData = [
        {
            first: "Welcome To The MasterTECH"
        },
        {
            title: 'Discover The Next Level Of Tech Shop',
            subtitle :'Get Your Tech Fix Here!'
        },
        {
 
            title: 'Build it with the best place in Sri Lanka',
            subtitle :'Enjoy your experiences with us.' 
        },
        {
 
            title: 'All kinds of computer accessories available',
            subtitle : 'Computers for Everyone.'
        }
      ];
    const [current, setCurrent] = useState(0);
    const length = SliderData.length;
    const [auto,setauto] = useState(true);
    const intervaltime = 6000;
    let slideinterval;
    const nextslide = () =>{
        clearInterval(slideinterval);
        slideinterval = setInterval(nextslide,intervaltime);
        setTimeout(()=>setCurrent(current === length - 1 ? 0 : current + 1))
 
    }
    const prevslide = () =>{
        clearInterval(slideinterval);
        slideinterval = setInterval(nextslide,intervaltime);
        setTimeout(()=>setCurrent(current === 0 ? length - 1 : current - 1))         
   }
   useEffect(()=>{
     setauto(true)
    if(auto){
      slideinterval = setInterval(nextslide,intervaltime);
      }
    return ()=>{ 
      setauto(false);
      clearInterval(slideinterval);
    }
   })
 
    return (
        <div className = 'slider'>
            {SliderData.map((slide,index) =>{
                return(
                    <div key = {index} className={index === current ? 'slide current' : 'slide'}>
                    <h4 className='first'>{slide.first}</h4>
                    <h1 className = 'titleslider'>{slide.title}</h1>
                    <h3 className = 'subtitleslider'>{slide.subtitle}</h3>
                    <div className = 'content'> <Link to= '/Shop'> <ShopNowBtn /></Link>  </div>
                    </div>
                );
 
            })}
            <IoIosArrowForward className ='next' size ='32' onClick = {nextslide}/>
            <IoIosArrowBack className = 'prev' size ='32' onClick = {prevslide}/>
        </div>
    )
}
 
export default Slider