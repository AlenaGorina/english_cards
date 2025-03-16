import React, { useState, useEffect } from "react";
import style from "./WordCard.module.scss";

interface WordCardProps {
  word: string;
  transcription: string;
  translation: string;
  theme: string;
  onShowTranslation: () => void; // Функция для увеличения счетчика изученных слов
}

const WordCard: React.FC<WordCardProps> = ({
  word,
  transcription,
  translation,
  theme,
  onShowTranslation,
}) => {
  const [showTranslation, setShowTranslation] = useState(false);

  const handleShowTranslation = () => {
    setShowTranslation(true);
    onShowTranslation(); // Увеличиваем счетчик изученных слов
  };

  useEffect(() => {
    // Фокусируемся на кнопке, когда карточка рендерится
    const button = document.getElementById(`show-translation-${word}`);
    button?.focus();
  }, [word]);

  return (
    <div className={style.card}>
      <h2>{word}</h2>
      <p>Transcription: {transcription}</p>
      {showTranslation ? (
        <p>Translation: {translation}</p>
      ) : (
        <button id={`show-translation-${word}`} onClick={handleShowTranslation}>
          Show Translation
        </button>
      )}
      <p>Theme: {theme}</p>
    </div>
  );
};

export default WordCard;
