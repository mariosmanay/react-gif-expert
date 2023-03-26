export const getGifs = async (category) => {

const url = `https://api.giphy.com/v1/gifs/search?api_key=bNCBFfP2u9IZpoaLC0x4tzr9d7eGM39K=${category}$limit=10`;
const resp = await fetch(url);
const {data} = await resp.json();

const gifs = data.map( img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
}))

return gifs
}