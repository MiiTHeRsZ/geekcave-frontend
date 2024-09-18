import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Root() {
	return (
		<>
			<h1 className="text-3xl font-bold underline">Root</h1>
			<h2 className="flex justify-center items-center">
				<Link href="/home" className="text-5xl">Home</Link>
			</h2>
		</>
	);
}
