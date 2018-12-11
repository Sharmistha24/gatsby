import React from 'react'
import Link from 'gatsby-link'
import Img7 from '../images/img1.png'

const IndexPage = () => (
  <div>
  
  <div className="contact1">
		<div className="container-contact1">
			<div className="contact1-pic js-tilt" data-tilt>
				<img src={Img7} alt="IMG" />
			</div>

			<form className="contact1-form validate-form">
				<span className="contact1-form-title">
					Get in touch
				</span>

				<div className="wrap-input1 validate-input">
					<input className="input1" type="text" name="name" placeholder="Name" />
					<span className="shadow-input1"></span>
				</div>

				<div className="wrap-input1 validate-input">
					<input className="input1" type="text" name="email" placeholder="Email" />
					<span className="shadow-input1"></span>
				</div>

				<div className="wrap-input1 validate-input">
					<input className="input1" type="text" name="office" placeholder="Office Name" />
					<span className="shadow-input1"></span>
				</div>

				<div className="wrap-input1 validate-input">
					<textarea className="input1" name="message" placeholder="Message"></textarea>
					<span className="shadow-input1"></span>
				</div>

				<div className="container-contact1-form-btn">
					<button className="contact1-form-btn">
						<span>
							Send Email
							
						</span>
					</button>
				</div>
			</form>
		</div>
	</div>


  </div>
)

export default IndexPage
