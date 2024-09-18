import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function CustomCard() {
    return (
        <Card className="w-48">
            <CardHeader>
                header
            </CardHeader>
            <CardContent>
                <CardTitle>title</CardTitle>
                <CardDescription>Desc</CardDescription>
            </CardContent>
        </Card>
    );
}