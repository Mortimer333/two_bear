import React from 'react'
import Image from "next/image";

interface IArticleMainImageProps {
  main: string;
  logo: string;
  alt: string;
  restaurantName: string;
}

const ArticleMainImage: React.FC<IArticleMainImageProps> = (
  {
    main,
    alt,
    restaurantName,
  }
) => {
  return <div className="relative max-h-[300px] rounded-b-2xl overflow-hidden flex justify-center items-center">
    <Image
      className="w-full blur-md grayscale-[.5]"
      src={main}
      alt={alt}
      width={800}
      height={500}
      priority
    />
    <h1 className="neon-text text-7xl absolute text-center">{restaurantName}</h1>
  </div>
};

export default ArticleMainImage
