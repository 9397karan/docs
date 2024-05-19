import React, { useEffect, useRef,useState } from 'react'
import Card from './Card'
import { Form } from './Form';


const getItem=()=>{
    let list=localStorage.getItem('list');
    if(list){
        return JSON.parse(localStorage.getItem('list'))
    }else{
        return []
    }
}

const Foreground = () => {
    const [open, setOpen] = useState(false);
    const [data,setData]=useState(getItem())

    const handleClick=()=>{
      setOpen(true)
    }
    const ref=useRef(null)
    const title=useRef();
    const desc=useRef();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const t=title.current.value;
        const d=desc.current.value;
        console.log(t,d);
        const new_data={
            title:t,
            desc:d
        }
        setData([...data,new_data])
        console.log(data);
        setOpen(false)
    }
    useEffect(()=>{
        localStorage.setItem('list',JSON.stringify(data))
    },[data])
  return (
        <>
      <div className='fixed flex flexwrap-wrap gap-5 mt-8 top-0 left-0 z-[3] w-full h-full m-2' ref={ref}>
        {data.map((el)=>(
            <Card data={el} key={el} reference={ref}/>
        ))}
    </div>
    <div className='add fixed bottom-10 right-10'>
        <button 
          onClick={handleClick} 
          className="ml-4 btn btn-primary">
          Add
        </button>
      </div>
      <Form open={open} setOpen={setOpen} handleSubmit={handleSubmit} title={title} desc={desc}/>
        </>
    
  )
}

export default Foreground