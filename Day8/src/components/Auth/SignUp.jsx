//i want to log the user input in the console when the form is submitted and also clear the form fields after submission. I also want to add a success message that says "Registration successful!" after the form is submitted successfully.

import React, { useState } from 'react';
import { validateEmail } from '../../utils/validateEmail';

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    function handleSubmit(e) {
        e.preventDefault();
        setError('');
        setSuccessMessage('');

        if (!name) {
            setError('Name is required');
            return;
        }

        if (!validateEmail(email)) {
            setError('Invalid email format');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }
        console.log({ name, email, password });
        alert('Registration successful!');
        setName('');
        setEmail('');
        setPassword('');    
    };
};

export default SignUp;

