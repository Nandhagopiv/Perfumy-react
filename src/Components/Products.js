import pic1 from '../Assets/Images/perfumy__img (1).jpg'
import pic2 from '../Assets/Images/perfumy__img (2).jpg'
import pic3 from '../Assets/Images/perfumy__img (3).jpg'
import pic4 from '../Assets/Images/perfumy__img (4).jpg'


function Products(){
    return(
      <div className='products__div'>
        <div className='products__div--div'>
          <img src= {pic1} alt='Product--pic'></img>
          <div style={{padding:"10px"}}>
          <h2>Bamboe Roencing Mint Perfume</h2>
          <p>Refreshing, invigorating, crisp, minty, aromatic, cooling, revitalizing, exhilarating, clean, stimulating.</p>
          </div>
          </div>
        <div className='products__div--div'>
          <img src= {pic2} alt='Product--pic'></img>
          <div style={{padding:"10px"}}>
          <h2>Jo Malone London origin Perfume</h2>
          <p>Jo Malone London perfumes embody elegance and luxury with their distinctive and captivating fragrances, offering a timeless and bespoke olfactory experience.</p>    
          </div>
          </div>
        <div className='products__div--div'>
          <img src= {pic3} alt='Product--pic'></img>
          <div style={{padding:"10px"}}>
          <h2>Gabrielle Chanel Paris origin Perfume</h2>
          <p>Gabrielle Chanel Paris origin perfumes exude sophistication and allure, capturing the essence of Parisian elegance in every spritz.</p>
          </div>
          </div>
        <div className='products__div--div'>
          <img src= {pic4} alt='Product--pic'></img>
          <div style={{padding:"10px"}}>
          <h2>N degree 5 Chanel from Eau De Parfum</h2>
          <p>With timeless scents, they evoke a sense of romance and charm, embodying the spirit of the iconic fashion house.</p>
          </div>
          </div>
      </div>
    )
  }

  
  export default Products