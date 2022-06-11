import React from "react";


const TnbBar = () => {
  return (
    <div id="ticket_tnb" className="ticket_container">
      <div className="tnb step1">
        <div className="info movie">
          <div className="placeholder" title="영화선택"></div>
        </div>
        <div className="info path">
          <div className="row colspan2">
            <span className="path-step2" title="좌석선택">
              &nbsp;
            </span>
            <span className="path-step3" title="결제">
              &nbsp;
            </span>
          </div>
        </div>
        <a
          id="tnb_step_btn_right"
          href="/ticket/reserve"
          className="btn-right"
          title="좌석선택"
        ></a>
      </div>
    </div>
  );
}

export default TnbBar;
