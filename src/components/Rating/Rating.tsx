import "./Rating.scss";
import star from "@images/star.svg";
import greystar from "@images/star-grey.svg";

export default function Rating({ rating }: { rating: number }) {
  return (
    <div className="rating">
      {[...Array(5)].map((_, index) => {
        if (index < rating) {
          return <img src={star} alt="star" key={index} />;
        } else {
          return <img src={greystar} alt="grey star" key={index} />;
        }
      })}
    </div>
  );
}
