import avatar from "../assets/download.jpeg";

const TopMenu = () => {
  return (
    <div className="flex justify-between my-2 bg-white pb-2">
      <img
        src="https://mlv2av5beeba.i.optimole.com/co-ZpyQ-iA0Rzjrd/cb:muaBiJcc.luPxm7Wo/w:auto/id:0c38dffe77a3d3bf3d7d97d9156235a6/directUpload/image-12.png"
        alt="Logo"
        className="max-w-[63px] max-h-[60px] ml-12"
      />

      <div className="flex justify-center mr-8">
        <div className="flex mr-16 bg-[#E5E5E5] p-4 h-10 text-[16px] self-center">
          <p className="self-center mr-2 ">Português (PT)</p>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="self-center mx-2"
          >
            <path
              d="M4.00076 6.53313C4.50085 7.15573 5.50157 7.1556 6.00149 6.53288L9.74814 1.86589C10.3656 1.09681 9.77746 0 8.74767 0L1.25233 0C0.222388 0 -0.365661 1.09709 0.252063 1.86613L4.00076 6.53313Z"
              fill="#42474B"
            />
          </svg>
        </div>

        {/* Notification bell icon */}
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="self-center mr-3"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.3485 17.8077V11.3974C20.3485 7.46154 18.246 4.16667 14.5793 3.29487V2.42308C14.5793 1.35897 13.7075 0.5 12.6434 0.5C11.5793 0.5 10.7332 1.35897 10.7332 2.42308V3.29487C7.05368 4.16667 4.96393 7.44872 4.96393 11.3974V17.8077L3.29727 19.4615C2.48957 20.2692 3.05368 21.6538 4.1947 21.6538H21.0793C22.2203 21.6538 22.7973 20.2692 21.9896 19.4615L20.3485 17.8077ZM12.6427 25.5C14.053 25.5 15.2068 24.3462 15.2068 22.9359H10.0786C10.0786 24.3462 11.2197 25.5 12.6427 25.5ZM5.95009 3.35901C6.48855 2.87183 6.50137 2.0385 5.98855 1.52568C5.50137 1.0385 4.7065 1.02568 4.2065 1.50004C2.01419 3.50004 0.501373 6.21799 0.0141935 9.26927C-0.101191 10.0513 0.501373 10.7564 1.29624 10.7564C1.91163 10.7564 2.45009 10.3077 2.55265 9.69235C2.93727 7.20517 4.16804 4.98722 5.95009 3.35901ZM21.1158 1.50004C20.6029 1.02568 19.8081 1.0385 19.3209 1.52568C18.8081 2.0385 18.8337 2.85901 19.3593 3.34619C21.1286 4.9744 22.3722 7.19235 22.7568 9.67952C22.8465 10.2949 23.385 10.7436 24.0132 10.7436C24.7952 10.7436 25.4106 10.0385 25.2824 9.25645C24.7952 6.21799 23.2952 3.51286 21.1158 1.50004Z"
            fill="#C3CAD9"
          />
        </svg>

        {/* Vertical line icon             */}
        <svg
          width="2"
          height="40"
          viewBox="0 0 2 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="self-center"
        >
          <rect x="0.299316" width="1" height="40" fill="#C3CAD9" />
        </svg>

        {/* user Avatar */}
        <div className="flex self-center ml-3">
          <div
            className="w-[40px] h-[40px] border-transparent border-solid rounded-full"
            style={{
              backgroundImage: `url(${avatar})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="flex flex-col justify-center self-center">
            <span className="font-bold">Rhuanna Miranda</span>
            <span>Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
