import React from "react";
import ReactMarkdown from "react-markdown";

import { terms } from './terms_markdown';


const Content = () => (
  <div className="content-container">
    <div className="content-inner">
      <div className="content-header">
        <h1>Όροι Χρήσης</h1>
      </div>
      <div className="content-main">
        <ReactMarkdown className="markdown" source={terms} />
      </div>
    </div>
    <style jsx>{`
      .content-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 4rem;
        margin-bottom: 4rem;
      }
      .content-inner {
        display: flex;
        flex-direction: column;
        width: 60%;
        flex: 1 1 auto;
      }
      .content-header > h1 {
        color: #484848;
        font-weight: 500;
      }
      @media (max-width: 768px) {
        .content-inner {
          width: 80%;
        }
      }
    `}</style>
  </div>
);

export default Content;
