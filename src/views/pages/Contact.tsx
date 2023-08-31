import React, { useEffect } from 'react';

export interface ContactProps {
  updateIndex: (index: number) => void;
}

function Contact({ updateIndex }: ContactProps) {
  useEffect(() => {
    updateIndex(6);
  }, [updateIndex]);

  return (
    <div id="contact" />
  );
}

export default Contact;
