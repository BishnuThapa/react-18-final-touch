import  { useState } from 'react'
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

interface Props{
    onHeartClick:()=>void
}
const Like = ({onHeartClick}:Props) => {
    const [status, setStatus]=useState(false)
    const toggle = () => {
        setStatus(!status)
        onHeartClick()
    }
    
    // if (status) return <IoMdHeart color="#ff6b81" size={40} onClick={()=>setStatus(false)} />
    // return <IoMdHeartEmpty size={40}  onClick={()=>setStatus(true)}/>

    if (status)
      return (
        <IoMdHeart color="#ff6b81" size={40} onClick={toggle} />
      );
    return <IoMdHeartEmpty size={40} onClick={toggle} />;
    

}

export default Like