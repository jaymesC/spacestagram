import React, {useState} from 'react'
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/solid";




function Feeds({ url, explanation }) {
  const [like, setLike] = useState(true);
//   console.log(data);
  return (
    <div>
      <Image src={url} alt="" width="300" height="300" className="rounded" />
      <p className="text-center w-80">{explanation}</p>
      <button
        type="button"
        className="rounded text-red-600 border-2"
        onClick={() => setLike(!like)}
      >
        <HeartIcon
          className={`h-10 w-10 border-2 ${
            like ? "text-gray-300" : "text-current"
          }`}
        />
      </button>
    </div>
  );
}

export default Feeds
