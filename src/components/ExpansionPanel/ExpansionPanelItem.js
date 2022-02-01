import React from "react";

const ExpansionPanelItem = ({ showDescription, ariaExpanded, item, index, onClick }) => (
  <div
    className="faqTitle py-6 cursor-pointer"
    key={item.index}
    aria-expanded={ariaExpanded}
    aria-controls={`faq${index + 1}_desc`}
    data-qa="faq__question-button"
    onClick={onClick}
  >
    <dt>
      <h4 className={`text-lg leading-6 font-sans font-medium text-gray-900 flex justify-between`}>
        {item.question}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 text-gray-500 transition duration-300 ease-in-out ${showDescription && "transform rotate-180"}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </h4>
    </dt>
    <dd>
      <p
        id={`faq${index + 1}_desc`}
        data-qa="faqSubTitle"
        className={`faqSubTitle ${showDescription} pr-8 lg:pr-0 text-base leading-7 font-normal text-gray-500 font-sans ${showDescription && "mt-2"}`}
      >
        {item.answer}
      </p>
    </dd>
  </div>
);

export default ExpansionPanelItem;
