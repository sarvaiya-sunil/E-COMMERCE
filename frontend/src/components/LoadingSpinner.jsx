const LoadingSpinner = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <div className="relative h-10 w-10 animate-spin">
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-emerald-500"
            style={{
              transform: `rotate(${i * 45}deg) translateY(-18px)`,
              opacity: 1 - i * 0.1,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingSpinner;
