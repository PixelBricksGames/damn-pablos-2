import React from 'react';
import { Carnival } from '@pabrick/react-carnival';

const GamePage = () => {
	return (
		<div className='Game'>
			<Carnival onSuccess={() => {}} onFailure={() => {}} size={25} duration={1000} />
		</div>
	);
};

export default GamePage;
