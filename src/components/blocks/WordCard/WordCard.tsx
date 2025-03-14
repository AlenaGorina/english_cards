import style from "./WordCard.module.scss";

interface WordCardProps {
  word: string;
  transcription: string;
  translation: string;
  theme: string;
}

const WordCard: React.FC<WordCardProps> = ({
  word,
  transcription,
  translation,
  theme,
}) => {
  return (
    <div className={style.card}>
      <h2>{word}</h2>
      <p>Transcription: {transcription}</p>
      <p>Translation: {translation}</p>
      <p>Theme: {theme}</p>
    </div>
  );
};

export default WordCard;
