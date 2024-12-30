import "../../css/NavBar.css";
var NavBar = () => {
    var styling ={
    fontSize :"30px",
    textDecoration:"underline",
    color:"blue"
    }
return(
<header>
    <h1 style={styling}>This is Navigation Bar</h1>
    <h2 id="idSEg">Testing Styling</h2>
</header>) 
}
export default NavBar