import React, { Component } from "react";
import { IBlogPost } from "./blog-types";
import { MarkdownPreview } from 'react-marked-markdown';
import { Accordion, AccordionTab } from "primereact/accordion";
import "./blog.css";

type IBlogPostViewModel = IBlogPost & { key: string, isSelected?: boolean, toggle?: () => void };
class BlogList extends Component<{ articles: IBlogPost[] }, { articles: IBlogPostViewModel[], selected: null | IBlogPostViewModel }> {
    constructor(props: any) {
        super(props);
        this.state = {
            articles: this.props.articles.map((x, i) => ({ ...x, key: i + '' })),
            selected: null,
        };
    }

    Post = ({ post }: { post: IBlogPostViewModel }) => (
        <div className='blog-post'>
            <h1 className={post.isSelected ? 'blog-post-title blog-post-title-expanded' : 'blog-post-title blog-post-title-collapsed'}
                onClick={post.toggle}>
                <span>{post.title}</span>
            </h1>
            <div className={post.isSelected ? 'blog-post-content' : 'blog-post-content blog-post-content-collapsed'}>
                <MarkdownPreview value={post.isSelected ? post.content : post.abstract} />
            </div>
            {!post.isSelected && (<div className='blog-post-more' onClick={post.toggle}><div>Read More...</div></div>)}
        </div>
    );

    toggle = (post: IBlogPostViewModel) => {
        post.isSelected = !post.isSelected;
        const selected = post.isSelected ? post : null;
        this.setState({ selected });
    }

    render() {

        // // Using Accordion
        // return (
        //     <Accordion multiple={true}>
        //         {this.state.articles.map(x => (
        //             <AccordionTab header={x.title}><MarkdownPreview value={x.content} /></AccordionTab>
        //         ))}
        //     </Accordion>
        // );

        this.state.articles.forEach(x => {
            if (!x.toggle) {
                x.toggle = () => this.toggle(x);
            }
        });

        const shouldHideUnselected = false;

        return (
            <div className='blog-list'>
                <h3>{this.state.articles.length} Articles</h3>
                {(shouldHideUnselected && !!this.state.selected) && <this.Post post={this.state.selected} />}
                {(!shouldHideUnselected || !this.state.selected) && this.state.articles.map((x, i) => (<this.Post key={i} post={x} />))}
            </div>
        );
    }
}

export default BlogList;