import React, { useState } from "react";
import WordCard from "../WordCard/WordCard";
import styles from "./WordCarousel.module.scss";

interface WordCarouselProps {
  words: Array<{
    word: string;
    transcription: string;
    translation: string;
    theme: string;
  }>;
}

const WordCarousel: React.FC<WordCarouselProps> = ({ words }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const showNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  const showPreviousCard = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + words.length) % words.length
    );
  };

  const handleShowTranslation = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  return (
    <div className={styles.carousel}>
      <WordCard
        {...words[currentIndex]}
        onShowTranslation={handleShowTranslation}
      />
      <div>
        <button onClick={showPreviousCard}>Previous</button>
        <button onClick={showNextCard}>Next</button>
      </div>
    </div>
  );
};

export default WordCarousel;
