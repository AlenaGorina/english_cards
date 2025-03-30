import { useEffect, useState } from "react";
import { observer } from "mobx-react";
import wordStore from "./WordStore";

const WordTable: React.FC = observer(() => {
  const { words, loading, error, deleteWord, updateWord } = wordStore; // Получаем из store все нужные данные и методы

  useEffect(() => {
    wordStore.fetchWords();
  }, []);

  const handleDelete = (wordToDelete: string) => {
    deleteWord(wordToDelete);
  };

  const handleUpdate = (updatedWord: {
    // Обработчик для обновления слова (будет использован для редактирования)
    word: string;
    transcription: string;
    translation: string;
    theme: string;
  }) => {
    updateWord(updatedWord);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Word</th>
          <th>Transcription</th>
          <th>Translation</th>
          <th>Theme</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {words.map((word, index) => (
          <tr key={index}>
            <td>{word.word}</td>
            <td>{word.transcription}</td>
            <td>{word.translation}</td>
            <td>{word.theme}</td>
            <td>
              <button onClick={() => handleDelete(word.word)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
});

export default WordTable;
