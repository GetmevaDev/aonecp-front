import React from 'react';
import Popup from 'reactjs-popup';

import styles from './styles.module.css';

const Modal = () => {
  const contentStyle = {
    maxWidth: '370px',
    width: '90%',
  };
  return (
    <div>
      <Popup
        trigger={
          <button className="btnBlue" style={{ padding: '15px 76px' }}>
            <li>Sign Up</li>
          </button>
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
    </div>
  );
};

export default Modal;
