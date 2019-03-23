export function shuffle<T>(items: T[]) {
    return items
        .map(x => ({ x, i: Math.random() }))
        .sort((a, b) => a.i - b.i)
        .map(x => x.x);
}