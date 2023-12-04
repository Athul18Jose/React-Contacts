import React from 'react'

function Header() {
  return (
    <>
        <nav class="navbar navbar-expand-lg bg-light" data-bs-theme="light">
  {/* <div class="container"> */}
  
  <img
              alt=""
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Google_Contacts_icon_%282022%29.svg/423px-Google_Contacts_icon_%282022%29.svg.png"
              // width="60"
              height="35"
              className=" align-top ms-5"
            />  
            <span className='fw-bold ms-2 text-dark'>Contacts</span>
    
   
   
  {/* </div> */}
</nav>
    </>
  )
}

export default Header