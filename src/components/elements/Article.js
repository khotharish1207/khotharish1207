import React from "react";

function toText(node) {
  let tag = document.createElement('div')
  tag.innerHTML = node
  node = tag.innerText
  return node
}
function shortenText(text, startingPoint, maxLength) {
  return text.length > maxLength ?
    text.slice(startingPoint, maxLength) :
    text
}

// shortenText(toText(item.content),60, 300)

function Article(props) {
  return (
    <div className="card">
      <div className="card-header">
        <a href={props.url} target="blank">
          <p className="card-header-title">{props.title}</p>
        </a>
        <a
          href={props.url}
          target="blank"
          className="card-header-icon"
          aria-label="Dev Community"
        >
          {/* <span className="icon">
            <i className="fab fa-2x fa-dev"></i>
          </span> */}
        </a>
      </div>
      <div className="card-image">
        <figure className="image">
          <img width="1000" height="420" src={props.image} alt="" />
        </figure>
      </div>
      <div className="card-content">
        {/* <h1 className="heading">DEV.TO</h1> */}
        <div className="content">
          {/* {props.extract} */}
          <div dangerouslySetInnerHTML={{ __html: shortenText(toText(props.extract),0, 300) }} />
        </div>
        <a href={props.url} target="blank">
          Read the full article
        </a>
      </div>
    </div>
  );
}

export default Article;
