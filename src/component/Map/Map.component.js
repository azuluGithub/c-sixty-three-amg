import { PureComponent } from 'react';

import './Map.style.scss';

class Map extends PureComponent {

    renderImage() {
        return (
            <div className="col-md-12">
                <div className="Map-Mapouter">
                    <div className="Map-GmapCanvas">
                        <iframe 
                            className='Map-IFrame'
                            id="gmap_canvas"
                            src="https://maps.google.com/maps?q=we4u%20logistics&t=k&z=13&ie=UTF8&iwloc=&output=embed" 
                            frameBorder="0" 
                            scrolling="no"
                            marginHeight="0" 
                            marginWidth="0"
                            title='nursing college map'
                        >
                        </iframe>
                        <br/>
                    </div>
                </div>
            </div>
        );
    }

    // <div class="col-md-12">
    //        <div class="mapouter mt-5"><div class="gmap_canvas"><iframe style="width: 100%;" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=we4u%20logistics&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><br><style>.mapouter{position:relative;text-align:right;height:auto;width:100%;}</style><style>.gmap_canvas {overflow:hidden;background:none!important;height:auto;width:100%;}</style></div> */}
    
    renderComponents() {
        return (
          <section className='Map'>
            <div className='Map-MapContainer'>
                { this.renderImage() }
            </div>
          </section>
        );
    }

    render() {
        return this.renderComponents();
    }
}

export default Map;