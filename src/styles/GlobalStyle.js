import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --primary-color:#007bff;
        --secondary-color:#6c757d;
        --background-dark-color:#10121A;
        --background-dark-grey:#191d2b;
        --border-color:#00ffcd;
        --background-light-color:#f1f1f1;
        --background-light-color-2:rgba(3,127,255,.3);
        --white-color:#fff;
        --font-light-color:#a4acc4;
        --font-dark-color:#313131;
        --font-dark-color-2:#151515;
        --sidebar-dark-color:#191d2b;
        --scrollbar-bg-color: #6b6b6b;
        --scrollbar-track-color: #383838; 
    }

    *{
        margin:0; 
        padding:0;
        box-sizing:border-box;
        list-style:none;
        text-decoration:none;
        font-size:1.2rem;
    }

    body{
        font-family: Arial, Helvetica, sans-serif;
        background-color: #071A52;
        color: #ffff;
    }

    .card{
    border: 2px solid var(--border-color);
    padding: 30px;
    border-radius: 15px;
    margin-top: 1rem;
    &:nth-of-type(3){
        text-align: center;
        padding: 15px;
        
    }
   
    }

    .container {
	max-width: 50%;
    margin: 30px auto;
    padding: 30px;
}

.forecastImage{
    border-radius: 50%;
    margin:0.3rem;
    background-color: #bababa;
    width: 90%;
    height: 60%;
    img{
        width: 100%;
        height: 100%;
    }
}

.flip-card {
    display: inline-flexbox;
  /* position: relative; */
  width: 6rem; height: 9rem;
  /* width: 6rem; height: auto; */
  perspective: 30rem;
  margin: .6rem;
  margin-bottom: 1.4rem;
  
}
.front, .back {
  text-align: center;
  margin-top: -.8rem;
  margin-left: -.3rem;
  position: absolute;
  width: 110%; height: 120%;
  transition: transform 1s;
  backface-visibility:hidden;
  background-color: #585858;
  border-radius: .5rem;
  padding: .5rem 0;
}

.front{
    h6{
        margin-top: .2rem;
        font-size: .6rem;
    }
}
.back { 
  transform: rotateY(180deg); 
  

  h6{
      font-size: small;
      color: #58bbff;
  }
  h3{
      margin-bottom: .3rem;

  }

  .bg-backcard{
    &:nth-last-child(1){
      background-color: #191d2b;
      border-radius: 5px;
      /* margin-top: .2rem; */
      padding: .2rem;
    }
  }
}
.flip-card:hover .front{ transform: rotateY(180deg); }
.flip-card:hover .back { transform: rotateY(360deg); }


`;

export default GlobalStyle;
