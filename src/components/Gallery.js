import React from 'react';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';
import { Gallery, Item } from 'react-photoswipe-gallery';

const ImageGallery = ({ data, routeIndex }) => {
    return (
        <div className="gallery-images">
            {data[routeIndex].map(item => (
                <Gallery>
                    <Item
                        original={item.coverimg}
                        thumbnail={item.coverimg}
                        width="auto"
                        height="700"
                    >
                        {({ ref, open }) => (
                            <img ref={ref} onClick={open} src={item.coverimg} alt="route-img" />
                        )}
                    </Item>
                    <Item
                        original={item.smallimg}
                        thumbnail={item.smallimg}
                        width="auto"
                        height="700"
                    >
                        {({ ref, open }) => (
                            <img ref={ref} onClick={open} src={item.smallimg} alt="route-img" />
                        )}
                    </Item>
                    <Item
                        original={item.galleryimg3}
                        thumbnail={item.galleryimg3}
                        width="auto"
                        height="700"
                    >
                        {({ ref, open }) => (
                            <img ref={ref} onClick={open} src={item.galleryimg3} alt="route-img" />
                        )}
                    </Item>
                    <Item
                        original={item.galleryimg4}
                        thumbnail={item.galleryimg34}
                        width="auto"
                        height="700"
                    >
                        {({ ref, open }) => (
                            <img ref={ref} onClick={open} src={item.galleryimg4} alt="route-img" />
                        )}
                    </Item>
                </Gallery>
            ))}
        </div>
    )
}

export default ImageGallery;