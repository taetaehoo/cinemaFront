import React ,{useState, useEffect} from "react";


const TnbBar = (props) => {
  const check = (props) => {
    
    if ( props.movie === null || props.time === null) {
      return false;
    }
    else {
      return true;
    }
  }
  const [isRight, setIsRight] = useState(false);
  const [link, setLink] = useState("");
  useEffect(() => {
    setIsRight(check(props));
  }, [props]);

  useEffect(() => {
    
    if(isRight) {
      setLink("/ticket/reserve/"+props.movie._id+"/"+props.time._id);
    }
    else {
      setLink("/ticket/reserve");
    }
  }, [isRight]);
  
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
        {isRight ? <a
          id="tnb_step_btn_right"
          className="btn-right on"
          href = {link}
          title="좌석선택"
        ></a> : <a
        id="tnb_step_btn_right"
        className="btn-right"
        title="좌석선택"
      ></a>}
        
      </div>
    </div>
  );
}

export default TnbBar;
