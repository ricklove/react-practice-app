import React from "react";
import { Component } from "react";
import { shuffle } from "../utils/shuffle";

export function getFunnyMessages() {
    const messages = [
        "Finding ducks",
        "Milking spiders",
        "Empowering Gnomes",
        "Inspecting Cucumbers",
        "Refactoring Shoelaces",
        "Coding Coffee",
        "Training Penguins",
        "Challenging Assumptions",
        "Delivering Obstacles",
        "Breaking Dance",
        "Avoiding Edges",
        "Cleaning Monitors",
    ];
    return shuffle(messages);
}

export class FunnyMessages extends Component<{}, { messages: string[], index: number }>{
    private _id: NodeJS.Timeout | null = null;

    constructor(props: any) {
        super(props);
        this.state = {
            messages: getFunnyMessages(),
            index: 0,
        };
    }

    componentDidMount() {
        this._id = setInterval(() => {
            this.setState({ index: this.state.index < this.state.messages.length ? this.state.index + 1 : 0 });
        }, 1000);
    }

    componentWillUnmount() {
        if (this._id) { clearInterval(this._id); }
        this._id = null;
    }

    render() {
        return (
            <h3>{this.state.messages[this.state.index]}</h3>
        );
    }
}