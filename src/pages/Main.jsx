// eslint-disable-next-line
import React from "react";

function Main() {
  return (
    <main>
      <nav>
        <ul>
          <li><button><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M88,96a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,96Zm8,40h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16Zm32,16H96a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM224,48V156.69A15.86,15.86,0,0,1,219.31,168L168,219.31A15.86,15.86,0,0,1,156.69,224H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H152V160a8,8,0,0,1,8-8h48V48H48Zm120-40v28.7L196.69,168Z"></path></svg></button></li>
          <li><button>Archived</button></li>
        </ul>
      </nav>
      <section>
        <div className="card">
          <div className="card__image-container">
            <img src="" alt="" className="card__image" />
          </div>
          <div className="card__information">
            <h2 className="card__title"></h2>
            <p className="card__description"></p>
            <div className="card__call-to-action">
              <button className="card__delete-button"></button>
              <button className="card__edit-button"></button>
              <a className="card__detail-button"></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
