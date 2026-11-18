'use client'

import { useState } from 'react';
import { createStore, StoreProvider } from 'easy-peasy';
import { globalState } from '@/model';
import Book from './Book';

export default function BookWrapper() {
    // Create the store once so re-renders don't wipe the user's selections
    const [store] = useState(() => createStore(globalState));

    return (
        <StoreProvider store={store}>
            <Book/>
        </StoreProvider>
    );
}
