export function createAbstract(content: string) {
    const firstSection = (content.trim().match(/(^#+|[^#])+/) || [])[0];
    return firstSection.trim();
}