import React, { useEffect, useRef, useState } from 'react';
import { imageRepository } from '../../service/repository/image-repository/ImageRepository';
import styles from './HomePageStyle.module.scss';
import { Post, ViewImageModel } from '../models/ViewImageModel';
import ImageGrid from '../../components/ImageGrid';

function HomePage() {
    const [gallery, setGallery] = useState<Post[]>();
    const [keyword, setKeyword] = useState<string>('dog');
    const [isLoading, setLoading] = useState<boolean>(false);
    const [favorites, setFavorites] = useState<Post[]>([]);
    const [isFavoritesSelected, setFavoritesSelected] = useState<boolean>(false);
    const myRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        getData('', true);
    }, [keyword]);

    useEffect(() => {
        setLoading(false);
    }, [gallery]);
    let getData = (after?: string, shouldReset: boolean = false) => {
        setLoading(true);
        imageRepository.get(keyword, after).then(x => {
            let data = { ...x };

            if (!shouldReset && gallery) {
                data.data.children = x.data.children.filter(x => x.data.post_hint && (x.data.post_hint == 'image' || x.data.post_hint == 'rich:video')).concat(gallery);

            } else {
                data.data.children = x.data.children.filter(x => x.data.post_hint && (x.data.post_hint == 'image' || x.data.post_hint == 'rich:video'))
            }
            setGallery(data.data.children as Post[]);
        })
    }



    let handleScroll = (event: any) => {
        if (!myRef.current?.scrollTop && !myRef.current?.clientHeight) return;

        let shouldGetNextDatas = (myRef.current?.scrollHeight - myRef.current?.scrollTop - myRef.current?.clientHeight) < 20
        if (shouldGetNextDatas && !isLoading && gallery?.pop()?.data.name) {

            getData(gallery?.pop()?.data.name);
        }
    }

    let onPressFavorites = (favorite: Post) => {
        let temp = [...favorites];
        let element = temp.indexOf(favorite);
        if (element != -1) {
            temp.splice(element, 1);
        } else {
            temp.push(favorite)
        }

        setFavorites(temp)
    }

    return (
        <div >
            <div className={styles.searchBar}>
                <input type="text" onChange={(e) => setKeyword(e.target.value)}></input>
                <svg onClick={() => setFavoritesSelected(!isFavoritesSelected)} className={`${styles.favoriteButtonSelcet} ${isFavoritesSelected ? styles.selected : ' '}`} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox='0 0 20 19'  >
                    <path d="M0,0.054V20h21V0.054H0z M15.422,18.129l-5.264-2.768l-5.265,2.768l1.006-5.863L1.64,8.114l5.887-0.855 l2.632-5.334l2.633,5.334l5.885,0.855l-4.258,4.152L15.422,18.129z" />
                </svg>
            </div>
            {isFavoritesSelected ?
                <ImageGrid images={favorites} onPressFavorites={onPressFavorites} favorites={favorites} isLoading={isLoading} />
                : <ImageGrid images={gallery} gridRef={myRef} handleScroll={handleScroll} onPressFavorites={onPressFavorites} favorites={favorites} isLoading={isLoading} />
            }
        </div>
    );
}

export default HomePage;
