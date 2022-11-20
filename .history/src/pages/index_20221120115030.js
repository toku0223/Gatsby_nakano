// src/pages/index.js
import { graphql, useStaticQuery } from 'gatsby';
import React from "react";
import Hero from "../components/hero";
import Layout from "../components/layout";
import PostLink from "../components/post-link";
import Seo from '../components/seo';

<Seo title="Dev Blog" description="Gatsbyを使って作ったブログです" />

export default function Home() {
  const query = useStaticQuery(
    graphql`
      query {
        allContentfulPost {
          edges {
            node {
              title
              image {
                title
                file {
                  url
                }
              }
              description {
                description
              }
              slug
              updatedAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
            }
          }
        }
      }
    `
  );
  return (
    <Layout>
      <Hero />
      {query.allContentfulPost.edges.reverse().map((edge) => (
        <PostLink key={edge.node.slug} post={edge.node} />
      ))}
    </Layout>
  )
}