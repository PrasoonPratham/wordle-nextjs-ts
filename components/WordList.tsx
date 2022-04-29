import { useEffect } from 'react';

import { toast } from 'react-hot-toast';
import { useInfiniteQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';

import { wordlist } from '../constants/wordlist';

const MAX_WORDS_PER_PAGE = 100;

interface WordListProps {
  searchText: string;
}

export const WordList = ({ searchText }: WordListProps) => {
  const { ref, inView } = useInView();

  const { data, isLoading, fetchNextPage } = useInfiniteQuery(
    ['wordlist', searchText],
    async ({ pageParam = 0 }) => {
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

      return filteredData.slice(pageParam, pageParam + MAX_WORDS_PER_PAGE);
    },
    {
      getNextPageParam: lastPage => {
        return lastPage.length + MAX_WORDS_PER_PAGE;
      }
    }
  );

  // Update list on load.
  useEffect(() => {
    if (inView) {
      fetchNextPage();
      console.log('Fetching next page', data?.pages.length);
    }
  }, [inView, fetchNextPage, data]);

  if (isLoading) {
    return <div className="text-center text-gray-500">Loading words.</div>;
  }

  if (data?.pages.length === 0) {
    return <div className="text-center text-gray-500">No words found</div>;
  }

  return (
    <>
      {data?.pages.map(page => (
        // I couldn't find anything more unique to use as the key.
        <div key={Math.random().toString(36).substring(2, 15)} ref={ref}>
          {page.map((word: string) => (
            <h1 key={word} onClick={() => navigator.clipboard.writeText(word)}>
              <div
                className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2 "
                onClick={() => toast.success(`Successfully copied ${word}`)}
              >
                <div className="flex-grow font-medium px-2">{word}</div>
              </div>
              <div className="w-full border-t border-gray-300" />
            </h1>
          ))}
        </div>
      ))}
    </>
  );
};
