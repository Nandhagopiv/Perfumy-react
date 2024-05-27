function Navbar(){
    return(
      <div className='navbar'>
          <h1 style={{color:"white",padding:"10px"}}>Perfumy</h1>
          <div className='navbar__menu'>
            <a><p>Home</p></a>
            <a><p>Products</p></a>
            <a><p>Contact</p></a>
          </div>
      </div>
    )
  }

export default Navbar