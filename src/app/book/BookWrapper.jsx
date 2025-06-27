'use client'

import '../globals.css';
import { createStore, StoreProvider } from 'easy-peasy';
import { globalState } from '@/model';
import Book from './Book';

export default function BookWrapper() {

    const store = createStore(globalState);

    return (
        <>
            <StoreProvider store={store}>
                <Book/>
            </StoreProvider>
        </>
    );
}