import toast from 'react-hot-toast';

import { wordlist } from '../constants/wordlist';

interface WordListProps {
  searchText: string;
}

// function find(words: Array<string>, str: any) {
//   // split the string into an array
//   str = str.split('');

//   // `filter` returns an array of array elements according
//   // to the specification in the callback when a new word
//   // is passed to it
//   return words.filter(function (word) {
//     // that callback says to take every element
//     // in the `str` array and see if it appears anywhere
//     // in the word. If it does, it's a match, and
//     // `filter` adds that word to the output array
//     return str.every(function (char: string) {
//       return word.includes(char);
//     });
//   });
// }

export const WordList = ({ searchText }: WordListProps) => {
  const filteredData = wordlist.filter(word => {
    if (!searchText) {
      return word;
    }

    return word.toLowerCase().includes(searchText.toLowerCase());
    // return find(searchText.toLowerCase(), word.toLowerCase());
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
