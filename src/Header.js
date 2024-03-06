import Button from './Button'
import './Header.css'
function Header(){
    return(
        <div id="header">
            <div id="logo">
            <img src="https://flowbite.com/docs/images/logo.svg"></img>
            <h2>GeekFoods</h2>
            </div>
            <div class="section">
                <h4 id="home">Home</h4>
                <h4>Quate</h4>
                <h4>Resturarnt</h4>
                <h4>Foods</h4>
                <h4>Contact</h4>
                </div>
                <Button title="Get Started"></Button>
           

            
        </div>
    )
}
 export default Header