import React, { useEffect } from 'react';

const Contact = ({ updateIndex }) => {
  useEffect(() => {
    updateIndex(6);
  }, [updateIndex])

  return (
    <div id="contact">
    </div>
  );
};

export default Contact;