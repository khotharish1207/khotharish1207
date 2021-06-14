import React from "react";

function toText(node) {
  let tag = document.createElement("div");
  tag.innerHTML = node;
  node = tag.innerText;
  return node;
}
function shortenText(text, startingPoint, maxLength) {
  return text.length > maxLength ? text.slice(startingPoint, maxLength) : text;
}

// shortenText(toText(item.content),60, 300)

function Article(props) {
  return (
    <div className="card article-card">
      <div className="card-header">
        <a href={props.url} target="blank">
          <p className="card-header-title">{props.title}</p>
        </a>
        {/* <a
          href={props.url}
          target="blank"
          className="card-header-icon"
          aria-label="Dev Community"
        >
        </a> */}
      </div>
      <div className="card-image">
        <img
          style={{
            objectFit: "contain",
            height: "100%",
            width: "100%",
          }}
          src={props.image}
          alt=""
        />
      </div>
      <div className="card-content">
        {/* <h1 className="heading">DEV.TO</h1> */}
        <div className="content">
          {/* {props.extract} */}
          <div
            dangerouslySetInnerHTML={{
              __html: shortenText(toText(props.extract), 0, 300),
            }}
          />
        </div>
        <a href={props.url} target="blank">
          Read the full article
        </a>
      </div>
    </div>
  );
}

export default Article;
