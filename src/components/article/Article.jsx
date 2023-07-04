import React from 'react';
import "./article.css";

const Article = ({image, date, title}) => {
  return (
    <div className='gpt3__article'>
        <img src={image} alt="" />
        <div className='gpt3__article-container'>
          <p>{date}</p>
          <h1>{title}</h1>
          <p className='gpt3__article-foot'>Read Full Article</p>
        </div>
    </div>
  )
}

export default Article