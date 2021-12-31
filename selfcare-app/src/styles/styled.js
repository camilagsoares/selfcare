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
    color: #161616;

    &.promotion{
    font-weight: 600;
    text-transform: uppercase;
    font-size: 20px;
}


}

@media screen and (max-width: 600px){
    max-width: 540px;
    p{
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

:hover{
    opacity: 0.95;
	-webkit-transition: opacity 0.35s;
	transition: opacity 0.35s, transform 0.35s;
	-webkit-transform: scale3d(1.05,1.05,1);
	transform: scale3d(1.05,1.05,1);
}
}

p{
    font-family: 'Lato';
    font-weight: 500;
    margin: 8px;

&.price{
    color: #5CA720;
    font-weight: 700;
}
}


@media screen and (max-width: 768px){
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 5vw;
}

@media screen and (max-width: 1024px){
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 5vw;
}

@media screen and (max-width: 600px){
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 5vw;
}

@media screen and (max-width: 280px){
   img{
       width: 90%;
       left: 4vw;
       position: relative;
   }
   
}
`

export const Footer = styled.div`
height: 348px;
background-color: #E3E3E3;
top: 10vw;
position: relative;




button{
    background-color: transparent;
    font-family: 'Lato';
    border: none;
    cursor: pointer;
    color: #161616;
    font-weight: 600;
    font-size: 15px;
    margin: 5px;
    position: relative;
    top: 3vw;
    left: 8vw;
    transition: all 0.3s ease-in-out;

:hover{
  background-color: #5CA720;
  color: white;
}
}


`


export const ButtonsFooter = styled.div`
display: flex;
align-items: flex-start;
justify-content: flex-start;
position: relative;
top: 3vw;

button{
    font-size: 30px;
    color: #5CA720;

 

a{
    color: inherit;
}

:hover{
    background-color: transparent;
    color: #386D0D;
   } 
}

`


export const ImgFooter = styled.div`
display: flex;
align-items: flex-end;
justify-content: flex-end;
position: relative;
top: 3vw;
right: 5vw;
img{
    margin: 10px;

&.master{
    left: 2vw;
    position: relative;
    width: 54px;
    height: 40px;
}

&.visa{
    left: 2vw;
    width: 50px;
    height: 20px;
    position: relative;
}
}

@media screen and (max-width: 600px){
    position: relative;
    top: 28vw;
}
`