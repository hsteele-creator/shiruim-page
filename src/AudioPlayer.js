import React from "react";

export const AudioPlayer = () => {

    const url = "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3" 

    const download = () => {
        return <a href={url} download></a>
    }

  return (
    <>
    <audio controls>
      <source src={url} type="audio/mpeg"></source>
    </audio>

    <a href={url} download>Download</a>
    </>
  );
};
