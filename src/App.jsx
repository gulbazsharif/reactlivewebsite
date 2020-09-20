import React from "react";
import theimage from './img.jpg';   

function App() {   
  const link="https://www.youtube.com/channel/UCRvqhiJrE9rBJsrS6lBiBGw/featured?view_as=subscriber";
  const links="https://web.facebook.com/profile.php?id=100020146181576";
  const linkss="https://www.instagram.com/http.roman_1057/?fbclid=IwAR3OJMkKpypK378k848P17h6qafFPq1cxTXhLMMk3SMfpiLyrITYRzt697M";
  const linksss="https://www.snapchat.com/add/gulbaz_s";
  const linkssss="https://twitter.com/rroman_5";
 
return(
  <div  className="jumborton">         
  <div>      
  <h1> Welcome To My Page</h1> ,   
 
<img src={theimage} alt="random" className="img" />   
  <p className="id">@http.roman_1057</p> 
  <div> 
  <h2 className="channel">Youtube channel </h2>
  <a href={link} target="youtube" >
  <button>Click Here</button>
   </a> 
  
   <h2 className="facebook">Facebook ID</h2>
   <a href={links} target="facebook">
   <button>Click Here</button>
   </a>

   <h2 className="insta"> Instagram ID</h2>
   <a href={linkss} target="instagram"> 
   <button> Click here</button>
     </a>  
     
     <h2 className="snap">SnapChat</h2>
     <a href={linksss} target="snap">
     <button>Click here</button>
     </a> 
    
     <h2 className="twit">Twitter</h2>
     <a href={linkssss} target="twitter">
    <button>Click here</button>  
     </a>
    
     <h3>Subscribe My Channl </h3> 
     
  
    
      
     
   </div>
 
  </div>
  </div>
);
}

export default App;