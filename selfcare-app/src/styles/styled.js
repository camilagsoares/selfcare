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
    color: #5CA720;
    font-size: 13px;

:hover{
    color: #386D0D;
}
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


export const GridProducts = styled.div`
position: relative;
top: 2vw;
display: flex;
align-items: center;
justify-content: center;

/* @media screen and (max-width: 600px){
    display: flex;
    flex-wrap: wrap;
} */
`

export const Products = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
grid-gap: 140px;
grid-row: 13px;
grid-auto-rows: 400px;
img{
    width: 320px;
    height: 370px;
    border-radius: 5px;
}

p{
    font-family: 'Lato';
    font-weight: 500;
    /* font-size: 22px; */
    margin: 8px;
    &.price{
        color: #5CA720;
        font-weight: 700;
    }
}


@media screen and (max-width: 600px){
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
`

export const Footer = styled.div`
height: 348px;

`


