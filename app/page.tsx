import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Image from "next/image";

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Blog", href: "/posts" },
	{ name: "Contact", href: "/contact" },
];

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>
			<h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl xl:text-8xl whitespace-nowrap bg-clip-text ">
				MARCO ALDANA
			</h1>


			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-sm text-zinc-500 ">
									<div className="flex items-center justify-center xl:gap-14 sm:gap-6 gap-4">
										<div className="carrousel">
												<Image src="/images/logos-svg/javascript.svg" width={50} height={50} alt="Javascript"></Image>
												<Image src="/images/logos-svg/docker.svg" width={50} height={50} alt="Docker"></Image>
												<Image src="/images/logos-svg/dotnet.svg" width={50} height={50} alt="DotNet"></Image>
												<Image src="/images/logos-svg/azure.svg" width={50} height={50} alt="Azure"></Image>
												<Image src="/images/logos-svg/python.svg" width={50} height={50} alt="Python"></Image>
												<Image src="/images/logos-svg/react.svg" width={50} height={50} alt="React"></Image>
												<Image src="/images/logos-svg/next-js.svg" width={50} height={50} alt="Next-js"></Image>
												<Image src="/images/logos-svg/typescript.svg" width={50} height={50} alt="Typescript"></Image>
												<Image src="/images/logos-svg/cSharp.svg" width={50} height={50} alt="C#"></Image>
												<Image src="/images/logos-svg/sql.svg" width={50} height={50} alt="SQL"></Image>
												</div>
									</div>
									<br></br>
					Hi, my name is Marco, 
					<br/>I'm a full-stack software developer, 
					<br/>focused on <b>.Net Core</b> and <b>JavaScript</b> technologies.
				</h2>
			</div>
		</div>
	);
}
