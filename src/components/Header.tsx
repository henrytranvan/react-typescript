import { PropsWithChildren, type ReactNode } from 'react';

interface HeadPops extends PropsWithChildren {
	image: {
		src: string;
		alt: string;
	};
}
type HeaderProps = {
	image: {
		src: string;
		alt: string;
	};
	children: ReactNode;
};

export default function Header({ image, children }: HeadPops) {
	return (
		<header>
			<img {...image} />
			{children}
		</header>
	);
}
