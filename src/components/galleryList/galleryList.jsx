import { useEffect, useState } from "react";
import axios from 'axios';
import './galleryList.css'

function GalleryList() {

    const [galleryList, setGalleryList] = useState([]);
    const [galleryUrl, setGalleryUrl] = useState('https://api.slingacademy.com/v1/sample-data/photos');

    async function downloadGallery() {
        const response = await axios.get(galleryUrl);

        const result = response.data.photos;
        const galleryImages = result.map((e) => e);
        setGalleryList(galleryImages);

    }
    useEffect(() => {
        downloadGallery();
    }, [galleryUrl])

    return <>
        <div className="gallery">
            {
                galleryList.map((e) => <img className="animal-gallery" src={e.url} />)
            }
        </div>
    </>

}
export default GalleryList;
