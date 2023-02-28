import React, { useState } from "react";
import { BsPlusLg, BsDashLg } from "react-icons/bs";

const FaqCard = ({ question, answer }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <article className="faq__card">
      <div className={isOpened?'question show': 'question'} onClick={() => setIsOpened(!isOpened)}>
        <h3>{question}</h3>
        {isOpened? <BsDashLg />:<BsPlusLg />}
      </div>
      <div className={isOpened?'answer show': 'answer'}>
        <p>{answer}</p>
      </div>
    </article>
  );
};

export default FaqCard;
