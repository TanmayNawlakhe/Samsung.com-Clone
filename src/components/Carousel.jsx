import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { HighlightList } from "../utils";
import { pauseImg, playImg } from "../utils";
import previousicon from '/assets/images/previous.svg';
import nexticon from '/assets/images/next.svg';

const VideoCarousel = () => {
  const videoRefs = useRef([]);
  const progressBarRef = useRef([]);
  const sliderRef = useRef(null);
  const progressBarTimeline = useRef(null);
  const sliderTimeline = useRef(null);

  const [state, setState] = useState({
    slideId: 0,
    isPlaying: true,
    isTransitioning: false,
    isMobile: window.innerWidth < 720
  });

  const { slideId, isPlaying, isTransitioning, isMobile } = state;

  const SLIDE_DURATION = 5;
  const TRANSITION_DURATION = 1;

  const resetMediaAndProgress = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
      videoRefs.current[index].currentTime = 0;
    }
    if (progressBarRef.current[index]) {
      gsap.set(progressBarRef.current[index], { width: "0%" });
    }
  };

  const startProgressAnimation = () => {
    if (!progressBarRef.current[slideId]) return;

    if (progressBarTimeline.current) {
      progressBarTimeline.current.kill();
    }

    progressBarTimeline.current = gsap.timeline({
      onComplete: handleNext
    });

    progressBarTimeline.current.fromTo(
      progressBarRef.current[slideId],
      { width: "0%" },
      {
        width: "100%",
        duration: SLIDE_DURATION,
        ease: "none"
      }
    );

    if (!isPlaying) {
      progressBarTimeline.current.pause();
    }
  };

  const handleSlideTransition = (newSlideId) => {
    if (!sliderRef.current) return;

    setState(prev => ({ ...prev, isTransitioning: true }));

    if (sliderTimeline.current) {
      sliderTimeline.current.kill();
    }

    sliderTimeline.current = gsap.timeline({
      onComplete: () => {
        setState(prev => ({ ...prev, isTransitioning: false }));
        startProgressAnimation();
      }
    });

    sliderTimeline.current.to(sliderRef.current, {
      x: `-${newSlideId * 100}%`,
      duration: TRANSITION_DURATION,
      ease: "power2.out"
    });
  };

  const togglePlayPause = () => {
    setState(prev => {
      const newIsPlaying = !prev.isPlaying;
      const currentVideo = videoRefs.current[slideId];

      if (currentVideo) {
        if (newIsPlaying) {
          currentVideo.play().catch(err => console.error("Error playing video:", err));
        } else {
          currentVideo.pause();
        }
      }

      if (progressBarTimeline.current) {
        if (newIsPlaying) {
          progressBarTimeline.current.play();
        } else {
          progressBarTimeline.current.pause();
        }
      }

      return { ...prev, isPlaying: newIsPlaying };
    });
  };

  const handleNext = () => {
    if (isTransitioning) return;
    resetMediaAndProgress(slideId);
    const newSlideId = (slideId + 1) % HighlightList.length;
    setState(prev => ({ ...prev, slideId: newSlideId, isPlaying: true }));
  };

  const handlePrevious = () => {
    if (isTransitioning) return;
    resetMediaAndProgress(slideId);
    const newSlideId = (slideId - 1 + HighlightList.length) % HighlightList.length;
    setState(prev => ({ ...prev, slideId: newSlideId, isPlaying: true }));
  };

  useEffect(() => {
    const handleResize = () => {
      setState(prev => ({
        ...prev,
        isMobile: window.innerWidth < 720
      }));
    };

    videoRefs.current = videoRefs.current.slice(0, HighlightList.length);
    if (!isTransitioning) {
      startProgressAnimation();
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (progressBarTimeline.current) {
        progressBarTimeline.current.kill();
      }
      if (sliderTimeline.current) {
        sliderTimeline.current.kill();
      }
    };
  }, []);

  useEffect(() => {
    handleSlideTransition(slideId);

    HighlightList.forEach((_, index) => {
      const video = videoRefs.current[index];
      if (video) {
        if (index === slideId && isPlaying) {
          video.play().catch(err => console.error("Error playing video:", err));
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [slideId]);

  return (
    <div className="flex items-center overflow-hidden relative">
      <div ref={sliderRef} className="slider flex relative">
        {HighlightList.map((list, i) => (
          <div key={list.id} className="overflow:hidden w-full h-fit sm:h-[90vh] sm:px-[40px] flex-shrink-0">
            <div className="relative flex justify-center items-center">
              {(list.id === 1 || list.id === 2) ? (
                <video
                  ref={el => videoRefs.current[i] = el}
                  muted
                  preload="auto"
                  className="pointer-events-none w-full h-[95vh] sm:h-full object-cover mx-auto"
                  onEnded={() => {
                    if (i === slideId) handleNext();
                  }}
                >
                  <source src={isMobile ? list.video2 : list.video} type="video/mp4" />
                </video>
              ) : (
                <div className="w-full h-full flex justify-center items-center">
                  <img
                    src={isMobile ? list.image2 : list.image}
                    alt={list.textheading}
                    className="w-full sm:object-center h-[95vh] sm:h-full object-cover"
                  />
                </div>
              )}

              {list.id===2 ? (
                <div className="absolute flex items-center sm:items-start flex-col top-[80%] sm:top-[15%] text-center sm:text-start transform -translate-y-1/2 max-w-[60%] sm:max-w-[38%] sm:right-[6%] z-10">
                  <p className=" hidden sm:block text-base sm:text-lg text-white">{list.textsubheading}</p>
                  <p className="text-xs sm:text-sm opacity-85 pb-3 pt-1 text-white">{list.textsubheading2}</p>
                  <div className="w-fit py-2 px-3 rounded-3xl border-[1px] border-white transition-all duration-100 ease-in-out cursor-pointer font-semibold bg-white hover:bg-black hover:text-white">
                    {list.buttontext}
                  </div>
                </div>
              ) : (list.id === 4 || list.id === 5) ? (
                <div className="flex flex-col justify-center items-center sm:items-start text-center absolute top-[25%] transform sm:text-start -translate-y-1/2 max-w-[75%] sm:max-w-[38%] sm:left-[6%] z-10">
                  <p className={`text-3xl sm:text-5xl font-bold pb-[7px] sm:pb-[16px] ${list.id === 4 ? "text-white" : ""}`}>{list.textheading}</p>
                  <div>
                    <p className={`md:text-lg text-md ${list.id === 4 ? "text-white" : ""}`}>{list.textsubheading}</p>
                    <p className={`md:text-lg text-md pb-2 ${list.id === 4 ? "text-white" : ""}`}>{list.textsubheading2}</p>
                  </div>
                  <div className={`w-fit py-2 px-3 rounded-3xl font-semibold ${list.id === 4 ? "bg-white" : "bg-black text-white"}`}>
                    {list.buttontext}
                  </div>
                </div>
              
              ) : (
                <div className="absolute top-[30%] flex  transform -translate-y-1/2 max-w-[75%] flex-col justify-center items-center  sm:items-start text-center sm:max-w-[38%] sm:left-[6%] sm:text-start z-10">
                  <p className={`text-3xl sm:text-5xl font-bold pb-[7px] sm:pb-[16px]  ${list.id === 3  ? "text-white" : ""}`}>{list.textheading}</p>
                  <p className={`md:text-lg text-md pb-3 sm:py-4   ${list.id === 3  ? "text-white" : ""}`}>{list.textsubheading}</p>
                  <div className={`w-fit py-2 px-3 rounded-3xl font-semibold  ${list.id === 3 ? "bg-white" : "bg-black text-white"}`}>
                    {list.buttontext}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute top-[50%] left-[50px] w-10 h-10 bg-gray-500 opacity-50 hover:opacity-100 hidden sm:flex items-center justify-center pl-[8px] rounded-full"
        onClick={handlePrevious}
        disabled={isTransitioning}
      >
        <img src={previousicon} alt="Previous" />
      </button>

      <button
        className="absolute top-[50%] right-[50px] w-10 h-10 bg-gray-500 opacity-50 hover:opacity-100 hidden sm:flex items-center justify-center pr-[2px] rounded-full"
        onClick={handleNext}
        disabled={isTransitioning}
      >
        <img src={nexticon} alt="Next" />
      </button>

      <div className="absolute bottom-5 sm:bottom-12 left-1/2 transform -translate-x-1/2 flex justify-center items-center">
        <div className="flex items-center space-x-4 px-3 sm:px-6 py-2 sm:py-0 rounded-e-full rounded-s-full bg-slate-300 sm:bg-transparent">
          {HighlightList.map((item, i) => (
            <div
              key={i}
              className="relative w-1 sm:w-40 h-1 sm:h-[2px] rounded-full sm:rounded-none bg-gray-500 overflow-hidden"
            >
              <div
                ref={el => progressBarRef.current[i] = el}
                className={`absolute top-0 left-0 h-full ${item.id === 3 || item.id === 4 ? "bg-white" : "bg-black"}`}
              />
            </div>
          ))}
        </div>

        <button
          className="ml-5 p-2 absolute -right-8"
          onClick={togglePlayPause}
          disabled={isTransitioning}
        >
          <img
            className="w-4"
            src={isPlaying ? pauseImg : playImg}
            alt={isPlaying ? "Pause" : "Play"}
          />
        </button>
      </div>
    </div>
  );
};

export default VideoCarousel;