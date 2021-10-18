import React from "react";

const CopyrightNotice = () => {
  return (
    <section className="notice-single-container">
      <div className="notice-single-inner">
        <div className="card-inner">
          <div className="notice-single">
            <h1>Entschuldigung</h1>
          </div>
          <p>
            Keines dieser hier gezeigten oder von der API bereit gestellten
            Bilder gehört mir, noch durfte ich in den Genuss kommen irgendwen
            wichtiges abzulichten.
          </p>
          <p>
            Alle RECHTE der hier gezeigten Bilder unterliegen dem Photografen.
          </p>
          <p>
            Die Bilder wurden von mir lediglich an das WEBp-Format angepasst.
          </p>
          <p>Die API sowie diese Webseite ist nich kommerziell!</p>
        </div>
      </div>
    </section>
  );
};

export default CopyrightNotice;
