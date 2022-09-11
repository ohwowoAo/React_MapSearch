import React from 'react';

const Map = () => {
    const container = document.getElementById('map'); 
    const map = new kakao.maps.Map(container);

    return (
        <div>
            <div id="map" style="width:500px;height:400px;"></div>
        </div>
    );
};

export default Map;