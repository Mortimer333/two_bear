import React from 'react'
import { faBeerMugEmpty, faMugHot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { padReview } from "@function/review";

interface IReviewFloaterProps {
  foodReviewCoffee: number;
  localReviewCoffee: number;
  locationReviewCoffee: number;
  foodReviewBeer: number;
  localReviewBeer: number;
  locationReviewBeer: number;
}

const ReviewFloater: React.FC<IReviewFloaterProps> = (
  {
    foodReviewCoffee,
    localReviewCoffee,
    locationReviewCoffee,
    foodReviewBeer,
    localReviewBeer,
    locationReviewBeer,
  }
) => {
  return <div
    className="
                text-[--background] text-right rounded
                flex flex-col justify-center items-center
                bg-[--yellow] inline-block mr-2 mb-2 float-left w-[75px] h-[75px]
              "
  >
    <div>
      <FontAwesomeIcon icon={faMugHot} className="inline h-[15px] mr-2"/>
      {padReview((foodReviewCoffee + localReviewCoffee + locationReviewCoffee)/3)}/5
    </div>
    <span>
      <FontAwesomeIcon icon={faBeerMugEmpty} className="inline h-[15px] mr-2"/>
      {padReview((foodReviewBeer + localReviewBeer + locationReviewBeer)/3)}/5
    </span>
  </div>
};

export default ReviewFloater
