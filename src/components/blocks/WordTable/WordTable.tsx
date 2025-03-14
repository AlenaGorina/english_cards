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
}

const WordTable: React.FC<WordTableProps> = ({ words, deleteWord }) => {
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
    setIsEditing(false);
    setEditingWord(null);
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
                <input value={editingWord.word} />
              ) : (
                word.word
              )}
            </td>
            <td>
              {isEditing && editingWord?.word === word.word ? (
                <input value={editingWord.transcription} />
              ) : (
                word.transcription
              )}
            </td>
            <td>
              {isEditing && editingWord?.word === word.word ? (
                <input value={editingWord.translation} />
              ) : (
                word.translation
              )}
            </td>
            <td>
              {isEditing && editingWord?.word === word.word ? (
                <input value={editingWord.theme} />
              ) : (
                word.theme
              )}
            </td>
            <td>
              {isEditing && editingWord?.word === word.word ? (
                <>
                  <button onClick={handleSave}>Save</button>
                  <button onClick={() => setIsEditing(false)}>Cancel</button>
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
