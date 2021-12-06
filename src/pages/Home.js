import { Button } from 'antd';
import React, { useEffect, useRef, useState } from 'react';


function Home() {
  const [count,setCount]=useState(0);
  const preCount=useRef(count);
  const ref=useRef(null);
  useEffect(()=>{
    preCount.current=count
    ref.current.focus()
  },[count])

  return (
  <div style={{width:'200px',margin:'100px auto'}}>
  <div>prev: {preCount.current}</div>
  <div>count: {count}</div>
  <input type='text' ref={ref}/>
    <Button onClick={()=>{setCount(count+1)}}>
      Add
    </Button>
  </div>
  );
}

export default Home;
