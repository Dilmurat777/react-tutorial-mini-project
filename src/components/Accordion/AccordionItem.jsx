import { useRef } from "react";
import { ChevronDown } from 'lucide-react';

const AccordionItem = ({ faqItem, onClick, isOpen }) => {
	const itemRef = useRef(null)
  return (
    <>
      <li className="accordion-item">
        <button onClick={() => onClick()} className="accordion-header">
					{faqItem.q}
					<ChevronDown className={`accordion-arrow ${isOpen ? 'active' : ''}`} />
        </button>
        <div className='accordion-collapse' style={isOpen ? {height: itemRef.current.scrollHeight} : {height: '0px'}}>
          <div className="accordion-body" ref={itemRef}>{faqItem.a}</div>
        </div>
      </li>
    </>
  );
};

export default AccordionItem;
