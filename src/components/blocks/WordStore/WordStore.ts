import { makeAutoObservable } from "mobx";

interface Word {
  word: string;
  transcription: string;
  translation: string;
  theme: string;
}

class WordStore {
  words: Word[] = [];
  loading: boolean = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchWords() {
    this.loading = true;
    try {
      const response = await fetch("http://itgirlschool.justmakeit.ru/api/words");
      if (!response.ok) {
        throw new Error("Failed to fetch words");
      }
      const data = await response.json();
      this.words = data;
    } catch (error) {
      this.error = "Ошибка загрузки данных";
    } finally {
      this.loading = false;
    }
  }

  addWord(newWord: Word) {
    this.words.push(newWord);
  }

  deleteWord(wordToDelete: string) {
    this.words = this.words.filter((word) => word.word !== wordToDelete);
  }

  updateWord(updatedWord: Word) {
    this.words = this.words.map((word) =>
      word.word === updatedWord.word ? updatedWord : word
    );
  }
}

const wordStore = new WordStore();
export default wordStore;
