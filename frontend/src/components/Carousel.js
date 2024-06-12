import React from 'react';


export default function Carousel() {
    return (
       <>
       <div  className="image-row" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'auto' }}>
        <div>
            <img src='https://images.pexels.com/photos/2280551/pexels-photo-2280551.jpeg?auto=compress&cs=tinysrgb&w=600' style={{maxWidth:'500px',padding: '5px'}}/>
        </div>
        <div>
            <img src='https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?auto=compress&cs=tinysrgb&w=600'style={{maxWidth:'500px',padding: '5px'}}/>
        </div>
        <div>
            <img src='https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=600'style={{maxWidth:'500px',padding: '5px'}}/>
        </div>

       </div>
       </>

    

   
  

  
       
    );
}
