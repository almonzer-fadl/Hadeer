import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <Image
              className="mx-auto dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
            <h1 className="text-4xl font-bold tracking-tight">
              Welcome to Your Next.js App
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your project is now configured with Next.js, Tailwind CSS v4, and shadcn/ui components.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
            <Button variant="secondary" size="lg">
              Documentation
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="p-6 border rounded-lg bg-card">
              <h3 className="text-lg font-semibold mb-2">Next.js 15</h3>
              <p className="text-muted-foreground">
                The latest version with App Router and React 19 support.
              </p>
            </div>
            <div className="p-6 border rounded-lg bg-card">
              <h3 className="text-lg font-semibold mb-2">Tailwind CSS v4</h3>
              <p className="text-muted-foreground">
                The newest version with improved performance and features.
              </p>
            </div>
            <div className="p-6 border rounded-lg bg-card">
              <h3 className="text-lg font-semibold mb-2">shadcn/ui</h3>
              <p className="text-muted-foreground">
                Beautiful, accessible components built with Radix UI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
