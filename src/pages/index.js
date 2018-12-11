import React from 'react'
import Link from 'gatsby-link'
import Img from '../images/featuredd.png'
import Img1 from '../images/clients/1.png'
import Img2 from '../images/clients/2.png'
import Img3 from '../images/clients/3.png'
import Img4 from '../images/clients/4.png'
import Img5 from '../images/clients/5.png'
import Img6 from '../images/clients/6.png'

const IndexPage = () => (
  <div>
   <div id="featured">
    <div className="flex">
      <div className="content">
        <h1>We help companies migrate from REST to GraphQL</h1>
        <p>Take the next step, Let us guide and teach you in moving from REST architecture to GraphQL.</p>
          <a className="button default">Request More Info</a>
        <div className="info">No signup required. Free tier available.</div>
      </div>
      <div className="image">
        <img src={Img} alt="Featured Image" />
      </div>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon fill="white" points="0,100 100,0 100,100"/>
     
    </svg>

  </div>


  <div className="row features">

    <div className="column">
      <div className="icon">
        <svg className="svg-icon" viewBox="0 0 20 20">
              <path d="M18.092,5.137l-3.977-1.466h-0.006c0.084,0.042-0.123-0.08-0.283,0H13.82L10,5.079L6.178,3.671H6.172c0.076,0.038-0.114-0.076-0.285,0H5.884L1.908,5.137c-0.151,0.062-0.25,0.207-0.25,0.369v10.451c0,0.691,0.879,0.244,0.545,0.369l3.829-1.406l3.821,1.406c0.186,0.062,0.385-0.029,0.294,0l3.822-1.406l3.83,1.406c0.26,0.1,0.543-0.08,0.543-0.369V5.506C18.342,5.344,18.242,5.199,18.092,5.137 M5.633,14.221l-3.181,1.15V5.776l3.181-1.15V14.221z M9.602,15.371l-3.173-1.15V4.626l3.173,1.15V15.371z M13.57,14.221l-3.173,1.15V5.776l3.173-1.15V14.221z M17.547,15.371l-3.182-1.15V4.626l3.182,1.15V15.371z"></path>
            </svg>
      </div>
      <h3>No More Monolith</h3>
      <p>Keep things simple and use right tech for the right job, This allows for easy management of code and features and is highly scalable.</p>
    </div>

    <div className="column">
      <div className="icon">
        <svg className="svg-icon" viewBox="0 0 20 20">
              <path d="M14.68,12.621c-0.9,0-1.702,0.43-2.216,1.09l-4.549-2.637c0.284-0.691,0.284-1.457,0-2.146l4.549-2.638c0.514,0.661,1.315,1.09,2.216,1.09c1.549,0,2.809-1.26,2.809-2.808c0-1.548-1.26-2.809-2.809-2.809c-1.548,0-2.808,1.26-2.808,2.809c0,0.38,0.076,0.741,0.214,1.073l-4.55,2.638c-0.515-0.661-1.316-1.09-2.217-1.09c-1.548,0-2.808,1.26-2.808,2.809s1.26,2.808,2.808,2.808c0.9,0,1.702-0.43,2.217-1.09l4.55,2.637c-0.138,0.332-0.214,0.693-0.214,1.074c0,1.549,1.26,2.809,2.808,2.809c1.549,0,2.809-1.26,2.809-2.809S16.229,12.621,14.68,12.621M14.68,2.512c1.136,0,2.06,0.923,2.06,2.06S15.815,6.63,14.68,6.63s-2.059-0.923-2.059-2.059S13.544,2.512,14.68,2.512M5.319,12.061c-1.136,0-2.06-0.924-2.06-2.06s0.923-2.059,2.06-2.059c1.135,0,2.06,0.923,2.06,2.059S6.454,12.061,5.319,12.061M14.68,17.488c-1.136,0-2.059-0.922-2.059-2.059s0.923-2.061,2.059-2.061s2.06,0.924,2.06,2.061S15.815,17.488,14.68,17.488"></path>
            </svg>
      </div>
      <h3>Microservices</h3>
      <p>Create a separate service for different features and mange everything very easily. Easily scale any feature anytime and pay only for what you use.</p>
    </div>

    <div className="column">
      <div className="icon">
        <svg className="svg-icon" viewBox="0 0 20 20">
              <path d="M10,6.978c-1.666,0-3.022,1.356-3.022,3.022S8.334,13.022,10,13.022s3.022-1.356,3.022-3.022S11.666,6.978,10,6.978M10,12.267c-1.25,0-2.267-1.017-2.267-2.267c0-1.25,1.016-2.267,2.267-2.267c1.251,0,2.267,1.016,2.267,2.267C12.267,11.25,11.251,12.267,10,12.267 M18.391,9.733l-1.624-1.639C14.966,6.279,12.563,5.278,10,5.278S5.034,6.279,3.234,8.094L1.609,9.733c-0.146,0.147-0.146,0.386,0,0.533l1.625,1.639c1.8,1.815,4.203,2.816,6.766,2.816s4.966-1.001,6.767-2.816l1.624-1.639C18.536,10.119,18.536,9.881,18.391,9.733 M16.229,11.373c-1.656,1.672-3.868,2.594-6.229,2.594s-4.573-0.922-6.23-2.594L2.41,10l1.36-1.374C5.427,6.955,7.639,6.033,10,6.033s4.573,0.922,6.229,2.593L17.59,10L16.229,11.373z"></path>
            </svg>
      </div>
      <h3>Frontend</h3>
      <p>Use React JS, Angular, Vue Js or vanilla javascript for the frontend and easily connect with GraphQL API to utilize its power.</p>
    </div>

  </div>



  <div className="row direction-column testimonials">

    <div className="heading centered">
      <h2>You're at the right place</h2>
      <p>See what our clients say about us</p>
    </div>

    <div className="column testimonial">
      <p className="message">We needed a multi tenant app for managing gyms, our clients, their diets, their progress, history, etc and they took care of everything.</p>
      <p className="author">Dhruv Kumar Jha</p>
    </div>

    <div className="column testimonial">
      <p className="message">They did a perfect job building a mobile application for us, They delivered just in a week and it was cross platform.</p>
      <p className="author">Jason — CEO at Alpha Project</p>
    </div>

    <div className="column testimonial no-border">
      <p className="message">Got a super fast, responsive application delivered quickly for my financial startup, Really happy to work with them.</p>
      <p className="author">Deepak — CEO at Financial Startup</p>
    </div>


  </div>





  <div className="row clients">

    <div className="column">
      <img src={Img1} alt="Client"/>
    </div>
    <div className="column">
      <img src={Img2} alt="Client"/>
    </div>
    <div className="column">
      <img src={Img3} alt="Client"/>
    </div>
    <div className="column">
      <img src={Img4} alt="Client"/>
    </div>
    <div className="column">
      <img src={Img5} alt="Client"/>
    </div>
    <div className="column">
      <img src={Img6} alt="Client"/>
    </div>


  </div>



  </div>
)

export default IndexPage
