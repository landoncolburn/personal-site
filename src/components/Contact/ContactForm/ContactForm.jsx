import './ContactForm.css'

function ContactForm() {
	return (
		<div className='contact__form'>
			<div className='contact__safe_area'>
				<div className="contact__safe_area__left">
					<h2>Get in touch!</h2>
					<p>Looking for something specific? Feel free to drop me a line using the form or any of my socials below. I am always happy to hear from you!</p>
					<ul>
						<li>Twitter</li>
						<li>GitHub</li>
						<li>LinkedIn</li>
						<li>RSS</li>
					</ul>
				</div>
				<div className="contact__safe_area__right">
					<form action="">
						<label for="firs">First Name</label>
						<input type="text" name="firstname" id="firs" placeholder="Johnathan" />
						
						<label for="last">Last Name</label>
						<input type="text" name="lastname" id="last" placeholder="Smith" />
						
						<label for="mail">Email</label>
						<input type="email" name="email" id="mail" placeholder="jsmith@mail.com" />
						
						<label for="comp">Company</label>
						<input type="text" name="company" id="comp" placeholder="Apple Tree Co." />
						
						<label for="subj">Subject</label>
						<input type="text" name="subject" id="subj" placeholder="Subject or Topic" />
						
						<label for="desc">Description</label>
						<textarea name="description" id="desc" cols="30" rows="10" placeholder="Enter your message here..."></textarea>
						
						<input type="submit" value="Submit" />
					</form>
				</div>
			</div>
		</div>
	);
}

export default ContactForm;