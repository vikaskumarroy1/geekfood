import Button from './Button'
import './Hero.css'
function Hero(){
    return(
        <div>
        <div id="hero" >
          <div class="para">
         <h1 id="let" class="speech">Let us find your</h1>
         <h1 id="forever" class="speech">Forever Food</h1>
         <p class="speech">lorem vikas kuma rroy yukkl hjjknyuuiol ertyu 6uyikj  </p>
         <p class="speech">lorem vikas kuma rroy yukkl gbjkk, tyhik cghj fyu u </p>
         </div>
         <Button title="Search Now" class="hero-btn" CustomButtonStyle={{backgroundColor:"red",color:"white",marginLeft:"-500px",height:"50px",width:"170px",marginTop:"200px"}}></Button>
         <Button title="Know More" class="hero-btn"CustomButtonStyle={{backgroundColor:"white",color:"brown",marginLeft:"20px",width:"170px",height:"50px"}}></Button>

         </div>

         
         <div class="image-container">
            <div class="image-container1">

            </div>
            <div class="image-container2">
                <h1>Lorem ipsum dolor sit amet,</h1>
                <h1>consectetur adipisicing elit. Tempore,</h1>
                <h1 class="margin">debitis.</h1>
                <p class="margin">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
                <Button title="Get In Touch" CustomButtonStyle={{backgroundColor:"blue", width:"150px",borderRadius:"5%"}}></Button>

            </div>

         </div>
         
         </div>
       

    )
}
export default Hero