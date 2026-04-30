import React from "react";

export const RatingCircle = ({ value, text }) => {
  console.log("RatingCircle", value);

  return (
    <>
      <div class="rating-circle">{Math.round(value * 10)}%</div>
      <span class="movieTitle">{text}</span>
    </>
  );
};
