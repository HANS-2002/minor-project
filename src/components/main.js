export default function Main() {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-2 mainDiv">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-4 lg:px-20 text-center">
          <div className="w-full mb-4">
            <p className="sentimentText">ㅤㅤ</p>
          </div>
          <textarea
            className="w-full lg:w-1/3 h-1/5 textarea rounded-lg textarea-bordered border-4"
            placeholder="Enter your tweet here"
            style={{ outline: "none", resize: "none" }}
            onFocus={(e) => {
              e.preventDefault();
              e.target.className =
                "w-full lg:w-1/3 h-1/5 textarea border-violet-800 rounded-lg textarea-bordered border-4";
            }}
            onBlur={(e) => {
              e.preventDefault();
              e.target.className =
                "w-full lg:w-1/3 h-1/5 textarea rounded-lg textarea-bordered border-4";
            }}
          ></textarea>
          <div className="mt-4 w-full lg:w-1/3 lg:justify-center lg:flex btn-group btn-group-vertical lg:btn-group-horizontal">
            <button
              className="btn bg-lime-600 hover:bg-lime-800 lg:w-2/3"
              style={{ borderRadius: "0" }}
              onClick={(e) => {
                e.preventDefault();
                const tweet = document.querySelector(".textarea").value;
                if (tweet.length === 0) {
                  alert("Please enter a tweet");
                  return;
                }
                const sentimentText = document.querySelector(".sentimentText");
                sentimentText.innerHTML = "Good 😄";
                const textArea = document.querySelector("textarea");
                textArea.className =
                  "w-full lg:w-1/3 h-1/5 textarea rounded-lg textarea-bordered border-4 border-green-600";
                // textArea.className = "w-full lg:w-1/3 h-1/5 textarea rounded-lg textarea-bordered border-4 border-red-600";
              }}
            >
              Predict Sentiment
            </button>
            <button
              className="btn bg-red-600 hover:bg-red-800 lg:w-1/3"
              style={{ borderRadius: "0" }}
              onClick={(e) => {
                e.preventDefault();
                window.location.reload();
              }}
            >
              Reset
            </button>
          </div>
        </main>
      </div>
    </>
  );
}
