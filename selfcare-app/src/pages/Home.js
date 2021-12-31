import React from 'react'
import banner from '../assets/banner.png'
import { Banner, ButtonsHeader } from '../styles/styled'
import { BandWhite, Footer } from '../styles/styled'
import { productsList } from '../infos/products'
import { GridProducts } from '../styles/styled'
import { Products } from '../styles/styled'
import { Line } from '../styles/styled'
import { BandNumberProducts } from '../styles/styled'
import { ButtonsFooter } from '../styles/styled'
import { ImgFooter } from '../styles/styled'
import visa from '../assets/visa.png'
import master from '../assets/mastercard.png'
import { Animated, FadeAnimations } from 'animated-styled-components'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

    AOS.init({
        delay: 4,
        debounceDelay: 50
    })

    const list = productsList.map((prod) => {
        return (
            <div>
                <img src={prod.image} />
                <p>{prod.title}</p>
                <p className="price">{prod.price}</p>
            </div>
        )
    })


    return (
        <div>




            <BandWhite>

                <Animated
                    animation={{
                        in: FadeAnimations.FadeInTop,
                        duration_in: 1
                    }}
                >
                    <p>
                        <i class="fas fa-star" />

                        selfcare
                    </p>
                </Animated>

                <Animated
                    animation={{
                        in: FadeAnimations.FadeInTop,
                        duration_in: 1
                    }}
                >
                    <ButtonsHeader>

                        <button>
                            <i class="fas fa-search" />


                        </button>

                        <button>
                            <i class="fas fa-user-alt" />


                        </button>

                        <button>
                            <i class="fas fa-shopping-cart" />


                        </button>

                    </ButtonsHeader>
                </Animated>

            </BandWhite>




            <Banner>
                <img src={banner} />
            </Banner>

            <BandNumberProducts>


                <p className="promotion">Promoção</p>
                <p>9 produtos</p>
            </BandNumberProducts>

            <Line />


            <GridProducts data-aos="fade-right"
            >
           
                <Products>
                    {list}
                </Products>

            </GridProducts>


            <Footer>

                <button>Contato</button>
                <br />
                <button>Termos de serviço</button>
                <br />
                <button>Política de privacidade</button>
                <br />
                <button>Cancelamento, troca e reembolso</button>


                <ButtonsFooter>

                    <button>
                        <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
                    </button>

                    <button>
                        <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-square"></i></a>


                    </button>

                </ButtonsFooter>

                <ImgFooter>
                    <img src={master} className="master" />
                    <img src={visa} className="visa" />
                </ImgFooter>

            </Footer>

        </div>
    )
}

export default Home