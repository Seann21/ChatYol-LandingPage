"use client"

import React from "react";
import PlusIcon from "@/assets/icons/plus.svg";
import MinusIcon from "@/assets/icons/minus.svg";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    question: "What is ChatYol AI?",
    answer:
      "ChatYol AI is an advanced chatbot designed to increase your productivity by providing fast and accurate solutions to a variety of tasks, both professional and personal.",
  },
  {
    question: "How does ChatYol AI work?",
    answer:
      "ChatYol AI uses leading AI technology to understand your commands and questions and offer help based on your context and current needs. These chatbots can answer questions, compile documents, analyze data, and more.",
  },
  {
    question: "Is ChatYol AI free?",
    answer:
      "ChatYol AI is free to use for now. However, because it is still in the early development stage, there will be usage limitations.",
  },
  {
    question: "How to contribute to the ChatYol AI project?",
    answer:
      "Contributions are greatly appreciated! Please open an issue or submit a pull request in the GitHub repository to fix or add features.",
  },
];

const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div 
    className="py-7 border-b border-white/30"
    onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className="flex items-center">
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon/>}
      </div>
      <AnimatePresence>
      {isOpen && (
        
      <motion.div
        initial={{
          opacity: 0,
          height: 0,
          marginTop: 0,
        }}
        animate={{
          opacity: 1,
          height: 'auto',
          marginTop: '16px',
        }}
        exit={{
          opacity: 0,
          height: 0,
          marginTop: 0,

        }}
      >
        {answer}
      </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
};

export const FAQs = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-[#3213b7] to-black py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl sm:max-w-[648px] mx-auto font-bold tracking-tighter cursor-default">
          Frequently asked questions (FAQ)
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto cursor-pointer">
          {items.map(({ question, answer }) => (
            <AccordionItem question={question} answer={answer} key={question} />
          ))}
        </div>
      </div>
    </div>
  );
};
