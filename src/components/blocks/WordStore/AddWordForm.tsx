import { useState } from "react";
import wordStore from "./WordStore";

const AddWordForm: React.FC = () => {
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
    if (Object.values(newWord).some((value) => value === "")) {
      alert("Please fill all fields");
      return;
    }
    wordStore.addWord(newWord); //добавляем слово
    setNewWord({
      word: "",
      transcription: "",
      translation: "",
      theme: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Save</button>
    </form>
  );
};

export default AddWordForm;
