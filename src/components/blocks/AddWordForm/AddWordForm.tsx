import React, { useState } from "react";
import styles from "./AddWordForm.module.scss";

interface AddWordFormProps {
  addWord: (word: {
    word: string;
    transcription: string;
    translation: string;
    theme: string;
  }) => void;
}

const AddWordForm: React.FC<AddWordFormProps> = ({ addWord }) => {
  const [newWord, setNewWord] = useState({
    word: "",
    transcription: "",
    translation: "",
    theme: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewWord((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addWord(newWord);
    setNewWord({ word: "", transcription: "", translation: "", theme: "" });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        name="word"
        value={newWord.word}
        onChange={handleChange}
        placeholder="Word"
      />
      <input
        type="text"
        name="transcription"
        value={newWord.transcription}
        onChange={handleChange}
        placeholder="Transcription"
      />
      <input
        type="text"
        name="translation"
        value={newWord.translation}
        onChange={handleChange}
        placeholder="Translation"
      />
      <input
        type="text"
        name="theme"
        value={newWord.theme}
        onChange={handleChange}
        placeholder="Theme"
      />
      <button type="submit">Add Word</button>
    </form>
  );
};

export default AddWordForm;
