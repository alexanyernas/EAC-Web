export const requireImage = (link: string) => {
    return new URL(`/src/assets/images/examples/${link}`, import.meta.url).href;
}