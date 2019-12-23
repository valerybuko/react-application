import React from 'react';
import {imagesURL} from "./mockdata/imagesURL";
import Image from "./Components/Image";

const images = imagesURL.map(image => <Image key={image.id} src={image.url} alt={image.alt} title={image.title}/>);

const App = () => {
    return <div>
        {images}
    </div>;
};

export default App;
