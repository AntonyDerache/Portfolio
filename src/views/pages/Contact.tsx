import React, { useEffect } from 'react';

export interface ContactProps {
  updateIndex: Function;
}

const Contact = ({ updateIndex }: ContactProps) => {
  useEffect(() => {
    updateIndex(6);
  }, [updateIndex])

  return (
    <div id="contact">
    </div>
  );
};

export default Contact;
