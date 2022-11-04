import React from 'react';
import Input from '../../component/input/input';
import { Checkbox, Form, Textarea, Grid, FormButton } from './contactStyle';

const Contact = () => {
	return (
		<Form>
			<h1>Contact Me</h1>
			<p> Hi there, contact me to ask me about anything you have in mind. </p>
			<Grid>
				<Input
					type={'text'}
					placeholder={'Enter your first name'}
					label={'First name'}
					id={'first_name'}
				/>
				<Input
					type={'text'}
					placeholder={'Enter your last name'}
					label={'Last name'}
					id={'last_name'}
				/>
				<Input
					className='email-input'
					type={'email'}
					placeholder={'yourname@email.com'}
					label={'Email'}
					id={'email'}
				/>
				
				<Textarea className='textarea'>
					<label htmlFor='message'>Message</label>
					<textarea
						rows={'7'}
						id='message'
						required
						placeholder={
							"Send me a message and I'll reply you as soon as possible..."
						}></textarea>
				</Textarea>
			</Grid>
			<Checkbox>
				<input type='checkbox' required />
				<label htmlFor='checkbox'>
					You agree to providing your data to Saintt042 who may contact you.
				</label>
			</Checkbox>
			<FormButton id='btn__submit'>send message</FormButton>
		</Form>
	);
};

export default Contact;