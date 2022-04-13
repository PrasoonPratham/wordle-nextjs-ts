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

    return word.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <>
      {filteredData.length === 0 && (
        <div className="text-center text-gray-500">No words found</div>
      )}

      {filteredData.length > 0 &&
        filteredData.map((element: any) => (
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
