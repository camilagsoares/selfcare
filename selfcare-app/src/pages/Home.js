import React from 'react'
import banner from '../assets/banner.png'
import { Banner, ButtonsHeader } from '../styles/styled'
import { BandWhite } from '../styles/styled'
import { BsFillStarFill } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import { BsPersonFill } from 'react-icons/bs'
import { BiCart } from 'react-icons/bi'
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
            </div>
        )
    })


    

    


    return(
        <div>

           
            <BandWhite>
                <p> 
                 <BsFillStarFill 
                 size={20}
                 /> 
                selfcare
                </p>

                <ButtonsHeader>

                <button>
                    <BiSearch 
                     size={20}
                     color={"#5CA720"}
                    />
                </button>

                <button>
                    <BsPersonFill 
                     size={20}
                     color={"#5CA720"}
                    />
                </button>

                <button>
                    <BiCart 
                     size={20}
                     color={"#5CA720"}
                    />
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
{/*      
     <GridProducts>

     <Products>
         {list}
     </Products>

     </GridProducts> */}


        </div>
    )
}

export default Home