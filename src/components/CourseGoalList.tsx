import CourseGoal from './CourseGoal';

export interface CourseGoal {
	title: string;
	description: string;
	id: number;
}

export type CourseGoalListProps = {
	goals: CourseGoal[];
	onDelete: (id: number) => void;
};

export default function CourseGoalList({
	goals,
	onDelete,
}: CourseGoalListProps) {
	return (
		<ul>
			{goals.map(item => (
				<li key={item.id}>
					<CourseGoal title={item.title} id={item.id} onDelete={onDelete}>
						<p>{item.description}</p>
					</CourseGoal>
				</li>
			))}
		</ul>
	);
}
