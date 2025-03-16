import React, { useState } from "react";
import WordCard from "../WordCard/WordCard";
import WordTable from "../WordTable/WordTable";
import AddWordForm from "../AddWordForm/AddWordForm";

import style from "./WordList.module.scss";

const WordList: React.FC = () => {
  const [words, setWords] = useState([
    {
      word: "house",
      transcription: "[haʊs]",
      translation: "дом",
      theme: "home",
    },
    {
      word: "cat",
      transcription: "[kæt]",
      translation: "кот",
      theme: "animals",
    },
  ]);

  const [learnedWordsCount, setLearnedWordsCount] = useState(0); // Состояние для подсчета изученных слов

  const addWord = (newWord: {
    word: string;
    transcription: string;
    translation: string;
    theme: string;
  }) => {
    setWords([...words, newWord]);
  };

  const deleteWord = (wordToDelete: string) => {
    setWords(words.filter((word) => word.word !== wordToDelete));
  };

  // Функция для увеличения счетчика изученных слов
  const handleShowTranslation = () => {
    setLearnedWordsCount((prev) => prev + 1);
  };

  return (
    <div className={style.wordList}>
      <h2>Learned Words: {learnedWordsCount}</h2>{" "}
      {/* Отображаем количество изученных слов */}
      <AddWordForm addWord={addWord} />
      <WordTable words={words} deleteWord={deleteWord} />
      {words.map((word, index) => (
        <WordCard
          key={index}
          {...word}
          onShowTranslation={handleShowTranslation} // Передаем функцию в WordCard
        />
      ))}
    </div>
  );
};

export default WordList;
