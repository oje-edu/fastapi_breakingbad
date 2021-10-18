import React from "react";

const CopyrightNotice = () => {
  return (
    <section className="notice-single-container">
      <div className="notice-single-inner">
        <div className="card-inner">
          <div className="notice-single">
            <h1>Bitte beachten</h1>
          </div>
          <p>
            Keines dieser hier gezeigten bzw.r von der API bereit gestellten
            Bilder gehört mir, noch durfte ich in den Genuss kommen irgendwen
            wichtiges abzulichten. Ich bin lediglich ein Braking Bad FAN.
          </p>
          <p>
            Alle RECHTE der hier gezeigten Bilder unterliegen dem Photografen
            oder dessen Agentur!!.
          </p>
          <p>
            Die Bilder wurden von mir an das WEBp-Format angepasst. Denn was
            wäre eine FastAPI ohne optimierte Bilder?
          </p>
          <p>Die API sowie diese Webseite sind und werden nie kommerziell!</p>
        </div>
      </div>
    </section>
  );
};

export default CopyrightNotice;
