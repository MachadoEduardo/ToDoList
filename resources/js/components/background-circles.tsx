export default function BackgroundBlobs() {
  return (
    <>
      <div className="absolute top-[70px] right-[90px] sm:right-[170px] h-32 w-32 xl:h-48 xl:w-48 bg-primary blur-3xl rounded-full opacity-60 animate-float"></div>

      <div className="absolute bottom-[90px] left-[60px] h-32 w-32 xl:h-48 xl:w-48 bg-green-500 blur-3xl rounded-full opacity-60 animate-float-delayed"></div>

      <div className="absolute top-[100px] left-[0px] h-32 w-32 xl:h-48 xl:w-48 bg-blue-500 blur-3xl rounded-full opacity-60 animate-float-slow"></div>

      <div className="absolute bottom-[300px] right-[120px] h-32 w-32 xl:h-48 xl:w-48 bg-yellow-500 blur-3xl rounded-full opacity-60 animate-float"></div>
    </>
  );
}