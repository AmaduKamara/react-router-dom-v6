import { useLocation } from "react-router-dom";

const CoursePriceDetails = () => {
  const location = useLocation();

  return (
    <div className="container mx-auto my-16 text-center">
      <h3 className="text-3xl text-center font-bold">
        Data brought in: --- {location.state}{" "}
      </h3>
    </div>
  );
};

export default CoursePriceDetails;
