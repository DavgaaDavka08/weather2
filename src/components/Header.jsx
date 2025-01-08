export const Header = ({ searchHandler }) => {
  return (
    <div className="p-4 flex w-[567px] min-w-[320] items-center rounded-[48px] bg-[#fff">
      <input
        type="text"
        onChange={searchHandler}
        className="flex items-center flex-[1 0 0] text-black font-sans italic font-thin-[700]"
      />
    </div>
  );
};
