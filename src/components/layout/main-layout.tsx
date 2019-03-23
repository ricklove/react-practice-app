import React, { Component } from "react";

export class MainLayout extends Component<{
    content: JSX.Element,
    header?: JSX.Element,
    sidebar?: JSX.Element,
    footer?: JSX.Element,
}> {
    render() {
        return (
            <div className='mainLayout'>
                <div className='header'>{this.props.header}</div>
                <div className='sidebar'>{this.props.sidebar}</div>
                <div className='content'>{this.props.content}</div>
                <div className='footer'>{this.props.footer}</div>
            </div>
        );
    }
}