import toast from 'react-hot-toast';

import { wordlist } from '../constants/wordlist';

interface WordListProps {
  searchText: string;
}

export const WordList = ({ searchText }: WordListProps) => {
  const filteredData = wordlist.filter(word => {
    if (!searchText) {
      return word;
    }

    if (searchText.startsWith("re'") && searchText.endsWith("'")) {
      const regex = searchText.substring(3, searchText.length - 1);

      try {
        return word.match(regex);
      } catch (exc) {
        return false;
      }
    }

    let wordsSplit = word.split('');

    return searchText.split('').every(char => {
      return wordsSplit.includes(char);
    });
  });

  if (filteredData.length === 0) {
    return <div className="text-center text-gray-500">No words found</div>;
  }

  return (
    <>
      {filteredData.map((element: any) => (
        <h1
          key={element}
          onClick={() => navigator.clipboard.writeText(element)}
        >
          <div
            className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2 "
            onClick={() => toast.success(`Successfully copied ${element}`)}
          >
            <div className="flex-grow font-medium px-2">{element}</div>
          </div>
          <div className="w-full border-t border-gray-300" />
        </h1>
      ))}
    </>
  );
};
