import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getToggles, Toggles } from "./feature-toggles/toggles";
import ColumnsSelector from "./components/columns-selector";

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
    this.load();
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
        <div>
          Oops, it broke!
        </div>
      );
    }

    if (this.state.isLoading) {
      return (
        <div>
          Loading...
        </div>
      );
    }

    const toggles = this.state.toggles;

    return (
      toggles.greeting ? (
        <div>
          <ColumnsSelector />
          <div>
            Hello World
          </div>
        </div>
      ) : (
          <div>
            Sorry, we're Closed!
          </div>
        )
    );
  }
}

export default App;
