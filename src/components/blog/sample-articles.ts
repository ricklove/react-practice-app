import { IBlogPost } from "./blog-types";
import { createAbstract } from "./blog-helpers";

const sampleArticle = `
# Article Title

This is a paragraph that contains the many words that can make up a paragraph.
This is a paragraph that contains the many words that can make up a paragraph. 
This is a paragraph that contains the many words that can make up a paragraph. 

## Sub Title A

This is a paragraph that contains the many words that can make up a paragraph.
This is a paragraph that contains the many words that can make up a paragraph. 
This is a paragraph that contains the many words that can make up a paragraph. 

## Sub Title B

This is a paragraph that contains the many words that can make up a paragraph.
This is a paragraph that contains the many words that can make up a paragraph. 
This is a paragraph that contains the many words that can make up a paragraph. 

## Sub Title C

This is a paragraph that contains the many words that can make up a paragraph.
This is a paragraph that contains the many words that can make up a paragraph. 
This is a paragraph that contains the many words that can make up a paragraph. 
`;

export const sampleArticles: IBlogPost[] = [
    { title: "Title 0", abstract: createAbstract(sampleArticle), content: sampleArticle },
    { title: "Title 1", abstract: createAbstract(sampleArticle), content: sampleArticle.replace('Title', 'Title 01') },
    { title: "Title 2", abstract: createAbstract(sampleArticle), content: sampleArticle.replace('Title', 'Title 02') },
    { title: "Title 3", abstract: createAbstract(sampleArticle), content: sampleArticle.replace('Title', 'Title 03') },
    { title: "Title 4", abstract: createAbstract(sampleArticle), content: sampleArticle.replace('Title', 'Title 04') },
    { title: "Title 5", abstract: createAbstract(sampleArticle), content: sampleArticle.replace('Title', 'Title 05') },
];