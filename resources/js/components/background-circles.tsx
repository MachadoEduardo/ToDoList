export default function BackgroundBlobs() {
  return (
    <>
      <div className="absolute top-76 right-20 bg-primary blur-3xl rounded-full opacity-100 animate-float"></div>

      <div className="absolute top-23 left-20 bg-green-500 blur-3xl rounded-full opacity-60 animate-float-delayed"></div>

      <div className="absolute top-110 left-120 bg-blue-500 blur-3xl rounded-full opacity-60 animate-float-slow"></div>

      <div className="absolute top-0 right-100 bg-yellow-500 blur-3xl rounded-full opacity-60 animate-float"></div>
    </>
  );
}