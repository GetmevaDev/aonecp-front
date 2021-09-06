import React from 'react';
import Popup from 'reactjs-popup';

const SignUp = () => {
  const contentStyle = {
    maxWidth: '370px',
    width: '90%',
  };

  return (
    <Popup
      trigger={
        <li className="btnBlue" style={{ cursor: 'pointer', marginTop: 10 }}>
          Sign Up
        </li>
      }
      modal
      contentStyle={contentStyle}>
      {(close) => (
        <div className="modal">
          <a
            className="close"
            onClick={close}
            style={{ float: 'right', cursor: 'pointer', fontSize: 30 }}>
            &times;
          </a>

          <div className="content">
            <iframe
              title="sign up"
              name="frame_agreement"
              id="frame_agreement"
              src="https://www.clientdisputemanager.com/Agreement/AgreementForm?CompanyId=266939"
              height="400"
              width="350"
              frameborder="0"
              scrolling="yes"
              onload="resizeIframe(this)"></iframe>
          </div>
          <div className="actions" style={{ textAlign: 'center' }}>
            <button
              className="button"
              onClick={() => {
                close();
              }}>
              close
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default SignUp;
