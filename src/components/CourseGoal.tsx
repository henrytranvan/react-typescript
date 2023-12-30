import { type PropsWithChildren } from 'react';

type CoursesGouldProps = PropsWithChildren<{
	id: number;
	title: string;
	onDelete: (id: number) => void;
}>;

export default function CourseGoal({
	title,
	id,
	onDelete,
	children,
}: CoursesGouldProps) {
	return (
		<article>
			<div>
				<h2> {title} </h2>
				{children}
				<button onClick={() => onDelete(id)}> Delete</button>
			</div>
		</article>
	);
}
