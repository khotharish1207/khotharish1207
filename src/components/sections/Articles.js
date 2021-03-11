import React, { Component } from "react";
import Article from "../elements/Article";
import GithubRepoCard from "../elements/GithubRepoCard/GithubRepoCard";
import getTheme from "../../themeUtil";
const theme = getTheme();

class Articles extends Component {
  constructor(props) {
    super();
    this.state = {
      articles: [],
      githubRepo: [],
    };
  }

  componentDidMount() {
    const devTo =
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@khot.harish1207";

    fetch(devTo)
      .then((response) => {
        return response.json();
      })
      .then(({ items: data }) => {
        // console.log(data)
        let articles = [];
        data = data.slice(0, 4);
        data.forEach((element, index) => {
          articles.push(
            <div className="column" key={index}>
              <Article
                key={index}
                title={element.title}
                url={element.link}
                image={element.thumbnail}
                extract={element.content}
              />
            </div>
          );
        });
        var offset = 4 - data.length;
        for (var i = 0; i < offset; i++) {
          articles.push(<div key={i + "_offset"} className="column"></div>);
        }
        this.setState({ articles: articles });
      });

    fetch("/profile.json")
      .then((result) => {
        if (result.ok) {
          return result.json();
        }
        throw result;
      })
      .then((response) => {
        this.setState({ githubRepo: response.data.user.pinnedItems.edges });
        console.log(response.data.user.pinnedItems.edges);
      });
  }

  render() {
    return (
      <section className="section" id="articles">
        <div className="container">
          <h1 className={`title ${theme.text2}`}>Articles</h1>
          <h2 className="subtitle is-4">My latest articles</h2>
          <div className="columns">{this.state.articles}</div>
        </div>
        <div className="container">
          <br />
          <h1 className={`title ${theme.text2}`}>Github Projects</h1>
          <div className="repo-cards-div-main">
            {this.state.githubRepo.map((v, i) => {
              return <GithubRepoCard repo={v} key={v.node.id} isDark={false} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Articles;
