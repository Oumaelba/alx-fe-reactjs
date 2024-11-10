// src/components/UserProfile.jsx
import React, { useContext } from 'react';
import UserContext from './component/UserContext';

const UserProfile = (props) => {
	return (
		<div>
			<h2>{props.name}</h2>
			<p>Age: {props.age}</p>
			<p>Bio: {props.bio}</p>
		</div>
	);
};

export default UserProfile