import React, { useEffect, useState } from 'react'

function product() {
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/1")
          .then((res) => res.json())
          .then((json) => console.log(json));
    })
  return (
    <div>
      
    </div>
  )
}

export default product
