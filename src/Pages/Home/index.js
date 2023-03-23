import React, { useState } from "react";
import { MarvelApi } from "../../Hooks/MarvelApi";
import "./style.css"
import MarvelLogoSVG from "../../Assets/images/MarvelLogo.svg"
import { Footer } from "../../Components/Footer";
import { ModalItem } from "../../Components/OpenItemModal";

function Home() {
    let LimitInitial = 30
    const [filterOrderBy, setFilterOrderBy] = useState("issueNumber")
    const [filterSearch, setFilterSearch] = useState("")
    const [limitItem, setLimitItem] = useState(LimitInitial)
    const [modalItem, setModalItem] = useState(null)
    const handleFilterSearch = (e) => {
        const value = e.target.value
        setFilterSearch(value)
    }
    const handleFilterOrderBy = (e) => {
        const value = e.target.value
        setFilterOrderBy(value)
    }
    var FilterTitle = filterSearch
    if (FilterTitle !== "") {
        FilterTitle = `titleStartsWith=${filterSearch}&`
    }
    const { data, hasLoaded, hasLoadedRequest } = MarvelApi(`v1/public/comics?format=comic&orderBy=${filterOrderBy}&limit=${limitItem}&${FilterTitle}`)
    const OpenModalComic = (e) => {
        const Id = e.target.value
        setModalItem(Id)
    }


    const handleLimitItem = () => {
        let NewLimit = limitItem + LimitInitial
        setLimitItem(NewLimit)
    }
    return (
        <div className="Landing-AppMaster">
            {!modalItem ? "" :  <button className="Modal-Button" value={null} onClick={OpenModalComic}>Voltar</button>}
            {!modalItem ? "" : <ModalItem Id={modalItem}/>}
            <div className="Header">
                <div className="Logo"><img src={MarvelLogoSVG} alt="Marvel Studios Logo" /></div>
                <div className="FilterBar">
                    <select className="OrderBySelect" onChange={handleFilterOrderBy} defaultValue="">
                        <option onChange={handleFilterOrderBy} value="">Tudo</option>
                        <option onChange={handleFilterOrderBy} value="title">Titulo</option>
                        <option onChange={handleFilterOrderBy} value="issueNumber">Ano</option>
                    </select>
                    <form className="SearchForm">
                        <img src="https://cdn.discordapp.com/attachments/1086815588103503992/1087277261331378186/image.png" alt="Lupa de pesquisa" />
                        <input
                            type="text"
                            placeholder="Search"
                            value={filterSearch}
                            onChange={handleFilterSearch}
                        />
                    </form>
                </div>
            </div>
            <div className="Content">
                {!hasLoaded||!hasLoadedRequest ? <div className="LoadingText">Carregando</div> : data.length < 1 ? <div className="LoadingText">NotFound</div> : data.map((item, itemIndex) =>
                    <div key={itemIndex} className="Item">
                        <div className="Thumbnail">
                            <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={`${item.title} Icon`} />
                        </div>
                        <div className="Informations">
                            <div className="Comic-Name">{item.title}</div>
                            <div style={{ visibility: `${item.modified ? "visible" : "invisible"}` }} className="Comic-Date">{`${(new Date(item.modified)).getDay()}/${(new Date(item.modified)).getMonth() + 1}/${(new Date(item.modified)).getFullYear()}`}</div>
                            <button className="Comic-Seemore" value="43224" onClick={OpenModalComic}>Ver Mais</button>
                        </div>
                    </div>
                )}
                {!hasLoadedRequest||data.length < 1 ? "" :
                    <div className="Container-Seemore-Items">
                        <button disabled={!hasLoadedRequest ? true : false} onClick={!hasLoadedRequest ? "" : handleLimitItem}>{!hasLoadedRequest ? "Carregando..." : "Carregar Mais!"}</button>
                    </div>
                }
            </div>
            <Footer />
        </div >
    );
}

export default Home;