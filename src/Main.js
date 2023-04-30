import React from "react";
import './Main.css'

function Main ({data, handleNextPhoto}) {


    return (
        <div>
            <header>
                    <h1 className="header"> APOD </h1>
            </header>

            <main>
                <div className="apod-image" style={{
                backgroundImage: `url(${data.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",}} >

                <div className="apod-info">
                    <h2 id="apod-title"> {data.title} </h2>
                    <p id="apod-date"> {data.date} </p>
                    <p id="apod-explanation"> {data.explanation} </p>

                    <button className="next-photo-button" onClick={handleNextPhoto}>
                    Next Photo
                    </button>

                </div>

               

                </div>

            </main>

            <footer>
                <p>
                    Created by <a href="https://example.com"> {data.copyright} </a>
                </p>
            </footer>

        </div>
    )
}

export default Main;
