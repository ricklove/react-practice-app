import { IBlogPost } from "./blog-types";
import { createAbstract } from "./blog-helpers";
import faker from "faker";

// const sampleArticle = `
// # Article Title

// This is a paragraph that contains the many words that can make up a paragraph.
// This is a paragraph that contains the many words that can make up a paragraph. 
// This is a paragraph that contains the many words that can make up a paragraph. 

// ## Sub Title A

// This is a paragraph that contains the many words that can make up a paragraph.
// This is a paragraph that contains the many words that can make up a paragraph. 
// This is a paragraph that contains the many words that can make up a paragraph. 

// ## Sub Title B

// This is a paragraph that contains the many words that can make up a paragraph.
// This is a paragraph that contains the many words that can make up a paragraph. 
// This is a paragraph that contains the many words that can make up a paragraph. 

// ## Sub Title C

// This is a paragraph that contains the many words that can make up a paragraph.
// This is a paragraph that contains the many words that can make up a paragraph. 
// This is a paragraph that contains the many words that can make up a paragraph. 
// `;

// export const sampleArticles: IBlogPost[] = [
//     { title: "Title 0", abstract: createAbstract(sampleArticle), content: sampleArticle },
//     { title: "Title 1", abstract: createAbstract(sampleArticle), content: sampleArticle.replace('Title', 'Title 01') },
//     { title: "Title 2", abstract: createAbstract(sampleArticle), content: sampleArticle.replace('Title', 'Title 02') },
//     { title: "Title 3", abstract: createAbstract(sampleArticle), content: sampleArticle.replace('Title', 'Title 03') },
//     { title: "Title 4", abstract: createAbstract(sampleArticle), content: sampleArticle.replace('Title', 'Title 04') },
//     { title: "Title 5", abstract: createAbstract(sampleArticle), content: sampleArticle.replace('Title', 'Title 05') },
// ];

function createArticle(): IBlogPost {
    const title = faker.random.words();
    const content = new Array(5 + (Math.random() * 10) | 0).fill(0).map(x => {
        const type = (5 * Math.random()) | 0;
        switch (type) {
            case 1: return '## ' + faker.lorem.sentence(1 + Math.random() * 2);
            case 2: return `![${faker.random.words()}](${faker.random.image()})`;
            default: return faker.lorem.paragraph(2 + Math.random() * 5);
        }
    }).join('\n\n');
    const abstract = createAbstract(content);
    return { title, abstract, content };
}

export const sampleArticles: IBlogPost[] = new Array(100).fill(0).map(x => createArticle());