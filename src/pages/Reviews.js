import React from "react";
import "../styles/Reviews.css";



function reviews() {
    return (
   <section className="reviews" id="reviews">
       <h1 className="heading">REVIEW<span>PAGE</span></h1>
       <div className="box-container">
           <div className="box">
           <img src="dhokla.jpg" alt=""></img>
               <h3>Crystela</h3>
               <div className="stars">
                   <i className="fas fa-star"></i>
                   <i className="fas fa-star"></i>
                   <i className="fas fa-star"></i>
                   <i className="fas fa-star"></i>
                   <i className="fas fa-star"></i>
               </div>
               <p>Delicious high quality plates,selection of wins and great service.
                   we tried all their entrees, one of their desserts,and everything was delicious.
                   Highly recommended.</p>
           </div>
           <div className="box" >
               <img src="dhokla.jpg" alt=""></img>
               <h3>Jhon</h3>
               <div className="stars">
                   <i className="fas fa-star"></i>
                   <i className="fas fa-star"></i>
                   <i className="fas fa-star"></i>
                   <i className="fas fa-star"></i>
                   <i className="fas fa-star"></i>
               </div>
               <p>Delicious high quality plates,selection of wins and great service.
                   we tried all their entrees, one of their desserts,and everything was delicious.
                   Highly recommended.</p>
           </div>
           <div className="box">
               <img src="../assets/dhokla.jpg" alt=""></img>
               <h3>Smith</h3>
               <div className="stars">
                   <i className="fas fa-star"></i>
                   <i className="fas fa-star"></i>
                   <i className="fas fa-star"></i>
                   <i className="fas fa-star"></i>
                   <i className="fas fa-star"></i>
               </div>
               <p>Delicious high quality plates,selection of wins and great service.
                   we tried all their entrees, one of their desserts,and everything was delicious.
                   Highly recommended.</p>
           </div>
           <div className="box">
               <img src="../assets/dhokla.jpg" alt=""></img>
               <h3>crystela</h3>
               <div className="stars">
                   <i className="fas fa-star"></i>
                   <i className="fas fa-star"></i>
                   <i className="fas fa-star"></i>
                   <i className="fas fa-star"></i>
                   <i className="fas fa-star"></i>
               </div>
               <p>Delicious high quality plates,selection of wins and great service.
                   we tried all their entrees, one of their desserts,and everything was delicious.
                   Highly recommended.</p>
           </div>
           
       </div>

   </section>

      
    );
}

export default reviews;