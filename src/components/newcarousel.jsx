import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { HighlightList } from "../utils";
import { pauseImg, playImg } from "../utils";
import previousicon from '/assets/images/previous.svg';
import nexticon from '/assets/images/next.svg';


const VideoCarousel = () => {
  const videoRef = useRef([]);
  const progressBarRef = useRef([]);
  const sliderRef = useRef();
  const progressBarTimeline = useRef(null);
  const sliderTimeline = useRef(null);

  const [state, setState] = useState({
    videoId: 0,
    isPlaying: true,
  });

  const { videoId, isPlaying } = state;

  const resetVideoAndProgress = (index) => {
    if (videoRef.current[index]) {
      videoRef.current[index].pause();
      videoRef.current[index].currentTime = 0;
    }
    if (progressBarRef.current[index]) {
      gsap.set(progressBarRef.current[index], { width: "0%" });
    }
  };

  const togglePlayPause = () => {
    setState((prev) => {
      const newIsPlaying = !prev.isPlaying;
      // Update the current video play state
      if (videoRef.current[prev.videoId]) {
        if (newIsPlaying) {
          videoRef.current[prev.videoId].play();
        } else {
          videoRef.current[prev.videoId].pause();
        }
      }
      return { ...prev, isPlaying: newIsPlaying };
    });
  };

  const handleNext = () => {
    resetVideoAndProgress(videoId);
    setState((prev) => ({
      ...prev,
      videoId: (prev.videoId + 1) % HighlightList.length,
      isPlaying: true,
    }));
  };

  const handlePrevious = () => {
    resetVideoAndProgress(videoId);
    setState((prev) => ({
      ...prev,
      videoId: (prev.videoId - 1 + HighlightList.length) % HighlightList.length,
      isPlaying: true,
    }));
  };

  useEffect(() => {
    if (!sliderRef.current || !progressBarRef.current[videoId]) {
      console.error("GSAP target not found");
      return;
    }

    // Play/Pause videos
    videoRef.current.forEach((video, index) => {
      if (video) {
        if (index === videoId && isPlaying) {
          video
            .play()
            .then(() => console.log(`Playing video ${index}`))
            .catch((err) => console.error("Error playing video:", err));
        } else {
          video.pause();
        }
      }
    });

    // Play/Pause animations
    if (sliderTimeline.current && progressBarTimeline.current) {
      if (isPlaying) {
        sliderTimeline.current.play();
        progressBarTimeline.current.play();
      } else {
        sliderTimeline.current.pause();
        progressBarTimeline.current.pause();
      }
    }
  }, [isPlaying, videoId]);

  useEffect(() => {
    if (!sliderRef.current || !progressBarRef.current[videoId]) {
      console.error("GSAP target not found");
      return;
    }

    // Kill existing animations to avoid overlap
    if (progressBarTimeline.current) progressBarTimeline.current.kill();
    if (sliderTimeline.current) sliderTimeline.current.kill();

    const slider = sliderRef.current;
    const progressBar = progressBarRef.current[videoId];

    // Slider animation
    sliderTimeline.current = gsap.timeline();
    sliderTimeline.current.to(slider, {
      x: `-${videoId * 100}%`,
      duration: 1,
      ease: "power2.out",
    });

    // Progress bar animation
    progressBarTimeline.current = gsap.timeline({
      onComplete: handleNext, // Automatically move to the next slide
    });
    progressBarTimeline.current.to(progressBar, {
      width: "100%",
      duration: 5,
      ease: "linear",
    });

    return () => {
      if (progressBarTimeline.current) progressBarTimeline.current.kill();
      if (sliderTimeline.current) sliderTimeline.current.kill();
    };
  }, [videoId]);

  return (
    <>
      <div className="flex  justify-center items-center overflow-hidden relative">
        <div ref={sliderRef} className="slider flex justify-center">
          {HighlightList.map((list, i) => (
            <div key={list.id} className="w-full px-[40px] flex-shrink-0">
              <div className="relative">
                <video
                  ref={(el) => videoRef.current[i] = el}
                  muted
                  preload="auto"
                  className="pointer-events-none w-full"
                  onEnded={handleNext}
                >
                  <source src={list.video} type="video/mp4" />
                </video>

                <div className="absolute top-[50%] transform -translate-y-1/2 max-w-[38%] left-[6%] z-10">
                  <p className="text-5xl font-bold pb-[16px]">{list.textheading}</p>
                  <p className="md:text-lg text-md py-4">{list.textsubheading}</p>
                  <div className="w-fit py-2 px-3 rounded-3xl bg-black text-white font-semibold">
                    {list.buttontext}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <button
          className="absolute top-[50%] left-[50px] w-10 h-10 bg-gray-500 flex items-center justify-center pl-[8px] rounded-full"
          onClick={handlePrevious}
        >
          <img src={previousicon} />
        </button>

        <button
          className="absolute top-[50%] right-[50px] w-10 h-10 bg-gray-500 flex items-center justify-center pl-[8px]  rounded-full"
          onClick={handleNext}
        >
          <img src={nexticon} />
        </button>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex justify-center items-center">
        {/* Progress Bars */}
        <div className="flex items-center space-x-4 px-6">
          {HighlightList.map((_, i) => (
            <div
              key={i}
              className="relative w-40 h-[2px] bg-gray-500 overflow-hidden"
            >
              <div
                ref={(el) => (progressBarRef.current[i] = el)}
                className="absolute top-0 left-0 h-full bg-black"
              />
            </div>
          ))}
        </div>

        {/* Play/Pause Button */}
        <button
          className="ml-5 p-2 absolute -right-8"
          onClick={togglePlayPause}
        >
          <img
            className="w-4"
            src={isPlaying ? pauseImg : playImg}
            alt={isPlaying ? "Pause" : "Play"}
          />
        </button>
        
        
      </div>
    </>
  );
};

export default VideoCarousel;