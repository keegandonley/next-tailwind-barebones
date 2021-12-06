import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<div className="flex flex-col items-center w-screen h-screen justify-center">
			<p>
				Hello, world! This is a sample{' '}
				<span className="font-bold">NextJS app</span> with{' '}
				<span className="font-bold text-blue-600">TailwindCSS</span> and{' '}
				<span className="font-bold text-indigo-600">Typescript</span>.
			</p>
			<p className="mt-4">
				<a
					className="text-blue-400"
					href="https://next-tailwind-barebones.vercel.app/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Live Example
				</a>{' '}
				|{' '}
				<a
					className="text-blue-400"
					href="https://github.com/keegandonley/next-tailwind-barebones"
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub Repo
				</a>
			</p>
		</div>
	);
};

export default Home;
