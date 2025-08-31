const Recap = () => {
  // Container min-height based on background image aspect ratio (2125÷1080 = 196.76vh)
  return (
    <div className="relative bg-[url('/assets/recap/background.png')] bg-cover bg-center bg-no-repeat w-[196.76vh] h-screen flex flex-col items-center">
      Recap
    </div>
  );
};

export default Recap;
