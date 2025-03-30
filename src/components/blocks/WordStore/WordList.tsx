import React from "react";
import AddWordForm from "./AddWordForm";
import WordTable from "./WordTable";

const WordList: React.FC = () => {
  return (
    <div>
      <AddWordForm />
      <WordTable />
    </div>
  );
};

export default WordList;
