import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({ type, color }) => (
	<ReactLoading type={type} color={color} height='1000' width='1000' />
);

export default Loading;
