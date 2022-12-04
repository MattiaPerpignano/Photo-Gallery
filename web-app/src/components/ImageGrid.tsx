import React, { useEffect, useRef, useState } from 'react';
import { Post } from '../screens/models/ViewImageModel';
import styles from '../screens/HomePage/HomePageStyle.module.scss';

interface ImageGridProps {
    images?: Post[],
    gridRef?: any,
    handleScroll?: (e: any) => void,
    onPressFavorites?: (favorite: Post) => void,
    favorites: Post[],
    isLoading: boolean
}

function ImageGrid({ images, gridRef, handleScroll, onPressFavorites, favorites, isLoading }: ImageGridProps) {
    let getVideoUrlFormEmbededContent = (text: string): string => {
        let res = text.match(/(?<=src=\")(.*)(?=")/g);


        if (res) {
            return res[0];
        }
        return '';
    }
    return (<>
        {images && images.length > 0 ? <div className={styles.galleryContainer} ref={gridRef} onScrollCapture={handleScroll}>
            {images?.map((image, index, arr) => {
                return <div
                    key={image.data.title}>
                    <svg onClick={() => onPressFavorites && onPressFavorites(image)} className={`${styles.favoriteButton} ${favorites.indexOf(image) !== -1 ? styles.selected : ' '}`} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox='0 0 20 19'  >
                        <path d="M0,0.054V20h21V0.054H0z M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855 l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z" />
                    </svg>
                    {image.data.media_embed.content
                        ? <iframe src={getVideoUrlFormEmbededContent(image.data.media_embed.content)}></iframe>
                        : image.data.is_video
                            ? <iframe src={image.data.url}></iframe>
                            : < img src={image.data.url} />}
                </div>
            }
            )}

            {(isLoading && (images?.length % 4 > 0 || images?.length % 4 == 0)) && <div className={styles.loaderContainer}><div className={styles.loader} /></div>}
            {(isLoading && (images?.length % 4 > 1 || images?.length % 4 == 0)) && <div className={styles.loaderContainer}><div className={styles.loader} /></div>}
            {(isLoading && (images?.length % 4 > 2 || images?.length % 4 == 0)) && <div className={styles.loaderContainer}><div className={styles.loader} /></div>}
            {(isLoading && images?.length % 4 == 0) && <div className={styles.loaderContainer}><div className={styles.loader} /></div>}

        </div> :
            <div>No records found</div>}</>
    );
}

export default ImageGrid;
