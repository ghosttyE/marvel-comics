import React from "react";
import "./style.css"
import { MarvelApi } from "../../Hooks/MarvelApi";
import GoogleMapRender from "../GoogleMaps";

export function ModalItem(ComicInfo) {
    let ComicId = ComicInfo.Id
    const { data, hasLoaded, hasLoadedRequest } = MarvelApi(`v1/public/comics/${ComicId}?`)
    let DataModal = data[0]
    const FormatterDate = (TimeDate) =>{
        let newDate = new Date(TimeDate)
        let FormatDate = `${newDate.getDay()<10?'0'+newDate.getDay():newDate.getDay()}/${newDate.getMonth()<10?'0'+newDate.getMonth():newDate.getMonth()}/${newDate.getFullYear()}`
        return FormatDate
    }

    return (
        <div key={ComicId} className="Modal-Wrapper">
            {!hasLoaded || !hasLoadedRequest ? <div>Carregando</div> :
                <div key={ComicId} className="Modal-Resulter">
                    <div className="Modal-Icon"><img src={`${DataModal.thumbnail.path}.${DataModal.thumbnail.extension}`} alt="Icon Comic" /></div>
                    <div className="Modal-Container">
                        <div className="Modal-Container-Indormations">
                            <div className="Modal-Container-Indormations-Year">Modified: {FormatterDate(DataModal.modified)}</div>
                            <div className="Modal-Container-Indormations-Title">{DataModal.title}</div>
                            <div className="Modal-Container-Indormations-Section">
                                <label className="Modal-Container-Indormations-Section-Title">Descrição</label>
                                <div className="Modal-Container-Indormations-Section-Response">{DataModal.description}</div>
                            </div>
                            <div className="Modal-Container-Indormations-Section">
                                <label className="Modal-Container-Indormations-Section-Title">Entrega</label>
                                <div className="Modal-Container-Indormations-Section-Response Mapper">
                                    <GoogleMapRender/>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}