import React from 'react';
import { Root } from './client/containers';

(function() {
  let intervalId = setInterval(function() {
    const target = document.querySelector('.l-collection');

    if (target) {
      clearInterval(intervalId);
      init(target);
    }
  }, 200);

  function init(target) {
    target.innerHTML = null;
    React.render(<Root/>, target);
  };
})();