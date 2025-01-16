"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext } from "@/components/ui/pagination";
import { log } from "console";
import { Metadata } from "next";
import { useEffect, useState } from "react";

/* export const metadata: Metadata = {
	title: 'Animes'
}; */

const json = [
	{
		animeId: 5,
		animeTitle: {
			animeTitleDefault: "One Piece",
		},
		animeTier: "S",
		animeImg: "./imgs/anime/one_piece/opbg.png",
	},
	{
		animeId: 6,
		animeTitle: {
			animeTitleDefault: "One Piece",
		},
		animeTier: "S",
		animeImg: "./imgs/anime/one_piece/opbg.png",
	}
]

export default function Animes() {

	const [request, setRequest] = useState(null);
	const [content, setContent] = useState<any>(null);

	const [isLoading, SetIsLoading] = useState(true);

	useEffect(() => {
		async function data() {
			let requestAnimes = await fetch('http://127.0.0.1:8080/anime/all').then(response => response.json())
			setRequest(requestAnimes);
			setContent(requestAnimes.content);
			SetIsLoading(false);
		}

		data();
	}, []);
	console.log(request);


	return (
		<>
			<Input placeholder="Search" className="mb-6" />

			<div className="flex gap-5 justify-center">
				{isLoading ? (
					<p>Loading</p>
				) : content.map((anime: any) => (
					<Card key={anime.animeId} className="w-48 max-h-60">
						<CardHeader className="h-48">
							{anime.animeImg}
						</CardHeader>
						<CardContent className="">
							<p className="text-xl font-semibold">{anime.animeTitle.animeTitleDefault}</p>
						</CardContent>
					</Card>
				))}
			</div>

			<Pagination className="mt-6">
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious href="#" />
					</PaginationItem>
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
					<PaginationItem>
						<PaginationNext href="#" />
					</PaginationItem>
				</PaginationContent>
			</Pagination>

		</>
	);
}
