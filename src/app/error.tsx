"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-6xl font-bold text-destructive">Oops</h1>
      <p className="text-xl text-muted-foreground mt-4">
        Something went wrong
      </p>
      <p className="text-sm text-muted-foreground mt-2">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={() => reset()}
        className="mt-6 px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
}
