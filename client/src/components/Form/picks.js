

import React from "react";
import Modal from "../Modal/index";
import Page1 from './components/Form/page1';



const NoMatch = () => {
  return (
    <div>
      <Modal>
        <h1>404 Page Not Found</h1>
        <h1>
          <span role="img" aria-label="Face With Rolling Eyes Emoji">
            🙄
          </span>
        </h1>
      </Modal>
    </div>
  );
};

export default NoMatch;
