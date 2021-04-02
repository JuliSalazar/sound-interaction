  
const baseUrl = `${process.env.PUBLIC_URL}/resources/`;

export const getImageSrc = (url: string) => {
    return `${baseUrl}${url}`;
}