import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../../Firebase.config';
import { useNavigate } from 'react-router-dom';
`g `;
import '../../styles/Form.css';

const AuthDetails = () => {
	const [authUser, setAuthUser] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const listen = onAuthStateChanged(auth, user => {
			if (user) {
				setAuthUser(user);
				navigate('/');
			} else {
				setAuthUser(null);
				navigate('/singup');
			}
		});
		return () => {
			listen();
		};
	}, []);

	const userSingOut = () => {
		signOut(auth)
			.then(() => console.log('success'))
			.catch(e => console.log(e));
	};

	return (
		<div className='auth'>
			{authUser ? (
				<div className='acc'>
					<p>{`${authUser.email}`}</p>
					<button onClick={userSingOut}>Выйти</button>
				</div>
			) : (
				<p>You are not logged in!</p>
			)}
		</div>
	);
};

export default AuthDetails;
