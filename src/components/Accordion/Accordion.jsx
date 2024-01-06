import { useState } from 'react';
import './Accordion.css';
import AccordionItem from './AccordionItem';

const fagList = [
  {
    q: 'What is questions and answers?',
    a: "Q & A is a situation in which a person or group of people asks questions and another person or group of people answers them. Q & A is short for 'question and answer'.",
  },
  {
    q: 'What is questions and answers?',
    a: "Q & A is a situation in which a person or group of people asks questions and another person or group of people answers them. Q & A is short for 'question and answer'.",
  },
  {
    q: 'What is questions and answers?',
    a: "Q & A is a situation in which a person or group of people asks questions and another person or group of people answers them. Q & A is short for 'question and answer'.",
  },
  {
    q: 'What is questions and answers?',
    a: "Q & A is a situation in which a person or group of people asks questions and another person or group of people answers them. Q & A is short for 'question and answer'.",
  },
  {
    q: 'What is questions and answers?',
    a: "Q & A is a situation in which a person or group of people asks questions and another person or group of people answers them. Q & A is short for 'question and answer'.",
  },
];

const Accordion = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <div>
      <ul className="accordion">
        {fagList.map((faqItem, idx) => (
          <AccordionItem
						key={idx}
            onClick={() => (idx === openId ? setOpenId(null) : setOpenId(idx))}
            faqItem={faqItem}
            isOpen={idx === openId}
          />
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
