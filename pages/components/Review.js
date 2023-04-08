import React, { useState } from 'react';
import people from '../api/data';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import Modal from 'react-modal';

import Footer from './Footer';

// Share
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  // icons
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';

// Modal

Modal.setAppElement('#app');

const Review = () => {
  const [index, setIndex] = useState(0);
  const { yazar, yazarLink, yazarResmi, soz } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  // modal
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <article className=" flex h-screen w-full">
      <div className="bg-gray-300 dark:bg-gray-800 min-h-screen min-w-full flex justify-center items-center flex-col">
        <div className="bg-gray-200 dark:bg-gray-700 max-w-sm w-96 max-h-lg border-2 dark:border-gray-500 p-6 rounded-md tracking-wide shadow-lg">
          <div className="flex items-center mb-4">
            <img
              className="w-20 rounded-full border-2 border-gray-300"
              src={yazarResmi}
              alt={yazar}
            />
            <div className="leading-5 ml-6 sm">
              <a href={yazarLink}>
                <h4 className="text-xl font-semibold dark:text-gray-900">
                  {yazar}
                </h4>
              </a>
              <div className="flex justify-center mt-2 font text-teal-800 dark:text-teal-500">
                <svg
                  className="mr-4 cursor-pointer hover:fill-teal-400 hover:stroke-teal-600"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  onClick={() => {
                    return console.log('favorite');
                  }}
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                <svg
                  className="mr-4 cursor-pointer hover:fill-teal-400 hover:stroke-teal-600"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  onClick={() => {
                    return console.log('like');
                  }}
                >
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                </svg>
                <svg
                  className="cursor-pointer hover:fill-teal-400 hover:stroke-teal-600"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  onClick={() => {
                    console.log('share');
                    openModal();
                  }}
                >
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
              </div>
            </div>
          </div>
          <div id="quote">
            <q className="italic text-gray-600 dark:text-gray-300">{soz}</q>
          </div>
          <div className="button-container">
            <div className="w-full p-4 flex">
              <button
                className="w-full flex justify-center"
                onClick={prevPerson}
              >
                <FaChevronLeft />
              </button>
              <button
                className="w-full flex justify-center"
                onClick={nextPerson}
              >
                <FaChevronRight />
              </button>
            </div>
            <button
              className="w-full p-2 font-semibold text-white bg-gradient-to-r from-teal-400 to-teal-800"
              onClick={randomPerson}
            >
              Rasgele
            </button>
          </div>
        </div>
        <Footer />
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Share"
        className="min-h-screen bg-gray-800 flex items-center justify-center"
      >
        <div className="bg-gray-100 w-full mx-4 p-4 rounded-xl md:w-1/2 lg:w-1/3">
          <div className="flex justify-between items center border-b border-gray-200 py-3">
            <div className="flex items-center justify-center">
              <p className="text-xl font-bold text-gray-800">Sözü Paylaş</p>
            </div>

            <button
              onClick={closeModal}
              className="bg-gray-300 hover:bg-gray-500 cursor-pointer hover:text-gray-300 font-sans text-gray-500 w-8 h-8 flex items-center justify-center rounded-full"
            >
              X
            </button>
          </div>
          <div className="my-4">
            <p className="text-base font-semibold text-gray-900">
              Sözü şunlarla paylaş:
            </p>
            <div className="flex justify-around my-4">
              <div
                className="border hover:bg-[#1877f2] w-12 h-12 fill-[#1877f2] hover:fill-white border-blue-200 rounded-full flex items-center 
              justify-center shadow-xl hover:shadow-blue-500/50 cursor-pointer"
              >
                <FacebookShareButton
                  quote={soz + yazar}
                  url={'https://nextjs-jstycc--3000.local.webcontainer.io'}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                  </svg>
                </FacebookShareButton>
              </div>
              <div className="border hover:bg-[#1d9bf0] w-12 h-12 fill-[#1d9bf0] hover:fill-white border-blue-200 rounded-full flex items-center justify-center shadow-xl hover:shadow-sky-500/50 cursor-pointer">
                <TwitterShareButton
                  title={soz + yazar}
                  via={''}
                  url={'https://nextjs-jstycc--3000.local.webcontainer.io'}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                  </svg>
                </TwitterShareButton>
              </div>
              <div className="border hover:bg-[#25D366] w-12 h-12 fill-[#25D366] hover:fill-white border-green-200 rounded-full flex items-center justify-center shadow-xl hover:shadow-green-500/50 cursor-pointer">
                <WhatsappShareButton
                  url={'https://nextjs-jstycc--3000.local.webcontainer.io'}
                  title={soz + yazar}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"
                    ></path>
                  </svg>
                </WhatsappShareButton>
              </div>
            </div>
            <p className="text-base font-semibold text-gray-900">
              Ya da linki kopyala:
            </p>
            <div className="border-2 border-gray-200 flex justify-between items-center mt-4 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-gray-500 ml-2"
              >
                <path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"></path>
                <path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"></path>
              </svg>

              <input
                className="w-full px-2 outline-none bg-transparent"
                type="text"
                disabled
                placeholder="link"
                value={'Çok Yakında...'}
              />
              <button className="bg-indigo-500 text-white rounded text-sm py-2 px-5 mr-2 hover:bg-indigo-600">
                Kopyala
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </article>
  );
};

export default Review;
