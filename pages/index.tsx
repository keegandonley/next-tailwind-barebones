import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<div className="flex items-center w-screen h-screen justify-center">
			<p>
				Hello, world! This is a sample{' '}
				<span className="font-bold">NextJS app</span> with{' '}
				<span className="font-bold text-blue-600">TailwindCSS</span> and{' '}
				<span className="font-bold text-indigo-600">Typescript</span>.
			</p>
		</div>
	);
};

export default Home;
