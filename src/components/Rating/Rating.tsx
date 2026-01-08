import "./Rating.scss";

export default function Thumbnail({ rating }: { rating: number }) {
  return (
    <div className="rating">
      {[...Array(5)].map((_, index) => {
        if (index < rating) {
          return <img src="/images/star.svg" alt="star" key={index} />;
        } else {
          return (
            <img src="/images/star-grey.svg" alt="grey star" key={index} />
          );
        }
      })}
    </div>
  );
}
