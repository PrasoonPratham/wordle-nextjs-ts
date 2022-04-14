import Head from 'next/head';
import { useState } from 'react';

import { WordList } from '../components/WordList';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <>
      <Head>
        <title>Wordle solver | PrathamPrasoon.com</title>
      </Head>
      <div className="bg-gradient-to-tl from-lime-300 via-teal-300 to-sky-300">
        <div className="w-full max-w-screen-xl mx-auto px-6">
          <div className="flex justify-center p-4 px-3 py-10">
            <div className="w-full max-w-md">
              <div className="grid place-items-center text-6xl py-10">
                <span className="font-mono text-black/[.7]">Wordle Helper</span>
              </div>
              <div className="bg-white rounded-lg px-3 py-3 mb-4">
                <div className="flex items-center bg-gray-200 rounded-md py-2">
                  <div className="pl-2">
                    <svg
                      className="fill-current text-gray-500 w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        className="heroicon-ui"
                        d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                      />
                    </svg>
                  </div>
                  <input
                    className="w-full rounded-md bg-gray-200 text-gray-700 leading-tight focus:outline-none py-2 px-2"
                    id="search"
                    type="text"
                    placeholder="Search for wordle words"
                    onChange={e => setSearchText(e.target.value)}
                  />
                </div>
                <WordList searchText={searchText} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
