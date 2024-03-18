"use client";

type Props = { name: string; age: number; is_married: boolean };

function Hello({ name, age, is_married }: Props) {
	return (
		<p>
			Hello {name}, age {age}, already married: {is_married ? "YES" : "NO"}
		</p>
	);
}

export default function Page() {
	const age = 28;

	return (
		<div>
			<h1>Hello World {age}</h1>
			<Hello name="Adha" age={24} is_married />
			<Hello name="Arga" age={26} is_married={false} />
		</div>
	);
}
