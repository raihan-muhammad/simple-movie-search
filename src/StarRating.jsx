import { useState } from "react";
import Star from "./Star";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
};

const textStyle = {
  lineHeight: "1",
  margin: "0",
};

function StarRating({ maxRating = 5 }) {
  const [rating, setRating] = useState(0);

  const handleRating = (rating) => {
    setRating(rating);
  };
  return (
    <section style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => setRating(i + 1)}
            full={rating >= i + 1}
          />
        ))}
      </div>
      <p style={textStyle}>{rating || ""}</p>
    </section>
  );
}

export default StarRating;
