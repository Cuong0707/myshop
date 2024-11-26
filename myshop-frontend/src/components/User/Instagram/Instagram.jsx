import React from "react";
import './Instagram.css'
function Instagram(){
    return (
        <div className="instagram">
            <h2>#ella on Instagram</h2>
            <div className="instagram-gallery">
                <img src="assets/images/ins1.jpg" alt="Instagram 1" />
                <img src="assets/images/ins2.jpg" alt="Instagram 1" />
                <img src="assets/images/ins3.jpg" alt="Instagram 1" />
                <img src="assets/images/ins4.jpg" alt="Instagram 1" />
                <img src="assets/images/ins5.jpg" alt="Instagram 1" />
            </div>
            <button className="view-gallery">View Gallery</button>
        </div>
        
    );
    
}

export default Instagram;