"use-client"
import React, { useState } from 'react'
import classes from './listCard.module.css'
import TutorModal from './tutorModal';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'



interface Tutor {
  tutorId: number;
  image: string;
  status: string;
  name: string;
  major: string;
  rate: string;
  comments: number;
  commentImage: string;
  commentName: string;
  commentDate: string;
  commentRating: number;
  commentContent: string;
}

export default function ListCard() {
  const [filterMajor, setFilterMajor] = useState('all');

  const [selectedTutor, setSelectedTutor] = useState<Tutor | null>(null);

  const handleButtonClick = (tutor: Tutor) => {
    setSelectedTutor(tutor);
  };

  const tutorsData = [
    {
      tutorId: 1,
      image: "https://s3-alpha-sig.figma.com/img/6181/1ae8/89b0660d6dd91bdedba586139a98a0fe?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dcar9Uyk96l2jpeTh2G6LaJt7V5gXJFk7gwxFXMec4JELFGSF8WvJm7gj~KmJh0u24qRFGSeo9qzVKVjNjfGK9V1R~6X8MclhaxavpFdUrxZUx7EAcibCZyMarwVSpLE5NtAOTFoFNsoHNUT~rm15LQuIQ2IDkHX9CQMCmmc~JltROwYdkvxWuffL6-I3TRyMVMZvq92cxBOlaVaMJorSIlqcSSnZOmk6L6PT3FfjrP19PRTh9S38DxgXq641FaK-gJSw-hFc2-min3OEZS9kYtIivRU1QH6rnGcZ~3M8AAyhoBXrtVQIgXBu0-k1OGeOIk4LgNqEP1PGp9ZPPc8rw__",
      status: "Available",
      name: "Adrian Bui",
      major: "Digital Marketing",
      rate: "(5.00)",
      comments: 11,
      commentImage: "https://s3-alpha-sig.figma.com/img/fde4/e33d/48235612ffa00786d8e10c5047314136?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hcN3DKoBkLHEUdWz2EKMMsIXYipVDdQe2B6cXnMJjf4QSYIXUBeMhHorPTJvmfDAk6JJ-bxMK9aW5349LKUtuQyi0CAzTlpaWZjZhS5o9ah8W2HWscan2eyffuJEXX17NStttDT19q1Z7x4VTkbzun9uc7egEMjrDsXCDn0qwlRlcL0lWprQHDkgp9cT-zVpc8a9dop1W1qNgxcEtUTs76htSWa1PH46Pf5lLTcHi-KcOt5a~yMgK4mPXVvz66TXspw3lN~1-2xeaSeeI6eL-yHgzlyYE6ihoB~xdNXt9JL84WYTJuAbpr7TVbR01NxNCVtjmDJXwug3njjJ8fueKQ__",
      commentName: "Anh Tu",
      commentDate: "December 20",
      commentRating: 4.75,
      commentContent: "The teacher teaches about color and agile behavior. Teachers have teaching experience, lectures are short and easy to understand, and instructions are provided.",
    },
    {
      tutorId: 2,
      image: "https://s3-alpha-sig.figma.com/img/ebc8/a27e/c8984d41c8d22ee5e1e8af38f1f4da8f?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JAH8eY24Gv~kbGclnARIWS0oLf-1tlpzrTXQZ9uvaQMV2sq6RRP61zDRWNwSLUE-A11AdcTgy3BQAKEmEmG-VZ49RrPk8HCz6Hj2FlLyTgrW0nfFoGNh5swFTofOn3fVJsyvdcn86RKaKhDyBzt1EVOIGV60y2cWSdLqFuhaOJfRoP9Kw5EJevVQmrHZxqQ9Cj7a4bzKqIx3Ih931YFnbftvYVorDYbgs3h55TPHx8T2SztYNnG~xbNOR3Fi1zIaLo7u94WQDoL2DtvrJwLTBXLgnDUeTnKf7qiQUu6vT3mEx29H40ZjAxSlKgYyxlIdpfZBT3hRF9q0uMmAWssf3Q__",
      status: "Available",
      name: "Mary Han",
      major: "International Business",
      rate: "(5.00)",
      comments: 11,
      commentImage: "https://s3-alpha-sig.figma.com/img/fde4/e33d/48235612ffa00786d8e10c5047314136?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hcN3DKoBkLHEUdWz2EKMMsIXYipVDdQe2B6cXnMJjf4QSYIXUBeMhHorPTJvmfDAk6JJ-bxMK9aW5349LKUtuQyi0CAzTlpaWZjZhS5o9ah8W2HWscan2eyffuJEXX17NStttDT19q1Z7x4VTkbzun9uc7egEMjrDsXCDn0qwlRlcL0lWprQHDkgp9cT-zVpc8a9dop1W1qNgxcEtUTs76htSWa1PH46Pf5lLTcHi-KcOt5a~yMgK4mPXVvz66TXspw3lN~1-2xeaSeeI6eL-yHgzlyYE6ihoB~xdNXt9JL84WYTJuAbpr7TVbR01NxNCVtjmDJXwug3njjJ8fueKQ__",
      commentName: "Anh Tu",
      commentDate: "December 20",
      commentRating: 4.75,
      commentContent: "The teacher teaches about color and agile behavior. Teachers have teaching experience, lectures are short and easy to understand, and instructions are provided.",
    },
    {
      tutorId: 3,
      image: "https://s3-alpha-sig.figma.com/img/3ca9/8d3d/c47b28e8e0f60a491c8404c708bd88bb?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dEfeD9JRukEAOxxnhdrulI97JSfB1L5Kr9tl3drpfToTKWBHmrCl2LniD2EA08OcYtlaMeMBzxe7U3MoXPXD~9QgZtN8pJ0AOS1t9thoErh-Ij5Pur51wZ7xj-qNXxUr6NWUBnMrfeDaXl7dckx15EehC5ea6ASzRixV2YWCVdzLY9dC2djuvdg9G1GqP76Yh-WZZOrhIidEzJsvAi8~1IRITqescWHqx5~KNHk~z1s9dy~EnC3XpRBX2GFvsv4mbvUKLKQPy-93OQej6Dmv1L3nPHIYOlFRnDk7ntWaO6an1a88ebJ9FMMH07U9akM7~wu7k2rfB9DUWl1MjSW6jQ__",
      status: "Available",
      name: "Porsha Nguyen",
      major: "Multimedia Communications",
      rate: "(5.00)",
      comments: 11,
      commentImage: "https://s3-alpha-sig.figma.com/img/fde4/e33d/48235612ffa00786d8e10c5047314136?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hcN3DKoBkLHEUdWz2EKMMsIXYipVDdQe2B6cXnMJjf4QSYIXUBeMhHorPTJvmfDAk6JJ-bxMK9aW5349LKUtuQyi0CAzTlpaWZjZhS5o9ah8W2HWscan2eyffuJEXX17NStttDT19q1Z7x4VTkbzun9uc7egEMjrDsXCDn0qwlRlcL0lWprQHDkgp9cT-zVpc8a9dop1W1qNgxcEtUTs76htSWa1PH46Pf5lLTcHi-KcOt5a~yMgK4mPXVvz66TXspw3lN~1-2xeaSeeI6eL-yHgzlyYE6ihoB~xdNXt9JL84WYTJuAbpr7TVbR01NxNCVtjmDJXwug3njjJ8fueKQ__",
      commentName: "Anh Tu",
      commentDate: "December 20",
      commentRating: 4.75,
      commentContent: "The teacher teaches about color and agile behavior. Teachers have teaching experience, lectures are short and easy to understand, and instructions are provided.",
    },
    {
      tutorId: 4,
      image: "https://s3-alpha-sig.figma.com/img/f1fd/d656/07eef0d4abb2a99c5ad961bcffc81c5f?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DcmWE0ZteAh6chYldsatebsDACUBGOVxHuEJgfizFf4y2dfg5yZZP8bMGSRniIce3yIYjHbjsxfDRd-tIV6SOhST5jK9BTZl0RDimGWp6mE0UhyxVtI7W1o9WulaYK4Ei8xl-OBRgxYFSO-OK8qmj9BQmxOlK-xURrONm19cDfWYxyZ7t36qMmspJltIy1J8vMHptYmrxQfdI7CMoeDaOpBlwhjRjA9pQ8sOnyhGYnwCSa78~absnhWUt71onxabTlIRBV39fT3IBPePLv6EdjY7-U~TNz3~Yb1Da85VutnwJvRxJ9MYO4J9jpFiP32N3UCIBGobfvtsGLDeOPxMdA__",
      status: "Available",
      name: "Dino Phi",
      major: "Software Engineering",
      rate: "(5.00)",
      comments: 11,
      commentImage: "https://s3-alpha-sig.figma.com/img/fde4/e33d/48235612ffa00786d8e10c5047314136?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hcN3DKoBkLHEUdWz2EKMMsIXYipVDdQe2B6cXnMJjf4QSYIXUBeMhHorPTJvmfDAk6JJ-bxMK9aW5349LKUtuQyi0CAzTlpaWZjZhS5o9ah8W2HWscan2eyffuJEXX17NStttDT19q1Z7x4VTkbzun9uc7egEMjrDsXCDn0qwlRlcL0lWprQHDkgp9cT-zVpc8a9dop1W1qNgxcEtUTs76htSWa1PH46Pf5lLTcHi-KcOt5a~yMgK4mPXVvz66TXspw3lN~1-2xeaSeeI6eL-yHgzlyYE6ihoB~xdNXt9JL84WYTJuAbpr7TVbR01NxNCVtjmDJXwug3njjJ8fueKQ__",
      commentName: "Anh Tu",
      commentDate: "December 20",
      commentRating: 4.75,
      commentContent: "The teacher teaches about color and agile behavior. Teachers have teaching experience, lectures are short and easy to understand, and instructions are provided.",
    },
    {
      tutorId: 5,
      image: "https://s3-alpha-sig.figma.com/img/b1b3/c23f/2e6fc427c9c5b4f68e823e6ab788ba99?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NifZndIC0R~0jCNDwH~u1jIemkQYlTsFXbhkMNwNNvii4CBcQcPFM4pMLwBC3YxdfUB1IB8QhUOlOGHu12L3yA0JBOrdWZ960wgyUqZfKpZExlpNqcKK6ZpIK2LahfG6Qr~uDRYEuSG9oqkdhG07F27Icq5b-0Hiitr-sulO4K44G6jtbPzt~pcmR9lOWYkqw~MqWwOPaOw2NzU-pDAje~FkvfZKmDnCksgNzHYs8AWZbtSRLZkiN~TLICHrQ3HhWtpvqnUwi~XYwxeWPggjj67USQymlRjB6qvl74c4xs02yFRfEjzsKrlV~paDww96N0oc~jlCNzCTxLmTgU8o~w__",
      status: "Available",
      name: "Peter Phu",
      major: "Software Engineering",
      rate: "(5.00)",
      comments: 11,
      commentImage: "https://s3-alpha-sig.figma.com/img/fde4/e33d/48235612ffa00786d8e10c5047314136?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hcN3DKoBkLHEUdWz2EKMMsIXYipVDdQe2B6cXnMJjf4QSYIXUBeMhHorPTJvmfDAk6JJ-bxMK9aW5349LKUtuQyi0CAzTlpaWZjZhS5o9ah8W2HWscan2eyffuJEXX17NStttDT19q1Z7x4VTkbzun9uc7egEMjrDsXCDn0qwlRlcL0lWprQHDkgp9cT-zVpc8a9dop1W1qNgxcEtUTs76htSWa1PH46Pf5lLTcHi-KcOt5a~yMgK4mPXVvz66TXspw3lN~1-2xeaSeeI6eL-yHgzlyYE6ihoB~xdNXt9JL84WYTJuAbpr7TVbR01NxNCVtjmDJXwug3njjJ8fueKQ__",
      commentName: "Anh Tu",
      commentDate: "December 20",
      commentRating: 4.75,
      commentContent: "The teacher teaches about color and agile behavior. Teachers have teaching experience, lectures are short and easy to understand, and instructions are provided.",
    },
  ];

  const filteredTutors = tutorsData.filter((tutor) => {
    if (filterMajor === 'all') {
      return true; // Show all tutors
    } else {
      return tutor.major.toLowerCase() === filterMajor.toLowerCase();
    }
  });

  const uniqueMajors = Array.from(new Set(tutorsData.map((tutor) => tutor.major)));




  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="flex justify-end my-2">
         
       <Menu as="div" className={`relative inline-block text-left mr-6`}>
  <div>
    <Menu.Button className={`${classes.filter} inline-flex w-full justify-center items-center gap-x-1.5 rounded-md px-3 py-2`}>
      Filter Major
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
      </svg>
      <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
    </Menu.Button>
  </div>

  <Transition
    as={Fragment}
    enter="transition ease-out duration-100"
    enterFrom="transform opacity-0 scale-95"
    enterTo="transform opacity-100 scale-100"
    leave="transition ease-in duration-75"
    leaveFrom="transform opacity-100 scale-100"
    leaveTo="transform opacity-0 scale-95"
  >
    <Menu.Items className="absolute right-0 z-10 mt-2 w-54 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
      <div className="py-1">
        {/* Add 'All Majors' button */}
        <Menu.Item>
          <button
            style={{ paddingLeft: "10px", width: '250px', paddingBottom: "10px", paddingTop: "10px", fontFamily: "Belanosima" }}
            className={`mr-4 ${filterMajor === 'all' ? 'text-blue-500 underline' : ''}`}
            onClick={() => setFilterMajor('all')}
          >
            All Majors
          </button>
        </Menu.Item>

        {/* Render other majors */}
        {uniqueMajors.map((major) => (
          <Menu.Item key={major}>
            <button
              style={{ paddingLeft: "10px", width: '250px', paddingBottom: "10px", paddingTop: "10px", fontFamily: "Belanosima" }}
              className={`mr-4 ${filterMajor === major ? 'text-blue-500 underline' : ''}`}
              onClick={() => setFilterMajor(major)}
            >
              {major}
            </button>
          </Menu.Item>
        ))}
      </div>
    </Menu.Items>
  </Transition>
</Menu>

        </div>

        <div className="container px-16 py-24 mx-auto">

          <div className="flex flex-wrap -m-6">
            <div>
              {filteredTutors.map((tutor, index) => (
                <div key={index} className={`${classes.cardTutorContainer} w-full mb-16 relative`}>
                  <div className="h-full flex items-center ">
                    <div className="relative flex-shrink-0">
                      <img
                        alt="team"
                        className={`${classes.cardTutorImage} object-cover object-center`}
                        src={tutor.image}
                      />
                      <div className={`${classes.status} absolute bottom-0 left-0 w-full`}>{tutor.status}</div>
                    </div>

                    <div className="mt-8 ml-6 grid grid-cols-1 gap-x-16 gap-y-5 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <h2 className={`${classes.tutorName} w-full`}>{tutor.name}</h2>
                      </div>
                      <div className="sm:col-span-3">
                        <button className={classes.cardTutorButton} onClick={() => handleButtonClick(tutor)}>See Details</button>
                      </div>
                      <TutorModal tutor={tutor} isOpen={selectedTutor !== null && tutor.tutorId === selectedTutor.tutorId} onClose={() => setSelectedTutor(null)} />
                      <div className="sm:col-span-4">
                        <div className={classes.tutorMajorTag}>
                          <p className={classes.tutorMajorContent}>{tutor.major}</p>
                        </div>
                      </div>

                      <div className="sm:col-span-full flex mb-2">
                        <div>
                          <h2 className={`${classes.tutorRate} w-full`}>{tutor.rate}</h2>
                        </div>
                        <div className="flex items-center ml-8">
                          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                            <path d="M0 11.0837V14H2.70796L10.6946 5.39897L7.98667 2.48271L0 11.0837ZM12.7888 3.14373C13.0704 2.84044 13.0704 2.35051 12.7888 2.04722L11.099 0.227468C10.8174 -0.0758228 10.3624 -0.0758228 10.0808 0.227468L8.75934 1.6506L11.4673 4.56687L12.7888 3.14373Z" fill="black" />
                          </svg>
                          <p className={`${classes.tutorComment} ml-2`}>{tutor.comments} comments</p>
                        </div>
                      </div>

                      <div className="sm:col-span-full flex items-center">
                        <img alt="comment image" className={classes.commentImage} src={tutor.commentImage} />
                        <div className="ml-3">
                          <h3 className={classes.commentName}>{tutor.commentName}</h3>
                          <p className={classes.commentDate}>{tutor.commentDate}</p>
                          </div>
                        <div className="flex items-center ml-14">
                          <p className={`${classes.commentRatingTypography} mr-3`}>Rating</p>
                          <p className={classes.commentRating}>{tutor.commentRating}</p>
                        </div>
                      </div>

                      <div className="sm:col-span-full mx-12">
                        <p className={classes.commentContent}>{tutor.commentContent}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
