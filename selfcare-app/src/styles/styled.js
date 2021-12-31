import styled from 'styled-components'

export const ButtonsHeader = styled.div`

button{
    position: relative;
    top: 2vw;
    cursor: pointer;
    margin: 6px;
    right: 3vw;
    border: none;
    background-color: transparent;
}

`

export const BandWhite = styled.div`

display: flex;
justify-content: space-between;
height: 80px;

p{
    font-family: 'Cabin';
    font-size: 26px;
    font-weight: 500;
    position: relative;
    top: 2vw;
    left: 4vw;
}

@media screen and (max-width: 600px){
height: 60px; 
top: 2vw;
    position: relative;
p{
    font-size: 20px;
    
}
}

`

export const Banner = styled.div`
img{
    width: 100%;
}

`

export const GridProducts = styled.div`
width: 900px;
display: grid;
grid-template-columns: repeat(4,1fr);

`

export const Products = styled.div`
/* display: flex;
align-items: center;
justify-content: center; */

img{
    width: 60%;
}

`

export const BandNumberProducts = styled.div`
display: flex;
justify-content: space-between;

p{

    font-family: 'Lato';
    font-size: 18px;
    margin: 2rem;

    &.promotion{
    font-weight: 600;
    text-transform: uppercase;
    font-size: 20px;
}


}

@media screen and (max-width: 600px){
    max-width: 540px;
    p{
        /* width: 300px; */
        font-size: 15px;
    
        &.promotion{
        font-size: 15px;
    }
    }

  
}

`

export const Line = styled.div`
top: 0.1vw;
position: relative;
height: 0.1px;
background-color: #DFD9D9;

`




export const Footer = styled.div`
height: 348px;

`

