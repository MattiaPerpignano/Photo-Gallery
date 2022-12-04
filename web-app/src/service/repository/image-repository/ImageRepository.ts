import { GalleryBody } from "../models/ImageModel";
import { apiEndPoint } from "../models/ImageRepositoryConfiguration";

export class ImageRepository {
    private imageEndpoint = apiEndPoint;


    public async get(keyword: string, after?: string) {
        let params = after ? `after=${after}` : '';
        let res = await fetch(`${this.imageEndpoint}${keyword}/top.json?${params}`);
        return await res.json() as GalleryBody;
    }
}

export const imageRepository = new ImageRepository();