'use client'

import React, { useId, useState } from 'react';
import { HP_FAQ_LIST } from '../constants';

function FaqItem({ question, answer, open, onToggle }) {
  const id = useId();
  return (
    <div className='border-b border-black/10'>
      <h3>
        <button
          type='button'
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={id}
          className='flex w-full items-center justify-between gap-6 py-6 text-left text-base font-semibold text-ink transition hover:text-brand-dark md:text-lg cursor-pointer'
        >
          {question}
          <span
            aria-hidden
            className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${open ? 'bg-brand text-white' : 'bg-mist text-ink'}`}
          >
            <span className='absolute h-0.5 w-3 bg-current' />
            <span className={`absolute h-3 w-0.5 bg-current transition-transform duration-300 ${open ? 'rotate-90 scale-0' : ''}`} />
          </span>
        </button>
      </h3>
      <div
        id={id}
        role='region'
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className='overflow-hidden'>
          <p className='pb-6 pr-12 leading-relaxed text-ink/70'>{answer}</p>
        </div>
      </div>
    </div>
  );
}

const FAQ = ({ items = HP_FAQ_LIST, contactHref = '#contactSection' }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id='faqSection' className='section bg-mist'>
      <div className='container-x grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20'>
        <div className='lg:sticky lg:top-28 lg:self-start'>
          <span className='eyebrow'>FAQ</span>
          <h2 className='heading mt-3'>Frequently Asked Questions</h2>
          <p className='mt-5 text-ink/70'>
            Can’t find what you’re looking for?{' '}
            <a href={contactHref} className='font-semibold text-brand hover:text-brand-dark'>Send us a message.</a>
          </p>
        </div>
        <div className='border-t border-black/10'>
          {items?.map((item, i) => (
            <FaqItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
