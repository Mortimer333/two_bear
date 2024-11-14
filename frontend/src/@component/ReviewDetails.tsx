import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCouch, faLocationDot, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { padReview } from "@function/review";

interface IReviewDetailsProps {
  mug: React.ReactNode;
  foodReview: number;
  foodDesc: string;
  localReview: number;
  localDesc: string;
  locationReview: number;
  locationDesc: string;
}

const ReviewDetails: React.FC<IReviewDetailsProps> = (
  {
    mug,
    foodReview,
    foodDesc,
    localReview,
    localDesc,
    locationReview,
    locationDesc,
  }
) => {
  return <div className="my-5">
    <div className="bg-[--yellow] p-5 text-[--background] text-2xl rounded-t-xl flex-center">
      {mug}
      {padReview((foodReview + localReview + locationReview)/3)}/5
    </div>
    <div className="white-bucket p-3 flex items-center gap-5">
      <div className="w-[25px] flex-center">
        <FontAwesomeIcon icon={faUtensils} className="h-[25px]"/>
      </div>
      <p>{padReview(foodReview)}/5</p>
      <p>{foodDesc}</p>
    </div>
    <div className="white-bucket p-3 flex items-center gap-5">
      <div className="w-[25px] flex-center">
        <FontAwesomeIcon icon={faCouch} className="h-[25px]"/>
      </div>
      <p>{padReview(localReview)}/5</p>
      <p>{localDesc}</p>
    </div>
    <div className="white-bucket p-3 flex items-center gap-5 rounded-b-xl">
      <div className="w-[25px] flex-center">
        <FontAwesomeIcon icon={faLocationDot} className="h-[25px]"/>
      </div>
      <p>{padReview(locationReview)}/5</p>
      <p>{locationDesc}</p>
    </div>
  </div>
};

export default ReviewDetails
