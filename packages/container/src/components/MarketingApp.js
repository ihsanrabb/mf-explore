import React from 'react';
import { mount } from 'marketing/MarketingApp';

export default () => {
  const refEl = React.useRef();

  React.useEffect(() => {
    if(refEl) {
      mount(refEl.current);
    }
  }, [refEl]);

  return <div ref={refEl} />;
}
