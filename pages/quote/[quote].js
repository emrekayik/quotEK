import React, { useState } from 'react';
import { useRouter } from 'next/router';
import people from '../api/data';

const Post = () => {
  const [index, setIndex] = useState(0);
  const { yazar, yazarLink, yazarResmi, soz } = people[index];

  const { query } = useRouter();
  const urlid = query.id;
  return (
    <p className="text-teal-500">
      Quote:
      {parseInt(urlid)}
    </p>
  );
};

export default Post;
