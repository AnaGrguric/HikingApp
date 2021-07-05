import React, { useEffect, useRef} from 'react';
import {loadModules} from 'esri-loader';

function Map(){
    const MapEl = useRef(null);

    useEffect(
        () => {
            let view;

            loadModules(["esri/views/MapView",
                         "esri/WebMap", 
                         "esri/portal/PortalItem", 
                         "esri/config", 
                         "esri/widgets/Popup", 
                         "esri/layers/FeatureLayer"],{
                css:true
            }).then(([MapView, WebMap, esriConfig, FeatureLayer])=> {

                //esriConfig.apiKey = "AAPKb3ca5e858e60454c887703c8ae3f3d55QBUZDsT070oe4R2_7TP_gdZsrGdvSZ7GD2afGahAL0TFAoDyLNuLvA9o-Iww5J0F";
                const webmap = new WebMap({
                    portalItem: {
                    id: "863132baca304d24be30b3cd3a1b5d7b"
                    }
                });
                view = new MapView({
                    map:webmap,
                    center:[15.621247 , 45.754831],
                    zoom: 14,
                    container: MapEl.current
                });

            })

            return ()=>{
                if(!!view){
                    view.destroy()
                    view=null
                }
            }

    })

    return(
        <div 
            className="viewDiv" 
            style={{height: "100vh", width:"100vw", position:"absolute", zIndex:"-4"}} 
            ref={MapEl}>
        </div>
    )
}

export default Map;