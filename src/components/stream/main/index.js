import React, {useRef} from 'react';
import styles from './styles.module.css';

import Modal from 'react-modal';
import Agenda from '../agenda';
import FAQ from '../faq';
import Room from '../room';
import Speakers from '../speakers';

import BrowserOnly from '@docusaurus/BrowserOnly';
import {PopupButton} from '@typeform/embed-react';
import {useEffect, useState} from 'react';
import io from 'socket.io-client';
import {
  getSpeaker,
  submitAttendance,
  submitSurvey,
} from '../../../services/StreamService';

const socket = io('https://developer-community-backend.herokuapp.com');

export default function Main() {
  const [isConnected, setIsConnected] = useState(false);
  const typeformRef = useRef(null);
  const typeformEntryRef = useRef(null);

  const BackupStageData = {
    IDN: {
      day: '1',
      topic: 'Conference Starting 03.07.23',
      startTime: '2023-03-07T14:00:00.000Z',
      endTime: '2023-03-07T15:00:00.000Z',
      stage: 'IDN',
      active: true,
      speakers: [],
      id: 'reciq5lGqHOyl1Zzy',
      muxPlaybackId: 'placeholdervideo',
      muxEnvironmentKey: 'j4iije0sv1ih8shgurfp3ldkq',
      typeformId: 'RlYAvjZo',
      surveyDisplayed: false,
      allStages: false,
      hidden: true,
    },
    IIQ: {
      day: '1',
      topic: 'Conference Starting 03.07.23',
      startTime: '2023-03-07T14:00:00.000Z',
      endTime: '2023-03-07T15:00:00.000Z',
      stage: 'IIQ',
      active: true,
      speakers: [],
      id: 'reciq5lGqHOyl1Zzy',
      muxPlaybackId: 'placeholdervideo',
      muxEnvironmentKey: 'j4iije0sv1ih8shgurfp3ldkq',
      typeformId: 'RlYAvjZo',
      surveyDisplayed: false,
      allStages: false,
      hidden: true,
    },
  };

  const [stages, setStages] = useState(BackupStageData);
  const [stage, setStage] = useState('IDN');
  const [speakers, setSpeakers] = useState([]);
  const [surveyOpen, setSurveyOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedback, setFeedback] = useState('');

  const [validationError, setvalidationError] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');

  const getSpeakers = async () => {
    const data = await getSpeaker();
    console.log('Speaker Data');
    console.log(data);
    setSpeakers(data);
  };

  React.useEffect(() => {
    getSpeakers();
  }, []);

  React.useEffect(() => {
    openLoginPage();
  }, []);

  //setting socket here
  useEffect(() => {
    console.log('Creating effect');
    socket.on('connect', () => {
      console.log('Socket Connect');
      socket.emit('register');
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('stream', (data) => {
      console.log('incoming Data');
      console.log(data);

      if (data?.stages?.IDN) {
        if (Object.keys(data.stages?.IDN).length <= 0) {
          data.stages.IDN = BackupStageData.IDN;
        }
      }

      if (data?.stages?.IIQ) {
        if (Object.keys(data.stages?.IIQ).length <= 0) {
          data.stages.IIQ = BackupStageData.IIQ;
        }
      }

      setStages(data.stages);
    });

    socket.on('survey', (data) => {
      if (stage === data) {
        setSurveyOpen(true);
      }
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('stream');
      socket.off('survey');
    };
  }, []);

  function changeToIDNStage() {
    setStage('IDN');
  }
  function changeToIIQStage() {
    setStage('IIQ');
  }

  function openLoginPage() {
    setTimeout(() => {
      console.log('opening login page');
      var GivenDate = '2023-03-01';
      var CurrentDate = new Date();
      GivenDate = new Date(GivenDate);
      let pop_status = localStorage.getItem('entry-status');
      if (!pop_status && GivenDate < CurrentDate) {
        setLoginOpen(true);
      }
    }, 1000);
  }

  Modal.setAppElement('#__docusaurus');

  const eventSpeakers = stages[stage]?.speakers?.map((speakerId, index) => {
    return speakers.filter((obj) => obj.id === speakerId)[0];
  });

  const iiqSelectedClass = stage === 'IIQ' ? styles.stageButtonActive : '';
  const idnSelectedClass = stage === 'IDN' ? styles.stageButtonActive : '';

  return (
    <div className={styles.main}>
      <div className="px-2 md:px-4 py-6 my-2 flex flex-col md:flex-row justify-between gap-4">
        <div className="">
          <div className={`${styles.headerText} my-auto`}>
            {stages[stage]?.topic}
          </div>

          <div className={styles.timeText}>
            {stages[stage]?.startTime &&
              new Date(stages[stage]?.startTime).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            {(stages[stage]?.endTime &&
              `-` +
                new Date(stages[stage]?.endTime).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })) ||
              null}
          </div>
          {stages[stage]?.topicLink && (
            <div className="py-2">
              <a href={stages[stage]?.topicLink}>
                Discuss this topic in the Developer Community
              </a>
            </div>
          )}

          <div className="flex flex-row flex-wrap gap-8">
            {eventSpeakers?.map((spkr) => {
              return (
                <div key={spkr?.name} className="flex flex-row gap-2">
                  <img src={spkr?.image} className="rounded-full w-12 h-12" />
                  <div className="flex flex-col justify-center">
                    <div className={`${styles.speakerText} font-bold text-lg`}>
                      {spkr?.name}
                    </div>
                    <div
                      className={`${styles.speakerText} font-semibold text-base whitespace-nowrap`}>
                      {spkr?.title}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className="flex flex-row gap-1 md:gap-2 w-full justify-center md:justify-between">
            <Agenda
              description={
                'The agenda for the 3 conference days are below. If you have any questions about the agenda, reach out via the discussion forum.'
              }
              title={'Agenda'}
              image={'/homepage/team.png'}
              speakers={speakers}
            />
            <FAQ
              description={
                "if you still can't find what you are looking for, reach out to us on our discussion board"
              }
              title={'Frequently Asked Questions'}
              image={'/homepage/discuss.png'}
            />
            <Speakers
              description={
                'Here are the awesome speakers we have lined up for Developer Days 2022'
              }
              title={'Speakers'}
              image={'/homepage/person-head.png'}
              speakers={speakers}
            />

            <div>
              <button
                className="cursor-pointer border-[color:var(--ifm-color-primary)] md:grow border-2 hover:bg-[color:var(--ifm-color-primary)] hover:text-white text-[color:var(--ifm-color-primary)] border-solid text-center bg-transparent font-bold py-2 px-4 rounded"
                onClick={() => setSurveyOpen(true)}>
                Survey
              </button>
              <Modal
                isOpen={surveyOpen}
                onRequestClose={() => setSurveyOpen(false)}
                className={styles.modal}
                contentLabel="Survey">
                <div className="md:h-[50vh] sm:w-[90vw] h-[45vh] overflow-auto p-4">
                  <div className="h-full flex flex-col">
                    <div className="flex flex-row justify-end">
                      <button
                        onClick={() => setSurveyOpen(false)}
                        className="bg-transparent border-none">
                        <p className="text-2xl my-auto">X</p>
                      </button>
                    </div>
                    <ol className="flex flex-col grow justify-center gap-12 m-0 px-8">
                      <li>
                        <p className="my-0">
                          How valuable was the session "{stages[stage]?.topic}"
                          to you?
                        </p>
                        <div className="py-4">
                          {[...Array(5)].map((star, index) => {
                            index += 1;
                            return (
                              <button
                                key={index}
                                className={`cursor-pointer bg-transparent border-none outline-none ${
                                  index <= (hover || rating)
                                    ? 'text-yellow-400'
                                    : 'text-gray-200'
                                }
                                `}
                                onClick={() => setRating(index)}
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(rating)}>
                                <span className="text-3xl">&#9733;</span>
                              </button>
                            );
                          })}
                        </div>
                      </li>
                      <li>
                        <p>
                          Is there anything else you'd like the presenter(s) of
                          this session to know?
                        </p>
                        <textarea
                          className="max-w-full w-full h-40 resize-none block p-2.5 font-[poppins] text-gray-900  rounded-lg border focus:ring-blue-500 focus:border-blue-500 placeholder:text-[color:var(--ifm-color-primary)]"
                          placeholder="Write your thoughts here..."
                          onInput={(e) => {
                            setFeedback(e.target.value);
                          }}
                        />
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="flex flex-row justify-end">
                  <button
                    className={styles.modalButton}
                    onClick={() => {
                      submitSurvey(stages[stage].id, rating, feedback);
                      setSurveyOpen(false);
                    }}>
                    Submit
                  </button>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center md:justify-start py-1 md:py-0 px-[0.5%] w-full gap-[0.5%]">
        <button
          className={`${styles.stageButton} ${idnSelectedClass} border-solid px-4 min-w-[140px]`}
          onClick={changeToIDNStage}>
          <p className="text-lg whitespace-nowrap my-0">IdentityNow</p>
        </button>

        <button
          className={`${styles.stageButton} ${iiqSelectedClass} border-solid px-4 min-w-[140px]`}
          onClick={changeToIIQStage}>
          <p className="text-lg text-center whitespace-nowrap my-0">
            IdentityIQ
          </p>
        </button>
      </div>
      <BrowserOnly>
        {() => <Room videoSource={stages[stage]}></Room>}
      </BrowserOnly>

      <Modal
        isOpen={loginOpen}
        onRequestClose={openLoginPage}
        className={styles.modal}
        contentLabel="Survey">
        <div className="md:h-[50vh] sm:w-[90vw] h-[45vh] overflow-auto p-4">
          <div className="h-full flex flex-row justify-center w-full">
            <ul className="flex flex-col justify-center gap-6 m-0 px-8 list-none">
              <li>
                <label>
                  What is your email address?
                  {validationError === true && (
                    <p class="text-red-500 my-0 pl-2">Error Validating Email</p>
                  )}
                  <input
                    className="max-w-full w-[420px] resize-none block p-2.5 font-[poppins] text-gray-900  rounded-lg border focus:ring-blue-500 focus:border-blue-500 placeholder:text-[color:var(--ifm-color-primary)]"
                    placeholder="Email"
                    onInput={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </label>
              </li>
              <li>
                <label>
                  What name shall we address you by?
                  <input
                    className="max-w-full w-[420px] resize-none block p-2.5 font-[poppins] text-gray-900  rounded-lg border focus:ring-blue-500 focus:border-blue-500 placeholder:text-[color:var(--ifm-color-primary)]"
                    placeholder="Name"
                    onInput={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </label>
              </li>
              <li>
                <label>
                  What title are you most often addressed by?
                  <select
                    className="max-w-full w-[420px] resize-none block p-2.5 font-[poppins] rounded-lg border focus:ring-blue-500 focus:border-blue-500 placeholder:text-[color:var(--ifm-color-primary)]"
                    placeholder="Title"
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    defaultValue="select">
                    <option disabled>select</option>
                    <option>Developer</option>
                    <option>Architect</option>
                    <option>Solutions</option>
                    <option>Consultant</option>
                    <option>Director</option>
                    <option>SVP/VP</option>
                    <option>CEO</option>
                  </select>
                </label>
              </li>
              <li>
                <label>
                  What company are you joining on behalf of today?
                  <input
                    className="max-w-full w-[420px] resize-none block p-2.5 font-[poppins] text-gray-900  rounded-lg border focus:ring-blue-500 focus:border-blue-500 placeholder:text-[color:var(--ifm-color-primary)]"
                    placeholder="Company"
                    onInput={(e) => {
                      setCompany(e.target.value);
                    }}
                  />
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row justify-end">
          <button
            className={styles.modalButton}
            onClick={async () => {
              const validated = await submitAttendance(
                email,
                name,
                title,
                company,
              );
              if (validated) {
                setLoginOpen(false);
              } else {
                setvalidationError(true);
              }
            }}>
            Submit
          </button>
        </div>
      </Modal>
    </div>
  );
}
