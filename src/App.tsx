import React, { Component } from "react";
import logo from "./logo.svg";
import "primereact/resources/themes/luna-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./App.css";
import "./components/layout/layout.css";
import "./styles/main.css";
import { getToggles, Toggles } from "./feature-toggles/toggles";
import ColumnsSelector from "./components/columns-selector";
import { ProgressBar } from "primereact/progressbar";
import { MainLayout } from "./components/layout/main-layout";
import { FunnyMessages } from "./components/funny-messages";
import BlogList from "./components/blog/blog-list";
import { sampleArticles } from "./components/blog/sample-articles";

class App extends Component<{}, {
  isLoading: boolean,
  error: boolean,
  toggles: Toggles,
}> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: true,
      error: false,
      toggles: { greeting: false },
    };

    // Simulate slow load
    setTimeout(() => {
      this.load();
    }, 3000);
  }

  async load() {
    try {
      const t = await getToggles();
      this.setState({
        isLoading: false,
        toggles: t,
      });
    } catch {
      this.setState({
        error: true,
      });
    }
  }

  render() {

    if (this.state.error) {
      return (
        <h1>
          Oops, it broke!
        </h1>
      );
    }

    if (this.state.isLoading) {
      return (
        <div>
          <ProgressBar mode="indeterminate" />
          <h1>
            Loading...
          </h1>
          <div>
            <FunnyMessages />
          </div>
        </div>
      );
    }

    const toggles = this.state.toggles;

    const content = toggles.greeting ? (
      <div>
        <h1>
          Hello World
        </h1>
        <BlogList articles={sampleArticles} />
      </div>
    ) : (
        <h1>
          Sorry, we're Closed!
      </h1>
      );

    const sidebar = (<ColumnsSelector />);

    return (
      <div>
        <MainLayout
          content={content}
          sidebar={sidebar}
        />
      </div>
    );
  }
}

export default App;
