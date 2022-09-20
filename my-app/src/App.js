import React from "react";
// let marked = require ('marked');
import { marked } from 'marked';
import './app.scss'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder
    };
  }

  updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  render() {
  

    return (
      <div className="App">
        <div className="container">
          <div className="row mt-4">
            <div className="col text-center">
              <h1>
                {" "}
                <div className="header m-header">
                  Markdown Previewer
                </div>
              </h1>
              <div className="author">
                <h5>Coded by <a class="anc" target="_blank" href="https://www.linkedin.com/in/silver-okonkwo-a08493175/">techMomma</a></h5>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-6">
              {" "}
              <div className="col header">
                <h4>
                  <div>
                    Editor
                  </div>
                </h4>
              </div>
              <div className="input">
                <textarea className="input"
                  value={this.state.markdown}
                  onChange={(e) => {
                    this.updateMarkdown(e.target.value);
                  }}
                >
                  {/* {console.log(this.state.markdown)} */}
                </textarea>
              </div>
            </div>
            {" "}
            <div className="col-md-6">
              <div className="col header text-center">
                <h4>
                  <div>
                    Previewer
                  </div>
                </h4>
              </div>
              <div class="prev" dangerouslySetInnerHTML={{ __html: marked(this.state.markdown)}}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const placeholder = `# Welcome to techMomma's Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org).

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That looks like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;
