import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillYoutube,
  AiFillAmazonCircle,
  AiFillInstagram,
} from "react-icons/ai";

export default function Home() {
  return (
    <>
      <div className="Home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>
      <div className="Home2" >
        <img src={vg} alt="graphics" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            odit vitae, excepturi obcaecati harum odio temporibus. Temporibus
            velit culpa corporis sequi earum! Accusamus qui, fuga sit doloribus,
            veritatis dolorem quod aliquam, quidem atque at amet?
          </p>
        </div>
      </div>
      <div className="Home3" id="about">
        <div>
          <h1>Who are we?</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ullam,
            provident voluptates tenetur laborum ad excepturi, libero eius odio
            sequi expedita consequatur, iure harum corporis asperiores omnis
            aliquam nemo maxime numquam? Ea dolor asperiores quisquam aliquid
            dolorem ad repellendus eaque minima placeat iure magni autem fugiat
            quos explicabo labore vitae aliquam culpa, modi quod fugit porro
            delectus quo. Molestias esse quisquam corporis fugiat. Vel, nostrum
            veritatis corrupti iure temporibus aliquam?
          </p>
        </div>
      </div>
      <div className="Home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{animationDelay:"0.3s"}}>
              <AiFillGoogleCircle></AiFillGoogleCircle>
              <p>Google</p>
           </div>
           <div style={{animationDelay:"0.5s"}}>
              <AiFillAmazonCircle/>
              <p>Amazon</p>
           </div>
           <div style={{animationDelay:"0.7s"}}>
              <AiFillInstagram/>
              <p>Instagram</p>
           </div>
           <div style={{animationDelay:"1s"}}>
              <AiFillYoutube></AiFillYoutube>
              <p>Youtube</p>
           </div>
          </article>
        </div>
      </div>
    </>
  );
}
