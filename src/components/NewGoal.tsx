import { useRef, type FormEvent } from 'react';

interface NewGoalProps {
	onAddGoal: (goal: string, summary: string) => void;
}

export default function NewGoal({ onAddGoal }: NewGoalProps) {
	const goal = useRef<HTMLInputElement>(null);
	const summary = useRef<HTMLInputElement>(null);

	function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const enterGoal = goal.current!.value;
		const enterSummary = summary.current!.value;
		event.currentTarget.reset();
		onAddGoal(enterGoal, enterSummary);
	}

	return (
		<form onSubmit={handleSubmitForm}>
			<p>
				<label htmlFor="goal">Your goal:</label>
				<input id="goal" type="text" ref={goal}></input>
			</p>
			<p>
				<label htmlFor="summary">short summary:</label>
				<input id="summary" type="text" ref={summary}></input>
			</p>
			<p>
				<button>Add goal</button>
			</p>
		</form>
	);
}
