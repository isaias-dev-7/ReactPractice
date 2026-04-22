import { giphyApi } from "../api/giphy.api";
import type { Gif } from "../interfaces/gif.interface";
import type { GiphyResponse } from "../interfaces/giphy.response";

export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
    const res = await giphyApi<GiphyResponse>('/search', {
        params: {
            q: query,
            limit: 10
        },
    });

    return res.data.data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        height: Number(gif.images.original.height),
        width: Number(gif.images.original.width),
    }));
}