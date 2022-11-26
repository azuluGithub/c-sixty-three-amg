import { PureComponent } from 'react';

import MapComponent from './Map.component';

class Map extends PureComponent {

    renderMap() {
        return (
            <MapComponent />
        );
    }

    render() {
        return this.renderMap();
    }
}

export default Map;