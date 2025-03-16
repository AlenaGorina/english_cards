import React, { useState } from "react";
import styles from "./WordTable.module.scss";

interface WordTableProps {
  words: Array<{
    word: string;
    transcription: string;
    translation: string;
    theme: string;
  }>;
  deleteWord: (wordToDelete: string) => void;
  updateWord: (word: {
    word: string;
    transcription: string;
    translation: string;
    theme: string;
  }) => void;
}

const WordTable: React.FC<WordTableProps> = ({
  words,
  deleteWord,
  updateWord,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingWord, setEditingWord] = useState<{
    word: string;
    transcription: string;
    translation: string;
    theme: string;
  } | null>(null);

  const handleEdit = (word: any) => {
    setIsEditing(true);
    setEditingWord(word);
  };

  const handleSave = () => {
    if (editingWord) {
      updateWord(editingWord);
    }
    setIsEditing(false);
    setEditingWord(null);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditingWord(null);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setEditingWord((prev) =>
      prev ? { ...prev, [field]: e.target.value } : prev
    );
  };

  return (
    <table className={styles.table}>
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
            <td>
              {isEditing && editingWord?.word === word.word ? (
                <input
                  value={editingWord.word}
                  onChange={(e) => handleChange(e, "word")}
                />
              ) : (
                word.word
              )}
            </td>
            <td>
              {isEditing && editingWord?.word === word.word ? (
                <input
                  value={editingWord.transcription}
                  onChange={(e) => handleChange(e, "transcription")}
                />
              ) : (
                word.transcription
              )}
            </td>
            <td>
              {isEditing && editingWord?.word === word.word ? (
                <input
                  value={editingWord.translation}
                  onChange={(e) => handleChange(e, "translation")}
                />
              ) : (
                word.translation
              )}
            </td>
            <td>
              {isEditing && editingWord?.word === word.word ? (
                <input
                  value={editingWord.theme}
                  onChange={(e) => handleChange(e, "theme")}
                />
              ) : (
                word.theme
              )}
            </td>
            <td>
              {isEditing && editingWord?.word === word.word ? (
                <>
                  <button onClick={handleSave}>Save</button>
                  <button onClick={handleCancel}>Cancel</button>
                </>
              ) : (
                <>
                  <button onClick={() => handleEdit(word)}>Edit</button>
                  <button onClick={() => deleteWord(word.word)}>Delete</button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WordTable;
