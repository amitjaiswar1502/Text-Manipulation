import React from 'react'

export default function About(props) {

  

    // let myStyle = {
    //     color: props.mode === 'dark' ? 'white' : 'black',
    //     backgroundColor: props.mode === 'dark' ? '#262c60' : 'white'
    // }


 

    return (

        <div className="container mt-3 text-center" style={{color: props.mode === 'light' ? 'black' : 'white', fontSize: "30px" }} >
           <p> This App helps you to manipulate text, hope you would love it.<br></br>
            © Copyright Amit Jaiswar, All right reserved! </p>
        </div>
    )
}
