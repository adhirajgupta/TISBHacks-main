/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "@/components/Footer";
import FAQ, { FAQEnum, FAQProps } from "@/components/FAQ";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import router from "next/router";
import Theme from "@/components/Theme";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const faqs: FAQProps[] = [
    {
      faqVal: FAQEnum.Q1,
      question: "What are the benefits of participating?",
      answer:
        "Learn new skills, add a nation-wide event to your Resume and win cash prizes worth Rs. 100,000",
    },
    // {
    //   faqVal: FAQEnum.Q2,
    //   question: "Is there support available?",
    //   answer:
    //     "The environment at these events is designed specifically to encourage everyone to have fun and help each other. If you’re ever stuck on anything, speak to a volunteer or a HOD who will help you. The primary purpose of the hackathon is to learn, so don’t be afraid to ask!",
    // },
    {
      faqVal: FAQEnum.Q3,
      question: "Do you need coding experience to participate?",
      answer:
        "No! If you’re new to programming, feel free to participate in the no code and the mini events.",
    },
    // {
    //   faqVal: FAQEnum.Q4,
    //   question: "Is the hackathon open to anyone?",
    //   answer:
    //     "We have two categories; one for ages 10-13 and another for ages 13-18.",
    // },
    {
      faqVal: FAQEnum.Q6,
      question:
        "I have another question that is not answered in your FAQs, what should I do?",
      answer: "Please contact us at hackathon@tisb.ac.in for further queries.",
    },
    {
      faqVal: FAQEnum.Q7,
      question: "What about confidentiality of information?",
      answer:
        "If you don’t want to distribute your code base that is ok, if you don’t want to present your project, then a hackathon might not be the ideal place for you to work on that idea. ",
    },
    {
      faqVal: FAQEnum.Q8,
      question: "Do all team members need to be present?",
      answer:
        "Yes, every team member should be present. If a team member cannot be present during the pitch please tell us and we will find a way to manage!",
    },
    // {
    //   faqVal: FAQEnum.Q9,
    //   question: "What is the Program/Timetable?",
    //   answer: "The schedule of events will be announced soon!",
    // },
    {
      faqVal: FAQEnum.Q13,
      question: "How are the winners selected?",
      answer: (
        <>
          There will be an independent Jury comprised of experienced judges
          selecting the winners with a rating system. The judging criteria will
          be shared soon!
        </>
      ),
    },
  ];

  const [faq, setFaq] = useState<FAQEnum>(FAQEnum.NONE);

  return (
    <>
      <Head>
        <title>TISBHacks</title>
        <meta name="description" content="TisbHacks" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./logo.png" />
      </Head>
      <div className="w-screen h-full bg-primary">
        <Navbar />

        <div className="flex items-start justify-center w-full h-full">
          <div className="flex flex-col items-center justify-start w-full h-[87vh] mt-[13vh] mx-6 sm:mx-8">
            <div
              style={{ backgroundImage: 'url("./images/main_bg.png")' }}
              className="flex justify-center items-center flex-col w-full h-[97%] bg-cover rounded-[2rem] grayscale-[60%]"
            // className="w-full h-[82%] mb-[4%] sm:h-[54%] sm:mb-[1%] flex flex-col justify-center items-center rounded-[2rem] grayscale-[50%] bg-cover"
            >
              <h1 className="text-4xl font-bold text-white sm:text-7xl">
                TISB Hacks 4.0
              </h1>
              <h3 className="flex items-center justify-center my-4 text-xl font-semibold text-white sm:text-2xl">
                Feb 25th - March 3rd
              </h3>
              <motion.button
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                onClick={async () => {
                  router.pathname !== "/" && (await router.push("/"));
                  let element = document.getElementById("winners");
                  element?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                onClickCapture={() => window.open("https://tally.so/r/wzYdvZz", "_blank")}
                className="flex flex-wrap w-[80%] sm:w-auto text-black items-center justify-center px-10 py-2 mt-2 text-xl brightness-[1.2] font-semibold bg-white sm:bg-gradient-to-br from-[#87CEEB] to-[#5F9EA0] rounded-3xl sm:rounded-full cursor-pointer"
              >
                Registrations Open!
              </motion.button>
            </div>

            {/* Prize Pool */}
            {/* <div
              className="flex justify-center items-center w-full h-[12%] mb-[2%] bg-cover rounded-[3rem] grayscale-[50%]"
              style={{ backgroundImage: 'url("/images/prize_pool.png")' }}
            >
              <h3 className="text-3xl font-semibold text-center text-white sm:text-4xl">
                ₹100,000 in Cash Prizes
              </h3>
            </div> */}
          </div>
        </div>

        {/* Events */}
        <div className="relative bottom-16" id="events"></div>
      <div className="flex w-screen h-auto bg-primary mt-16">
  <div className="flex flex-col items-center justify-center w-full h-auto px-6 sm:px-8">
    <h1 className="w-full mb-8 text-6xl font-semibold text-center sm:text-left">
      Events
    </h1>
    <div className="flex flex-col items-start justify-center w-full h-auto gap-4">
      <MainEvent
        title="Coding Event"
        description="Participants will use their programming skills to craft up a working digital product that addresses a real-world problem within the themes of the hackathon. Teams will have 24 hours to collaborate and develop a software solution, using any language, technology stack, or library, except drag-and-drop softwares like Scratch or MIT App Inventor. At the end of the hackathon, teams will present their final product to a panel of judges, showcasing the functionality, usability, and potential impact of their solution."
      />
      <MainEvent
        title="No Code Event"
        description="Participants in this event will leverage no-code platforms to create a functional digital product. This unique approach allows individuals, including those new to programming, to actively contribute without requiring traditional coding skills. Teams will collaborate, utilizing no-code tools to develop software solutions, with the freedom to choose any software out there. At the end of the hackathon, teams will present their projects to a panel of judges, highlighting the functionality, usability, and impactful outcomes achieved without the need for conventional coding expertise."
      />
      <MainEvent
        title="Algorthmic Hackathon"
        description="Participants will use their programming skills to craft up a working digital product that addresses a real-world problem within the themes of the hackathon. Teams will have 24 hours to collaborate and develop a software solution, using any language, technology stack, or library, except drag-and-drop softwares like Scratch or MIT App Inventor. At the end of the hackathon, teams will present their final product to a panel of judges, showcasing the functionality, usability, and potential impact of their solution."
      />
      <MainEvent
        title="Coding Event"
        description="Participants will use their programming skills to craft up a working digital product that addresses a real-world problem within the themes of the hackathon. Teams will have 24 hours to collaborate and develop a software solution, using any language, technology stack, or library, except drag-and-drop softwares like Scratch or MIT App Inventor. At the end of the hackathon, teams will present their final product to a panel of judges, showcasing the functionality, usability, and potential impact of their solution."
      />
    </div>
  </div>
</div>


        {/* Themes */}
        <div className="relative bottom-16" id="themes"></div>
        <div className="sm:flex w-screen h-auto bg-primary mt-16 hidden">
          <div className="flex flex-col items-center justify-center w-full h-auto px-6 sm:px-8">
            <h1 className="w-full mb-8 text-6xl font-semibold text-left">
              Themes
            </h1>
            <div className="flex flex-row items-center justify-center w-full h-72 gap-4">
              <Theme theme="Education" image='url("./images/education.png")' />
              <Theme theme="Healthcare" image='url("./images/healthcare.png")' />
              <Theme
                theme="Social Connect"
                image='url("./images/social_good.png")'
              />
            </div>
            <div className="mt-4 flex flex-row items-center justify-center w-full h-72 gap-4">
              <Theme
                theme="Artificial Intelligence"
                image='url("./images/ai.jpeg")'
              />
              <Theme
                theme="Game Development"
                image='url("./images/gamedev.jpeg")'
              />
            </div>
          </div>
        </div>

        <div className="relative bottom-20" id="prizes"></div>
        <div className="flex w-screen h-auto mt-16 bg-primary">
          {/* Create a section for the prizes, explaining the prize distribution for the main and mini events */}
          <div className="flex flex-col items-center justify-center w-full h-auto px-6 sm:px-8">
            <h1 className="w-full mb-8 text-6xl font-semibold text-center sm:text-left">
              Prizes
            </h1>
            <div className="flex flex-col sm:flex-row items-start justify-center w-full h-auto gap-4 mb-4 sm:flex-row">
              <motion.div
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-start w-full pt-4 pb-8 px-8 bg-gray rounded-[2rem] h-auto sm:min-h-[13rem]"
              >
                <h2 className="mb-8 text-3xl font-semibold text-center">
                  Senior Category (Grades 9 - 12)
                </h2>
                <div className="flex flex-col items-center w-full gap-4">
                  <PrizeElement text="1st Place" prize="₹25,000" />
                  <PrizeElement text="2nd Place" prize="₹15,000" />
                  <PrizeElement text="3rd Place" prize="₹5,000" />
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-start w-full pt-4 pb-8 px-8 bg-gray rounded-[2rem] h-auto sm:min-h-[13rem]"
              >
                <h2 className="mb-8 text-3xl font-semibold text-center">
                  Junior Category (Grades 6-8)
                </h2>
                <div className="flex flex-col items-center w-full gap-4">
                  <PrizeElement text="1st Place" prize="₹20,000" />
                  <PrizeElement text="2nd Place" prize="₹10,000" />
                  <PrizeElement text="3rd Place" prize="₹5,000" />
                </div>
              </motion.div>
            </div>
            <div className="flex flex-col sm:flex-row items-start justify-center w-full h-auto gap-4 mb-4 sm:flex-row">
              <motion.div
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-start w-full pt-4 pb-8 px-8 bg-gray rounded-[2rem] h-auto sm:min-h-[13rem]"
              >
                <h2 className="mb-8 text-3xl font-semibold text-center">
                  No Code
                </h2>
                <div className="flex flex-col items-center w-full gap-4">
                  <PrizeElement text="1st Place" prize="₹10,000" />
                  <PrizeElement text="2nd Place" prize="₹5,000" />
                  <PrizeElement text="3rd Place" prize="2,000" />
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-start w-full pt-4 pb-8 px-8 bg-gray rounded-[2rem] h-auto sm:min-h-[13rem]"
              >
                <h2 className="mb-8 text-3xl font-semibold text-center">
                  Mini Events (First place only)
                </h2>
                <div className="flex flex-col items-center w-full gap-4">
                  <PrizeElement text="Algorithmic Hackathon" prize="₹2,000" />
                  <PrizeElement text="Trivia" prize="₹2,000" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="relative bottom-20" id="faqs"></div>
        <div className="flex items-start justify-between w-screen h-auto bg-primary mt-8">
          <div className="flex flex-col w-full items-start justify-start p-8">
            <h1 className="mb-8 text-6xl w-full text-center sm:text-left font-semibold">
              FAQs
            </h1>
            {faqs.map((faqObj: FAQProps) => {
              return (
                <FAQ
                  faq={faq}
                  setFaq={setFaq}
                  key={faqObj.question}
                  question={faqObj.question}
                  faqVal={faqObj.faqVal}
                  answer={faqObj.answer}
                />
              );
            })}

            <h3 className="mt-16 mb-8 text-4xl font-semibold" id="sponsors">
              Sponsors
            </h3>

            {/* <div className="flex flex-col items-start justify-start gap-8 ml-4 overflow-x-auto">
              <div className="flex flex-col items-start justify-start w-full gap-8 sm:flex-row">
                <div className="w-full sm:w-52 h-28 bg-white rounded-lg flex justify-center items-center text-xl text-zinc-400">
                  <img
                    src="./images/Yadalam.png"
                    alt="Yadalam"
                  />
                </div>
                <div className="w-52 h-28 bg-white rounded-lg flex justify-center items-center text-xl text-zinc-400">
                  <img
                    src="./images/PrimeCorp Logo.jpg"
                    alt="PrimeCorp"
                    width={122}
                    height={28}
                    style={{ backgroundSize: 'cover' }}
                  />
                </div>
                <div className="w-52 h-28 bg-white rounded-lg flex justify-center items-center text-xl text-zinc-400">
                  <img
                    src="./images/bren.jpg"
                    alt="bren"
                  />
                </div>
              </div>
              <div className="flex items-start justify-start w-full gap-8">
                <div className="w-52 h-28 bg-white rounded-lg flex justify-center items-center text-xl text-zinc-400">
                  <img
                    width={122}
                    height={28}

                    src="./images/OFG logo-01.jpg"
                    alt="Yadalam"
                  />
                </div>{" "}
                <div className="bg-black rounded-lg flex justify-center items-center text-xl text-zinc-400">
                  <img
                    width={122}
                    height={28}
                    src="./images/talentfolks_logo.jpg"
                    alt="Yadalam"
                  />
                </div>
              </div>
            </div> */}
            <div className="flex flex-col items-start justify-start gap-8 ml-4">
  <div className="flex flex-col items-start justify-start w-full gap-8 sm:flex-row">
    <div className="w-full sm:w-52 h-28 bg-white rounded-lg overflow-hidden">
      <img
        src="./images/Yadalam.png"
        alt="Yadalam"
        className="object-contain h-full w-full"
      />
    </div>
    <div className="w-52 h-28 bg-white rounded-lg overflow-hidden">
      <img
        src="./images/PrimeCorp Logo.jpg"
        alt="PrimeCorp"
        width={122}
        height={28}
        style={{ objectFit: 'contain' }}
      />
    </div>
    <div className="w-52 h-28 bg-white rounded-lg overflow-hidden">
      <img
        src="./images/bren.jpg"
        alt="bren"
        className="object-cover h-full w-full"
      />
    </div>
  </div>
  <div className="flex items-start justify-start w-full gap-8">
    <div className="bg-black rounded-lg overflow-hidden">
      <img
        src="./images/OFG logo-01.jpg"
        alt="OFG"
        width={152}
        height={78}
        // style={{ objectFit: 'contain' }}
      />
    </div>
    <div className="bg-gray rounded-lg overflow-hidden">
      <img
        src="./images/talentfolks_logo.jpg"
        alt="Talent Folks"
        width={182}
        height={78}
        // style={{ objectFit: 'contain' }}
      />
    </div>
  </div>
</div>


            {/* end of sponsors */}
          </div>

          <div className="flex-col w-[35vw] items-end justify-center hidden sm:flex">
            <img
              src="./images/secondary_bg.png"
              className="h-full select-none"
              alt=""
            />
            <img
              src="./images/secondary_bg.png"
              className="h-[50vh] w-[35vw] select-none scale-y-[-1]"
              alt=""
            />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

const WinnerElement = ({
  text,
  prize,
  winner,
  image,
}: {
  text: string;
  prize: string;
  winner: string;
  image?: string;
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={(e) =>
        !((e.target as Element).id === "winners_photo") &&
        image &&
        setExpanded(!expanded)
      }
      className={`rounded-xl w-[90%] bg-gray2 px-4 flex-col items-center justify-center ${expanded ? "py-4" : "h-14"
        } ${image && "cursor-pointer"}`}
    >
      <div
        className={`flex justify-between items-center w-full ${!expanded && "h-full"
          }`}
      >
        <p className="text-xl">
          {text} <span className="text-tertiary">(Rs. {prize})</span>
        </p>
        <div className="flex justify-center items-center gap-4">
          <p style={{ color: "mediumpurple" }} className="text-2xl">
            {winner}
          </p>
          {image &&
            (expanded ? (
              <FiChevronUp size={20} className="text-tertiary cursor-pointer" />
            ) : (
              <FiChevronDown
                size={20}
                className="text-tertiary cursor-pointer"
              />
            ))}
        </div>
      </div>
      {expanded && (
        <img
          id="winners_photo"
          src={image}
          alt=""
          className="pt-4 rounded-xl cursor-default"
        />
      )}
    </div>
  );
};

const PrizeElement = ({ text, prize }: { text: string; prize: string }) => {
  return (
    <div className="rounded-xl w-[90%] h-14 bg-gray2 px-4 flex items-center justify-between">
      <p className="text-xl">{text}</p>
      <p className="text-2xl text-zinc-400">{prize}</p>
    </div>
  );
};

const MainEvent = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.3 }}
      className="cursor-pointer flex flex items-center gap-16 justify-start w-full p-8 bg-gray rounded-[2rem] h-auto"
    >
      <div className="flex flex-col">
        <h2 className="w-full text-3xl font-semibold text-center sm:text-left">
          {title}
        </h2>
        <p className="mt-4 text-lg text-center sm:text-justify">
          {description}
        </p>
      </div>
      <img
        src="./images/coding.png"
        alt="Coding"
        className="hidden sm:block w-[40%]"
      />
    </motion.div>
  );
};
