import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface IBackProps {
  href: "/",
}

const Back: React.FC<IBackProps> = (
  {
    href
  }
) => {
  return <Link href={href} className="text-sm inline">
    <FontAwesomeIcon icon={faArrowLeft} height={50}/>
  </Link>
};

export default Back
