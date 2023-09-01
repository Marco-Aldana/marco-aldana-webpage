import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { HeaderPost } from "./headerpost";
import "./mdx.css";
import { ReportView } from "./view";
  

export const revalidate = 60;

type Props = {
	params: {
		slug: string;
	};
};

export async function generateStaticParams(): Promise<Props["params"][]> {
	return allPosts
		.filter((p) => p.published)
		.map((p) => ({
			slug: p.slug,
		}));
}

export default async function PostPage({ params }: Props) {
	const slug = params?.slug;
	const post = allPosts.find((post) => post.slug === slug);

	if (!post) {
		notFound();
	}

	return (
		<div className="bg-zinc-50 min-h-screen">
			<HeaderPost post={post} />
			<ReportView slug={post.slug} />

			<article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
				<Mdx code={post.body.code} />
			</article>
		</div>
	);
}
