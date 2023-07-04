import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./index";

function Blog() {
  return (
    <div className="gpt3__blog section__margin" id="blog">
      <h1 className="gradient__text">
        A lot is happening,
        <br /> We are blogging about it.
      </h1>
      <div className="gpt3__blog-content ">
        <div className="gpt3__blog-blockA">
          <Article
            image={blog01}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="gpt3__blog-blockB">
          <Article image={blog02} date="Sep 25, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article image={blog03} date="Sep 24, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article image={blog04} date="Sep 23, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article image={blog05} date="Sep 22, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
      </div>
    </div>
  );
}

export default Blog;
