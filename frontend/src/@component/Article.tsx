import React from 'react'
import Image from "next/image";

interface IArticleProps {
  link: string;
  main: string;
  logo: string;
  maps: string;
  date: string;
  stars: string;
  street: string;
  title: string;
  description: string;
  maxWidth?: number;
}

const Article: React.FC<IArticleProps> = (
  {
    link,
    main,
    logo,
    maps,
    date,
    stars,
    street,
    title,
    description,
    maxWidth = 50,
  }
) => {
  return <article className="food-item">
    <a href={link}>
      <div className="w-full h-0 pb-[50%] overflow-hidden rounded-t-xl food-item-hero">
        <Image
          className="w-full rounded-xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          src={main}
          alt="Main"
          width={400}
          height={300}
          priority
        />
        <Image
          className="absolute right-5 top-5 food-item-logo"
          style={{
            maxWidth: maxWidth + 'px',
          }}
          src={logo}
          alt="Logo"
          width={100}
          height={120}
          priority
        />
        <div className="food-item-hero-overlay"></div>
      </div>
    </a>
    <div className="bg-[--black] px-3 py-5 rounded-b-xl relative z-1">
      <small className="mb-3 inline-block text-lg">
        {date} |
        <a href={maps}
          target="_blank"
          className="blue-link "
          rel="nofollow noreferrer">
          {street}
        </a> | {stars}/5
      </small>
      <h1 className="neon-text mb-5">{title}</h1>
      <p className="text-md short-text-2">{description}</p>
    </div>
  </article>
};

export default Article
