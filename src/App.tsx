import './App.css';
import headerImg from './assets/react.svg';
import HeaderFC from './components/HeaderFC';
import { useState } from 'react';
import CourseGoalList from './components/CourseGoalList';
import { CourseGoal } from './components/CourseGoalList';
import NewGoal from './components/NewGoal';

function App() {
	const [goals, setGoals] = useState<CourseGoal[]>([]);

	function handlerAddGoal(goal: string, summary: string) {
		setGoals([
			...goals,
			{
				title: goal,
				description: summary,
				id: Math.random(),
			},
		]);
	}

	function handleDeleteGoal(id: number) {
		setGoals(prevGoals => prevGoals.filter(goal => goal.id !== id));
	}

	return (
		<main>
			<HeaderFC img={{ src: headerImg, alt: 'Here are your goals.' }}>
				<h1>This is your goals</h1>
			</HeaderFC>
			<NewGoal onAddGoal={handlerAddGoal} />
			<CourseGoalList goals={goals} onDelete={handleDeleteGoal} />
		</main>
	);
}

export default App;
