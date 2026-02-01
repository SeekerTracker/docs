import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1 gap-4 p-8">
      <h1 className="text-4xl font-bold">SeekerTracker</h1>
      <p className="text-lg text-muted-foreground">
        Documentation for SeekerTracker
      </p>
      <div className="mt-4">
        <Link
          href="/docs"
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
        >
          Get Started →
        </Link>
      </div>
    </div>
  );
}
