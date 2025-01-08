export const Left = ({ cities, search }) => {
  return (
    <div className="flex flex-col   bg-gray-400 text-gray-800 ">
      <div className="w-[884px] h-[100%] flex flex-col items-center justify-center  ">
        <div className="w-[414px] h-[828px] shrink-0 rounded-[48px] bg-white  backdrop-blur-sm flex flex-col items-center justify-center">
          <p>January 7, 2025</p>
          <div>{cities.length > 0 && search.map((city) => <p>{city}</p>)}</div>
          <img
            src="https://pinecone-academy-weather-app.vercel.app/_next/image?url=%2Fsun.png&w=640&q=75"
            alt=""
            className="w-[262.108px] h-[262.108px]"
          />
        </div>
      </div>
    </div>
  );
};
