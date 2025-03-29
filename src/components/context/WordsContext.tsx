import React, { createContext, useContext, useState, useEffect } from "react";

interface Word {
  word: string;
  transcription: string;
  translation: string;
  theme: string;
}

interface WordsContextProps {
  words: Word[];
  addWord: (word: Word) => void;
  deleteWord: (wordToDelete: string) => void;
  updateWord: (word: Word) => void;
  loading: boolean;
  error: string | null;
}

const WordsContext = createContext<WordsContextProps | undefined>(undefined);

const WordsProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [words, setWords] = useState<Word[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWords = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "http://itgirlschool.justmakeit.ru/api/words"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch words");
        }
        const data = await response.json();
        setWords(data);
      } catch (err) {
        setError("Ошибка загрузки данных");
      } finally {
        setLoading(false);
      }
    };

    fetchWords();
  }, []);

  const addWord = (newWord: Word) => {
    setWords((prevWords) => [...prevWords, newWord]);
  };

  const deleteWord = (wordToDelete: string) => {
    setWords((prevWords) =>
      prevWords.filter((word) => word.word !== wordToDelete)
    );
  };

  const updateWord = (updatedWord: Word) => {
    setWords((prevWords) =>
      prevWords.map((word) =>
        word.word === updatedWord.word ? updatedWord : word
      )
    );
  };

  return (
    <WordsContext.Provider
      value={{ words, addWord, deleteWord, updateWord, loading, error }}
    >
      {children}
    </WordsContext.Provider>
  );
};

const useWords = (): WordsContextProps => {
  const context = useContext(WordsContext);
  if (!context) {
    throw new Error("useWords must be used within a WordsProvider");
  }
  return context;
};

export { WordsProvider, useWords };
