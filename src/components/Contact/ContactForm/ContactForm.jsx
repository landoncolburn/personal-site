import './ContactForm.css'

function ContactForm() {
	return (
		<div className='contact__form'>
			<div className='contact__safe_area'>
				<form action="">
					<div className="toprow">
						<div className="sidebyside">
							<label for="firs">First Name</label>
							<input type="text" name="firstname" id="firs" placeholder="Johnathan" />
						</div>
						
						<div className="sidebyside">
							<label for="last">Last Name</label>
							<input type="text" name="lastname" id="last" placeholder="Smith" />
						</div>
					</div>
					
					<label for="mail">Email</label>
					<input type="email" name="email" id="mail" placeholder="jsmith@mail.com" />
					
					<label for="mess">Message</label>
					<textarea name="message" id="mess" cols="30" rows="10" placeholder="Enter your message here..."></textarea>
					
					<input type="submit" value="Submit" />
				</form>
			</div>
		</div>
	);
}

export default ContactForm;