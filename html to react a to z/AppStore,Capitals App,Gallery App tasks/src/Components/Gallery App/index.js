import React, { useState } from 'react'

import './index.css'

const imagesList = [
    {
        id: 0,
        imageUrl:
            'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-img.png',
        thumbnailUrl:
            'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-thumbnail-img.png',
        imageAltText: 'nature mountain with pond',
        thumbnailAltText: 'nature mountain with pond thumbnail',
    },
    {
        id: 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-sunset-img.png',
        thumbnailUrl:
            'https://assets.ccbp.in/frontend/react-js/nature-sunset-thumbnail-img.png',
        imageAltText: 'nature sunset',
        thumbnailAltText: 'nature sunset thumbnail',
    },
    {
        id: 2,
        imageUrl:
            'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-img.png',
        thumbnailUrl:
            'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-thumbnail-img.png',
        imageAltText: 'nature mountain with ocean',
        thumbnailAltText: 'nature mountain with ocean thumbnail',
    },
    {
        id: 3,
        imageUrl:
            'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-img.png',
        thumbnailUrl:
            'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-thumbnail-img.png',
        imageAltText: 'nature mountain with forest',
        thumbnailAltText: 'nature mountain with forest thumbnail',
    },
    {
        id: 4,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-leaves-img.png',
        thumbnailUrl:
            'https://assets.ccbp.in/frontend/react-js/nature-leaves-thumbnail-img.png',
        imageAltText: 'nature leaves',
        thumbnailAltText: 'nature leaves thumbnail',
    },
    {
        id: 5,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-tree-img.png',
        thumbnailUrl:
            'https://assets.ccbp.in/frontend/react-js/nature-tree-thumbnail-img.png',
        imageAltText: 'nature tree',
        thumbnailAltText: 'nature tree thumbnail',
    },
    {
        id: 6,
        imageUrl:
            'https://assets.ccbp.in/frontend/react-js/nature-waterfall-img.png',
        thumbnailUrl:
            'https://assets.ccbp.in/frontend/react-js/nature-waterfall-thumbnail-img.png',
        imageAltText: 'nature waterfall',
        thumbnailAltText: 'nature waterfall thumbnail',
    },
    {
        id: 7,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-river-img.png',
        thumbnailUrl:
            'https://assets.ccbp.in/frontend/react-js/nature-river-thumbnail-img.png',
        imageAltText: 'nature river',
        thumbnailAltText: 'nature river thumbnail',
    },
]

const GalleryTest = () => {

    const [imageId, setImageId] = useState(imagesList[0].id);
    const selectImg = (imgId) => {
        setImageId(imagesList[imgId].id)

    }

    const selectedImg = imagesList[imageId]
    console.log(selectedImg);

    return (
        <div className="photography-container">
            <div className="photography-content-container">
                <img
                    src={selectedImg.imageUrl}
                    alt={selectedImg.imageAltText}
                    className="nature-photo"
                />
                <h1 className="nature-photography-heading">Nature Photography</h1>
                <p className="photography-description">Nature Photography by sarath</p>
                <ul className="images-container">
                    {imagesList.map(eachImg => (
                        <li key={eachImg.id} className="images-list">


                            <button type="button" className="image-btn" onClick={() => selectImg(eachImg.id)}>
                                <img
                                    src={eachImg.thumbnailUrl}
                                    className={`image-thumbnail ${imageId === eachImg.id ? 'select-image-thumbnail' : ''}`}
                                alt={eachImg.thumbnailAltText}
              />
                            </button>
                        </li>

                    ))}
                </ul>
            </div>
        </div>
    )
}

export default GalleryTest;