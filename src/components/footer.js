export default function Footer() {
  return (
    <>
      <footer className="flex items-center justify-between flex-wrap text-white bg-blue-500 p-2">
        {/* <div className="flex items-center flex-shrink-0 mr-6 ml-2"> */}
        <span className="font-semibold w-full text-lg text-center tracking-tight">
          Made with ❤️ by
          <a
            href="https://github.com/HANS-2002"
            target="_blank"
            rel="noreferrer"
            className="text-green-500 drop-shadow-2xl"
          >
            {" Hans "}
          </a>
          and
          <a
            href="https://github.com/TechyAditya"
            target="_blank"
            rel="noreferrer"
            className="text-green-500 drop-shadow-2xl"
          >
            {" Aditya "}
          </a>
        </span>
        {/* </div> */}
      </footer>
    </>
  );
}
