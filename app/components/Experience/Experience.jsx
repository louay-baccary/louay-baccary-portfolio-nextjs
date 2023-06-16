import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
function Experience() {
  return (
    <div className="flex flex-col items-center justify-center w-full space-y-8 text-white">
      <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        My Experience
      </h2>
      <h3 className="text-2xl font-extrabold">K2LIS-(2020-PRESENT)</h3>
      {/* <p className="w-1/4 mt-4 text-xl text-center text-white">
        At K2LIS, I have been working as a Full Stack JS Developer since April
        2020. In this role, I have been involved in various projects involving
        the creation of Single Page Applications (SPAs) and Progressive Web Apps
        (PWAs) using the MERN stack (MongoDB, Express.js, React.js, Node.js)
        with Redux Toolkit, Tailwind, and Firebase. I have also gained
        experience in developing browser extensions and npm packages.
      </p>
      <p className="w-1/4 mt-4 text-xl text-center text-white">
        Furthermore, I have been actively involved in building decentralized
        applications (dApps) using a range of languages, technologies, and
        frameworks such as Ethereum, Hardhat, IPFS, Remix, Solidity, and
        Metamask. Additionally, I have been responsible for deploying
        applications on IBM and AWS machines using PM2 and Docker.
      </p>
      <p className="w-1/4 mt-4 text-xl text-center text-white">
        Throughout my journey at K2LIS, I have focused on implementing
        responsive user interfaces (UI) that offer a seamless user experience
        (UX). I have maintained clean and testable code by utilizing ESLint and
        performing code analysis with SonarQube. Additionally, I have integrated
        third-party libraries like Google Authentication and Twitter APIs.
      </p>
      <p className="w-1/4 mt-4 text-xl text-center text-white">
        I have also been actively involved in refactoring code and conducting
        end-to-end and unit tests using Cypress, Jest, and React Testing
        Library. As part of my role, I have managed projects and teams using
        Jira and GitLab, proposing project architectures that foster efficiency
        and collaboration.
      </p> */}
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#800080", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #800080" }}
          date=""
          iconStyle={{ background: "#800080", color: "#fff" }}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
              />
            </svg>
          }
        >
          <p>
            {" "}
            At K2LIS, I have been working as a Full Stack JS Developer since
            April 2020. In this role, I have been involved in various projects
            involving the creation of Single Page Applications (SPAs) and
            Progressive Web Apps (PWAs) using the MERN stack (MongoDB,
            Express.js, React.js, Node.js) with Redux Toolkit, Tailwind, and
            Firebase. I have also gained experience in developing browser
            extensions and npm packages.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#800080", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #800080" }}
          date=""
          iconStyle={{ background: "#800080", color: "#fff" }}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
          }
        >
          <p>
            {" "}
            Furthermore, I have been actively involved in building decentralized
            applications (dApps) using a range of languages, technologies, and
            frameworks such as Ethereum, Hardhat, IPFS, Remix, Solidity, and
            Metamask. Additionally, I have been responsible for deploying
            applications on IBM and AWS machines using PM2 and Docker.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#800080", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #800080" }}
          date=""
          iconStyle={{ background: "#800080", color: "#fff" }}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
          }
        >
          <p>
            {" "}
            Throughout my journey at K2LIS, I have focused on implementing
            responsive user interfaces (UI) that offer a seamless user
            experience (UX). I have maintained clean and testable code by
            utilizing ESLint and performing code analysis with SonarQube.
            Additionally, I have integrated third-party libraries like Google
            Authentication and Twitter APIs.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#800080", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #800080" }}
          date=""
          iconStyle={{ background: "#800080", color: "#fff" }}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>
          }
        >
          <p>
            {" "}
            I have also been actively involved in refactoring code and
            conducting end-to-end and unit tests using Cypress, Jest, and React
            Testing Library. As part of my role, I have managed projects and
            teams using Jira and GitLab, proposing project architectures that
            foster efficiency and collaboration.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#800080", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #800080" }}
          date=""
          iconStyle={{ background: "#800080", color: "#fff" }}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              />
            </svg>
          }
        >
          <p>
            {" "}
            In terms of education, I hold a national engineering degree from
            Esprit, obtained in 2019, and I completed my scientific
            baccalaureate at Lycée 9 avril Sidi Bouzid in 2013.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#800080", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #800080" }}
          date=""
          iconStyle={{ background: "#800080", color: "#fff" }}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
              />
            </svg>
          }
        >
          <p>
            {" "}
            In summary, I possess a strong skill set that includes programming
            languages such as HTML, CSS, JavaScript, and Solidity. I am
            proficient in frameworks and libraries like React.js, Next.js,
            Express.js, Redux, Redux Toolkit, Tailwind CSS, Material-UI,
            Truffle, Hardhat, Storybook, and IPFS. Furthermore, I have
            experience working with databases like MongoDB and on-chain data in
            the Ethereum Blockchain. I am familiar with project management tools
            like Jira, GitLab, and GitHub, as well as SCRUM methodologies.
            Additionally, I have expertise in testing tools such as Cypress,
            Jest, React Testing Library, and Postman. I have utilized code
            analysis tools like SonarQube and ESLint and have experience with
            deployment tools like PM2, Docker, and Nginx.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#800080", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #800080" }}
          date=""
          iconStyle={{ background: "#800080", color: "#fff" }}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
              />
            </svg>
          }
        >
          <p>
            {" "}
            I am also a Certified Blockchain Developer, having obtained
            certification from the Blockchain Council. In terms of languages, I
            am fluent in Arabic, have a B2 level proficiency in French, and a B2
            level proficiency in English.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
