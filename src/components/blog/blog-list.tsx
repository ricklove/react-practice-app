import React, { Component } from "react";
import { IBlogPost } from "./blog-types";
import { MarkdownPreview } from 'react-marked-markdown';
import { Button } from "primereact/button";
import "./blog.css";

type IBlogPostViewModel = IBlogPost & { isSelected?: boolean, toggle?: () => void };
class BlogList extends Component<{ articles: IBlogPost[] }, { articles: IBlogPostViewModel[], selected: null | IBlogPostViewModel }> {
    constructor(props: any) {
        super(props);
        this.state = {
            articles: [...this.props.articles],
            selected: null,
        };
    }

    Post = ({ post }: { post: IBlogPostViewModel }) => (
        <div className='blog-post'>
            <h1 className='blog-post-title' onClick={post.toggle}>{post.isSelected && (<Button onClick={post.toggle} label='Back' />)} {post.title}</h1>
            <div className='blog-post-content'>
                <MarkdownPreview value={post.isSelected ? post.content : post.abstract} />
            </div>
        </div>
    );

    toggle = (post: IBlogPostViewModel) => {
        post.isSelected = !post.isSelected;
        const selected = post.isSelected ? post : null;
        this.setState({ selected });
    }

    render() {

        this.state.articles.forEach(x => {
            if (!x.toggle) {
                x.toggle = () => this.toggle(x);
            }
        });

        return (
            <div className='blog-list'>
                <h3>{this.state.articles.length} Articles</h3>
                {!!this.state.selected && <this.Post post={this.state.selected} />}
                {!this.state.selected && this.state.articles.map((x, i) => (<this.Post key={i} post={x} />))}
            </div>
        );
    }
}

export default BlogList;