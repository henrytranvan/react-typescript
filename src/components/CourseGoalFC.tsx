import { FC, type PropsWithChildren } from 'react';

type CourseGoalPropsFC = PropsWithChildren<{ title: string }>;

const CourseGoalFC: FC<CourseGoalPropsFC> = ({ title, children }) => {
	return (
		<>
			<h2> {title}</h2>
			<p>{children}</p>
		</>
	);
};

export default CourseGoalFC;
