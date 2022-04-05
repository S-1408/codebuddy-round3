import { useEffect, useState } from 'react';

const Posts = () => {
  const [postData, setPostData] = useState();

  useEffect(() => {
    fetch('https://codebuddy.review/posts')
      .then(data => {
        return data.json();
      })
      .then(post => {
        console.log(post.data);
        setPostData(post.data);
      });
    console.log(postData);
  }, [postData]);
  return <div></div>;
};

export default Posts;
