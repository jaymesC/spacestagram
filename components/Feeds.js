import React, {useState} from 'react'
import Image from "next/image";



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
        {like ? "like" : "unlike"}
      </button>
    </div>
  );
}

export default Feeds
