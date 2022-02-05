import React from "react"
import ExpansionPanel from "./ExpansionPanel"

const questionsAnswers = [
  {
    question: "What’s the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "How do you make holy water?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Why do you never see elephants hiding in trees?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Why can’t you hear a pterodactyl go to the bathroom?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Why did the invisible man turn down the job offer?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
]

export default function FAQ() {
  return (
    <section className="faqSection py-12 bg-white sm:container xl:max-w-screen-md lg:max-w-4xl mx-4 sm:mx-auto">
      <h3 className="mb-4 text-3xl lg:text-4xl xl:text-5xl text-center px-6 md:px-6 lg:px-12 xl:px-0 sm:px-0 pb-6 border-b-2 border-gray-200 font-extrabold leading-10 font-sans text-gray-900">
        Frequently asked questions
      </h3>
      <ExpansionPanel questionsAnswers={questionsAnswers} key={"FAQ"} />
    </section>
  )
}
