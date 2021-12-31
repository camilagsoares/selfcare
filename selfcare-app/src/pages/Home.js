import React from 'react'
import banner from '../assets/banner.png'
import { Banner, ButtonsHeader } from '../styles/styled'
import { BandWhite } from '../styles/styled'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineFacebook } from 'react-icons/ai'
import { productsList } from '../infos/products'
import { GridProducts } from '../styles/styled'
import { Products } from '../styles/styled'
import { Line } from '../styles/styled'
import { BandNumberProducts } from '../styles/styled'

const Home = () => {


    const list = productsList.map((prod) => {
        return (
            <div>
            <img src={prod.image} />
            <p>{prod.title}</p>
          <p className="price">{prod.price}</p>
            </div>
        )
    })


    return(
        <div>

           
            <BandWhite>
                <p> 
                <i class="fas fa-star"/>
  
                selfcare
                </p>

                
                <ButtonsHeader>

                <button>
                   <i class="fas fa-search"/>


                </button>

                <button>
                <i class="fas fa-user-alt"/>


                </button>

                <button>
                <i class="fas fa-shopping-cart"/>


                </button>

                </ButtonsHeader>

            </BandWhite>

            


            <Banner>
                 <img src={banner}/> 
            </Banner>

            <BandNumberProducts>

        
            <p className="promotion">Promoção</p>
            <p>9 produtos</p>   
            </BandNumberProducts>

            <Line />
     
     <GridProducts>

     <Products>
         {list}
     </Products>

     </GridProducts>


        </div>
    )
}

export default Home