// src/templates/post.js
import React from "react";
import Layout from "../components/layout";
import Seo from '../components/seo';
import "../styles/style.css";

<Seo title={title} description={description} />


export default function Post({ pageContext }) {
  const { title, updatedAt, image } = pageContext.post;
  const body = pageContext.post.body.childMarkdownRemark.html;

  return (
    <Layout>
      <div className="post-header">
        <h1>{title}</h1>
        <p className="post-date">{updatedAt}</p>
      </div>
      <img src={image.file.url} className="post-image" alt="post-cover"></img>
      <div dangerouslySetInnerHTML={{ __html: body }} className="post-body" />
    </Layout>
  )
}