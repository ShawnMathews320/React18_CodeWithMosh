import React from 'react';

interface Props {
	onClick: () => void;
}

export const Like = ({ onClick }: Props) => {
	return <div onClick={onClick}>Like</div>;
};
