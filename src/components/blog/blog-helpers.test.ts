import { createAbstract } from "./blog-helpers";
import { async } from "q";

it("should create abstract", () => {
    const content = `
# Title

With a paragraph    

## Sub Section
`.trim();

    const expected = `
# Title

With a paragraph    
`.trim();

    const abstract = createAbstract(content);
    expect(abstract).toEqual(expected);
});

it("should create abstract (without manual trim)", () => {
    const content = `
# Title

With a paragraph    

## Sub Section
`;

    const expected = `
# Title

With a paragraph    
`.trim();

    const abstract = createAbstract(content);
    expect(abstract).toEqual(expected);
});