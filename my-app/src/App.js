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
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-6">
              {" "}
              <div className="col header">
                <h4>
                  <div className="header">
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
                  <div className="header">
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

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;
