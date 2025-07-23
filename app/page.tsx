export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-center">Welcome to MyBitcoinSherpa</h1>
      <p className="text-lg mb-6 text-center max-w-xl">
        Your guided path to mastering Bitcoin and crypto. Sign up for our newsletter to get weekly insights, coaching offers, and more.
      </p>
      <form className="w-full max-w-sm">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 rounded-md border border-gray-300 mb-4"
        />
        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white font-semibold rounded-md"
        >
          Sign Up
        </button>
      </form>
    </main>
  );
}
