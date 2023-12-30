import './App.css';
import headerImg from './assets/react.svg';
import HeaderFC from './components/HeaderFC';
import { useState } from 'react';
import Header from './components/Header';
import CourseGoalList from './components/CourseGoalList';
import { CourseGoal } from './components/CourseGoalList';
import NewGoal from './components/NewGoal';

function App() {
	const [goals, setGoals] = useState<CourseGoal[]>([]);

	function handlerAddGoal() {
		setGoals([
			...goals,
			{
				title: 'This is your new goal',
				description: 'Your goal descrition',
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
			<button onClick={handlerAddGoal}>Add Goal</button>
			<NewGoal />
			<CourseGoalList goals={goals} onDelete={handleDeleteGoal} />
		</main>
	);
}

export default App;
