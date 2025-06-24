import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="text-center">
        <h1 className="mb-4">Yoo select a algo to Visualize!</h1>
        <Link href="/insertionSort">
          <button className="m-1 border border-black px-4 py-2">
            Insertion Sort
          </button>
        </Link>
        <Link href="/bubbleSort">
          <button className="m-1 border border-black px-4 py-2">
            Bubble Sort
          </button>
        </Link>
      </main>
    </div>
  );
}
