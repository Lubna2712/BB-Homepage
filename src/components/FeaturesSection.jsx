import React from "react"

const col1 = [
  {
    image: "EmailIcon.svg",
    title: "Email Notification",
    desc: "Let your team members receive email notifications about important changes they need to be aware of. Let your team members receive email notifications.",
  },
  {
    image: "file.svg",
    title: "Rich Domain Model",
    desc: "Targetprocess has a rich domain model with several different types of entities. These entities can be customized to fit your process.",
  },
]
const col2 = [
  {
    image: "chat.svg",
    title: "Comments & Mentions",
    desc: "Allow your team to communicate about the work they do using comments and @mentions",
  },
  {
    image: "multiLang.svg",
    title: "Multi-Language Support",
    desc: "We support English, French, German, Spanish, Portuguese (the Brazilian variety), Russian languages to allow you to use Targetprocess in your native language",
  },
]

const col3 = [
  {
    image: "team.png",
    horizontal: true,
    title: "Multiple Teams Support",
    desc: "Allow multiple teams to collaborate more effectively when delivering project(s) together. Help project members see how their work contributes to the bigger picture.",
  },
  {
    image: "share.svg",
    title: "Share Views",
    desc: "Share any view, report, or dashboard with stakeholders to provide live updates on your progress.",
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

function Card({ image, horizontal, title, desc }) {
  return (
    <div
      className={classNames(
        horizontal
          ? "flex sm:space-x-10 sm:col-span-2 flex-col-reverse  sm:flex-row"
          : "grid",
        "p-8 bg-white rounded-xl"
      )}
    >
      <img
        src={`${image}`}
        alt={image}
        className={classNames(
          horizontal ? "mb-0 mx-auto sm:m-0" : "block mb-6 absolute sm:relative"
        )}
        style={{ width: horizontal ? 272 : 32, height: horizontal ? 190 : 32 }}
      ></img>
      <div className={`${horizontal && "mt-8 sm:mt-0"}`}>
        <h4
          className={`max-w-xs text-left font-semibold font-serif text-xl leading-6 text-gray-800 ${
            horizontal
              ? "mb-2"
              : "mt-1 mb-5 sm:mt-0 sm:mb-2 ml-12 sm:ml-0 pl-2 sm:pl-0"
          } `}
        >
          {title}
        </h4>
        <p className="text-sm leading-5 font-normal text-gray-700 mr-8 sm:mr-3 font-serif">
          {desc}
        </p>
      </div>
    </div>
  )
}

export default function Features() {
  return (
    <section className="featureWrapper bg-gray-900 py-16 sm:py-32 xl:py-48 relative px-5 sm:px-0">
      <p className="text-lg mb-4 leading-tight font-serif font-bold uppercase text-transparent clip-text text-center gradient">
        Features
      </p>
      <h3 className="text-center mb-10 font-extrabold text-2xl sm:text-3xl xl:text-5.5xl text-white">
        A better way to send money
      </h3>
      <div className="mx-auto flex flex-col sm:grid sm:grid-cols-2 xl:flex xl:flex-row gap-6 xl:gap-0">
        <div className="w24 mx-auto grid items-stretch gap-y-6 text-left">
          {col1.map((item, key) => (
            <Card
              key={`col1-${key}`}
              image={item.image}
              horizontal={item.horizontal}
              title={item.title}
              desc={item.desc}
            ></Card>
          ))}
        </div>
        <div className="w24 mx-auto grid items-stretch gap-y-6 text-left">
          {col2.map((item, key) => (
            <Card
              key={`col1-${key}`}
              image={item.image}
              horizontal={item.horizontal}
              title={item.title}
              desc={item.desc}
            ></Card>
          ))}
        </div>
        <div className="w48 sm:col-span-2 sm:relative mx-auto grid grid-cols-1 xl:grid-cols-2 featureCol3 items-stretch gap-y-6 text-left">
          {col3.map((item, key) => (
            <Card
              key={`col1-${key}`}
              image={item.image}
              horizontal={item.horizontal}
              title={item.title}
              desc={item.desc}
            ></Card>
          ))}
          <div className="px-8 py-7 bg-transparent flex items-center flex-col-reverse sm:flex-col justify-center">
            <img
              src="updates.svg"
              alt="update"
              className="mx-auto mb-4 relative"
              style={{ left: -6 }}
            ></img>
            <div>
              <h4
                className="text-center mb-3 font-semibold font-serif text-xl leading-7 text-white mx-auto"
                style={{ maxWidth: 224 }}
              >
                More Updates, Features &amp; Articles are here.
              </h4>
              <p className="text-base font-semibold font-serif text-center leading-5 text-transparent clip-text gradient">
                <a href="#" title="Learn More">
                  Learn More
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
