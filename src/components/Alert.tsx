import { ReactNode } from 'react';

interface Props {
	children: string;
	color?: 'primary' | 'secondary' | 'danger' | 'success';
	onClose: () => void;
}

export const Alert = ({ children, color = 'primary', onClose }: Props) => {
	return (
		<div className='alert alert-primary alert-dismissible'>
			{children}{' '}
			<button
				onClick={onClose}
				type='button'
				className='btn-close'
				data-bs-dismiss='alert'
				aria-label='Close'></button>
		</div>
	);
};
