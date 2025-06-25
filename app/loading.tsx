export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-transparent"></div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-green-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-emerald-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>

      <div className="relative z-10 text-center">
        {/* Loading Spinner */}
        <div className="mb-8">
          <div className="relative">
            {/* Outer Ring */}
            <div className="w-20 h-20 border-4 border-gray-700 rounded-full animate-spin border-t-green-400 mx-auto"></div>

            {/* Inner Ring */}
            <div className="absolute top-2 left-2 w-16 h-16 border-4 border-gray-800 rounded-full animate-spin border-t-emerald-400 animate-reverse"></div>

            {/* Center Dot */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Loading...
          </h2>
          <p className="text-gray-400">Sedang memuat halaman untuk Anda</p>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
          <div
            className="w-2 h-2 bg-green-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-2 h-2 bg-green-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
