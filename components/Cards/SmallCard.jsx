import { Plus } from "lucide-react";
import React from "react";

const SmallCard = ({ bgImage, posterImg, movieName, cardType, watched }) => {
  const bgImageURL =
    "https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/7cqKGQMnNabzOpi7qaIgZvQ7NGV.jpg";
  const portraitIMG =
    "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/2zmTngn1tYC1AvfnrFLhxeD82hz.jpg";

  return (
    <div
      style={{
        background: `url(${bgImageURL})`,
        backgroundSize: "cover",
        backgroundColor: "#1e1818b3",
        backgroundBlendMode: "multiply",
      }}
      className="p-2 rounded-lg w-60"
    >
      <div className={`${cardType == "" ? "flex gap-2" : ""}`}>
        {!cardType == "" ? (
          <img
            src={portraitIMG}
            style={{ height: 80, width: 80 }}
            className="rounded-lg"
          />
        ) : (
          ""
        )}
        {!cardType == "" ? (
          <div>
            <h5 className="font-semibold">Movie Name</h5>
            <h5 className="text-gray-400">1st Episode</h5>
            <span
              style={{ width: "100px", background: "white", height: 3 }}
              className="block rounded mt-3"
            >
              <span
                style={{ height: 3, width: 90 }}
                className="bg-yellow-500 block"
              ></span>
            </span>
          </div>
        ) : (
          <div>
            <h5 className="font-semibold">Movie Name</h5>
            <div className="flex justify-between">
              <span>320 Ep</span>
              <span>Horror</span>
            </div>
          </div>
        )}
      </div>
      <div className="flex gap-2 mt-2">
        {!cardType ? (
          <button className="transParentBtn py-2 px-3 font-semibold">
            <Plus />
          </button>
        ) : (
          <button className="transParentBtn py-2 px-3 font-semibold">
            Drop
          </button>
        )}

        <button className="py-2 bg-yellow-500 rounded-lg text-black font-semibold w-full">
          Watch
        </button>
      </div>
    </div>
  );
};

export default SmallCard;
