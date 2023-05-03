import axios from "axios";
import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, query, where, getDocs, setDoc } from "firebase/firestore";

export default function Main(props) {
  const [sentiments, changeSentiments] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "users"), where("email", "==", props.email));
    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        changeSentiments(data.sentiments);
      });
    });
  }, []);

  function predictSentiment(e) {
    e.preventDefault();
    const tweet = document.querySelector(".textarea").value;
    if (tweet.length === 0) {
      alert("Please enter a tweet");
      return;
    }
    axios
      .post("https://sentiment-n7hrhmnsfa-as.a.run.app/", {
        text: tweet,
      })
      .then(function (response) {
        const senti =
          response.data["prediction"] === "NEG"
            ? "Bad 😞"
            : response.data["prediction"] === "POS"
            ? "Good 😄"
            : "Neutral 😐";
        const color =
          response.data["prediction"] === "NEG"
            ? "red"
            : response.data["prediction"] === "POS"
            ? "green"
            : "yellow";
        const newSentiments = [
          ...sentiments,
          {
            text: tweet,
            sentiment: senti,
          },
        ];
        changeSentiments(newSentiments);
        const q = query(
          collection(db, "users"),
          where("email", "==", props.email)
        );
        getDocs(q).then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            data.sentiments = newSentiments;
            setDoc(doc.ref, data);
          });
        });
        const sentimentText = document.querySelector(".sentimentText");
        sentimentText.innerHTML = senti;
        const textArea = document.querySelector("textarea");
        textArea.className = `w-full lg:w-1/3 h-1/5 textarea rounded-lg textarea-bordered border-4 border-${color}-600`;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function deleteSentiment(ind) {
    console.log(ind);
    const newSentiments = sentiments.filter((item, index) => index !== ind);
    changeSentiments(newSentiments);
    const q = query(collection(db, "users"), where("email", "==", props.email));
    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        data.sentiments = newSentiments;
        setDoc(doc.ref, data);
      });
    });
  }

  return (
    <>
      <div className="flex lg:flex-row flex-col items-center justify-center py-2 mainDiv">
        <main className="flex flex-col items-center justify-center w-full lg:w-2/4 flex-1 px-4 lg:px-20 text-center">
          <div className="w-full mb-4">
            <p className="sentimentText">ㅤㅤ</p>
          </div>
          <textarea
            className="w-full lg:w-2/3 h-1/5 textarea rounded-lg textarea-bordered border-4"
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
          <div className="mt-4 w-full lg:w-2/3 lg:justify-center lg:flex btn-group btn-group-vertical lg:btn-group-horizontal">
            <button
              className="btn bg-lime-600 hover:bg-lime-800 lg:w-2/3"
              style={{ borderRadius: "0" }}
              onClick={predictSentiment}
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
        <div className="w-full lg:w-2/4 m-4">
          <p className="text-center font-bold mb-4">Your Recent Analysis</p>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Text</th>
                  <th>Sentiment</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {sentiments.length > 0
                  ? sentiments.map((val, index) => {
                      return (
                        <tr key={index}>
                          <td className="truncate overflow-hidden whitespace-nowrap max-w-xs">{val.text}</td>
                          <td>{val.sentiment}</td>
                          <td>
                            <button
                              className="btn btn-ghost btn-sm rounded-btn"
                              onClick={() => deleteSentiment(index)}
                            >
                              <span className="text-xl">🗑️</span>
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
