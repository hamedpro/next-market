"use client";

import { useEffect, useState } from "react";
import Parse from "@/lib/parse";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const [names, setNames] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRandomNames = async () => {
      try {
        setLoading(true);
        const result = await Parse.Cloud.run("getRandomNames");
        setNames(result);
        setError(null);
      } catch (err) {
        setError("Failed to fetch random names. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRandomNames();
  }, []);

  return (
    <div className="container py-10">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Random Names</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-2">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-6 w-full" />
              ))}
            </div>
          ) : error ? (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          ) : (
            <ul className="space-y-2">
              {names.map((name, index) => (
                <li key={index} className="p-2 bg-muted rounded-md">{name}</li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
