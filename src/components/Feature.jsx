import React from "react";
import { motion } from "framer-motion";
import ShinyText from "./animations/ShinyText";
import { GiCheckMark } from "react-icons/gi";
import Icon1 from "./icons/icon1";
import Icon2 from "./icons/icon2";

const data = [
  {
    icon: <Icon1 />,
    heading: "All-in-One Intelligence",
    para: "Access everything from price action to sentiment in a single interface.",
  },
  {
    icon: <Icon2 />,
    heading: "Built for Pros",
    para: "Designed for serious traders who demand fast, reliable insights.",
  },
];

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariant2 = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 14,
    },
  },
};

const listVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // Delay between each <li>
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 10,
    },
  },
};

const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      type: "spring",
      stiffness: 50,
      damping: 15,
    },
  }),
};

const imageVariant = {
  hidden: { scale: 1.2, opacity: 0, filter: "blur(10px)" },
  visible: {
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export default function Feature() {
  return (
    <div className="p-3 sm:p-10 mt-[5vw] max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 grid-cols-1">
        {/* Left Text Block */}
        <motion.div
          className="space-y-6 box flex flex-col justify-center border border-[#FFFFFF14] md:p-20 p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src="/images/shap-1.png"
            alt=""
            className="absolute top-0 left-0"
          />
          <img
            src="/images/shap-2.png"
            alt=""
            className="absolute !mt-0 top-0 right-0"
          />
          <img
            src="/images/shap-3.png"
            alt=""
            className="absolute bottom-0 left-0"
          />
          <img
            src="/images/shap-4.png"
            alt=""
            className="absolute bottom-0 right-0"
          />

          <h3 className="text-[#EE7C2C]">[ABOUT NAVION AI ]</h3>
          <motion.h1
            variants={textVariant}
            custom={1}
            className="gradient-text text-3xl sm:text-4xl lg:text-5xl "
          >
            Real-Time Web3 Market Intelligence, Simplified
          </motion.h1>

          <motion.div variants={textVariant} custom={2}>
            <ShinyText
              text="Navion AI is a real-time market intelligence platform built for the fast-moving world of Web3. It combines chat-native interaction with deep analytics - giving you technical, sentiment, and fundamental data in seconds, without the clutter of traditional dashboards."
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </motion.div>
          <a href="#">
            <motion.button
              variants={textVariant}
              custom={3}
              className="text-white btn font-light text-lg"
            >
              <span className="text uppercase"> Get started</span>
              <svg
                height="24"
                width="24"
                fill="#FFFFFF"
                viewBox="0 0 24 24"
                data-name="Layer 1"
                id="Layer_1"
                class="sparkle"
              >
                <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
              </svg>
            </motion.button>
          </a>
        </motion.div>
        {/* Right Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariant}
          className="md:p-20 p-0"
        >
          <img src="/images/gif-1.gif" alt="gif 1" className="w-full " />
        </motion.div>
        {/* box 2 ================================== */}
        {/* Right Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariant}
          className="md:p-20 p-0 md:block hidden"
        >
          <img src="/images/gif-2.gif" alt="gif 2" className="w-full " />
        </motion.div>
        <motion.div
          className="space-y-6 border box flex flex-col justify-center border-[#FFFFFF14] md:p-20 p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src="/images/shap-1.png"
            alt=""
            className="absolute top-0 left-0"
          />
          <img
            src="/images/shap-2.png"
            alt=""
            className="absolute !mt-0 top-0 right-0"
          />
          <img
            src="/images/shap-3.png"
            alt=""
            className="absolute bottom-0 left-0"
          />
          <img
            src="/images/shap-4.png"
            alt=""
            className="absolute bottom-0 right-0"
          />
          <h3 className="text-[#EE7C2C]">[ Development ]</h3>
          <motion.h1
            variants={textVariant}
            custom={1}
            className="gradient-text text-3xl sm:text-4xl lg:text-5xl "
          >
            Trusted Blockchain Data
          </motion.h1>

          <motion.div variants={textVariant} custom={2}>
            <ShinyText
              text="Navion uses Moralis, Etherscan, and CoinGecko MCP to deliver real-time, reliable blockchain data through a secure backend API."
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </motion.div>
          <motion.ul
            className="space-y-3 md:text-xl text-base"
            variants={listVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.li
              variants={itemVariant}
              className="flex items-center gap-2 font-light"
            >
              <GiCheckMark />
              Real-time & historical data via Moralis
            </motion.li>
            <motion.li
              variants={itemVariant}
              className="flex items-center gap-2 font-light"
            >
              <GiCheckMark /> Deep contract insights from Etherscan
            </motion.li>
            <motion.li
              variants={itemVariant}
              className="flex items-center gap-2 font-light"
            >
              <GiCheckMark />
              Trusted token metrics from CoinGecko MCP
            </motion.li>
          </motion.ul>
        </motion.div>
        {/* Second Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariant}
          className="md:hidden block"
        >
          <img
            src="/images/gif-2.gif"
            alt="gif 2"
            className="w-full rounded-xl shadow-xl "
          />
        </motion.div>

        {/* box 3 ================================== */}

        <motion.div
          className="space-y-6 box flex flex-col justify-center border border-[#FFFFFF14] md:p-20 p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src="/images/shap-1.png"
            alt=""
            className="absolute top-0 left-0"
          />
          <img
            src="/images/shap-2.png"
            alt=""
            className="absolute !mt-0 top-0 right-0"
          />
          <img
            src="/images/shap-3.png"
            alt=""
            className="absolute bottom-0 left-0"
          />
          <img
            src="/images/shap-4.png"
            alt=""
            className="absolute bottom-0 right-0"
          />
          <h3 className="text-[#EE7C2C]">[ Security ]</h3>
          <motion.h1
            variants={textVariant}
            custom={1}
            className="gradient-text text-3xl sm:text-4xl lg:text-5xl "
          >
         Why Traders Use Navion?
          </motion.h1>

          <motion.div variants={textVariant} custom={2}>
            <ShinyText
              text="A unified platform for price, contract, sentiment, and fundamental data—built for speed, accuracy, and action."
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-5"
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {data.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariant2}
                className="md:space-y-5 space-y-3 "
              >
                {item.icon}
                <h3 className="text-2xl">{item.heading}</h3>
                <ShinyText
                  text={item.para}
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        {/* Right Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariant}
          className="md:p-20 p-0"
        >
          <img src="/images/gif-3.gif" alt="gif 3" className="w-full " />
        </motion.div>
      </div>
    </div>
  );
}
