import React from "react";
import image from "./img.jpg";  
 
function App() {    
  const link="https://www.youtube.com/channel/UCRvqhiJrE9rBJsrS6lBiBGw/featured?view_as=subscriber";
  const links="https://web.facebook.com/profile.php?id=100020146181576";
  const linkss="https://www.instagram.com/http.roman_1057/?fbclid=IwAR3OJMkKpypK378k848P17h6qafFPq1cxTXhLMMk3SMfpiLyrITYRzt697M";
  const linksss="https://www.snapchat.com/add/gulbaz_s";
  const linkssss="https://twitter.com/rroman_5";
 
return(
 
  <div  className="great">          



  <h1> Welcome To My Page</h1> ,    
 
  <img src={image} alt="random" className="img" />  
  <p className="id">@http.roman_1057</p>  
  

  

  <b className="channel">Youtube channel </b> <br/>
  <a href={link} target="youtube" > 
  <br/>  
  <button className="butt">Click Here</button>
   </a>  
   
   <br/>
 
   <b className="face">Facebook ID</b> <br/>
   <a href={links} target="facebook">
     <br/>
   <button className="buttt">Click Here</button> 
   </a>
<br/> 
   <b className="insta"> Instagram ID</b> <br/>
   <a href={linkss} target="instagram ">
     <br/> 
   <button className="butttt"> Click here</button>   
     </a>  
    <br/> 
     <b className="snap">SnapChat</b> <br/>
     <a href={linksss} target="snap">  
       <br/>
     <button className="buttttt">Click here</button>
     </a> 
    <br/>
     <b className="twit">Twitter</b>  <br/>
     <a href={linkssss} target="twitter"> 
       <br/>
    <button className="butttttt">Click here</button>  
     </a>
     
   
     
  
    
     
     
   </div>
 
   


  


);
}; 
 
export default App;