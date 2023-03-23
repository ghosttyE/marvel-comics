import React, { useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import toast from 'react-hot-toast';


function GoogleMapRender(e) {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBI8HlewdZXIqcuVPd1R-x0PaTQYCIgUac"
    })

    const [markerPos, setMarkerPos] = useState({
        isMarked: false,
        Pos: {
            lat: -27.590824,
            lng: -48.551262
        }
    })
    const handleMarkerPos = (lat, lng) => {
        setMarkerPos({
            isMarked: true,
            Pos: {
                lat: lat,
                lng: lng
            }
        })
    }
    const handleDelivery = () =>{
        if(!markerPos.isMarked){return toast.error('Selecione um local no mapa!');}
        toast.success(`Sended task to delivery component with [LAT:${markerPos.Pos.lat} | LNGnpm:${markerPos.Pos.lng}]`);
    }
    console.log(markerPos)
    return isLoaded ? (
        <div
            w="100%"
            h="40%"
            position="relative"
            display="flex"
            flexdirection="row"
            flexwrap="nowrap"
            aligncontent="center"
            justifycontent="center"
            alignitems="center"
            margintop="4%"
        >
            <GoogleMap
                mapContainerStyle={{ width: "100%", height: "300px", borderradios: "0.9vw" }}
                center={markerPos.Pos}
                zoom={10}
                onClick={(ev) => {
                    handleMarkerPos(ev.latLng.lat(), ev.latLng.lng())
                }}
            >
                {
                    markerPos.isMarked ?
                        <Marker
                            position={markerPos.Pos}
                        /> : ""
                }
            </GoogleMap>
            <button onClick={handleDelivery} className='button-marker-delivery'>Entregar</button>
        </div>
    ) : <></>

}



export default GoogleMapRender;