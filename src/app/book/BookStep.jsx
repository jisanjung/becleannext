import { FaCheck } from 'react-icons/fa6';

/**
 * One numbered step in the booking configurator.
 * Uses a native <fieldset> so `disabled` locks every radio inside it.
 */
export function BookStep({ id, number, title, subtitle, complete, disabled, disabledHint, children }) {
  return (
    <fieldset
      id={id}
      disabled={disabled}
      className={`min-w-0 border-t border-black/10 pt-8 transition-opacity duration-300 first:border-t-0 first:pt-0 ${disabled ? 'opacity-45' : ''}`}
    >
      <legend className='float-left w-full'>
        <div className='flex items-start gap-4'>
          <span
            aria-hidden
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
              complete ? 'bg-brand text-white' : 'bg-mist text-ink'
            }`}
          >
            {complete ? <FaCheck className='text-xs' /> : number}
          </span>
          <div>
            <span className='block text-xl font-bold tracking-tight text-ink md:text-2xl'>
              <span className='sr-only'>Step {number}: </span>
              {title}
            </span>
            <span className='mt-1 block text-ink/60'>
              {disabled && disabledHint ? disabledHint : subtitle}
            </span>
          </div>
        </div>
      </legend>
      <div className='clear-both pt-6'>{children}</div>
    </fieldset>
  );
}

/**
 * A selectable card backed by a visually hidden radio input,
 * so it stays keyboard and screen-reader friendly.
 */
export function OptionCard({ name, value, checked, onChange, title, price, media, children }) {
  return (
    <label
      className={`group relative flex h-full cursor-pointer rounded-2xl border bg-white transition
        ${media ? 'flex-row items-center gap-4 p-3 pr-5 sm:flex-col sm:items-stretch sm:gap-0 sm:p-5' : 'flex-col p-5'}
        has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-brand/25
        has-[:disabled]:cursor-not-allowed
        ${checked
          ? 'border-brand shadow-[0_0_0_1px_var(--color-brand)]'
          : 'border-black/10 hover:border-black/25'}`}
    >
      <input
        type='radio'
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className='sr-only'
      />

      {media && (
        <div className='relative aspect-[16/9] w-28 shrink-0 overflow-hidden rounded-xl bg-mist sm:mb-4 sm:w-full'>
          {media}
        </div>
      )}

      <div className='flex items-start justify-between gap-4'>
        <div className='flex items-start gap-3'>
          <span
            aria-hidden
            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition ${
              checked ? 'border-brand bg-brand' : 'border-black/25 bg-white'
            }`}
          >
            <span className={`h-2 w-2 rounded-full bg-white transition-transform ${checked ? 'scale-100' : 'scale-0'}`} />
          </span>
          <span>
            <span className='block font-semibold leading-snug text-ink'>{title}</span>
            {media && price && (
              <span className={`mt-1 block text-sm font-semibold ${checked ? 'text-brand-dark' : 'text-ink/60'}`}>{price}</span>
            )}
          </span>
        </div>
        {!media && price && (
          <span className={`shrink-0 text-sm font-semibold ${checked ? 'text-brand-dark' : 'text-ink/70'}`}>
            {price}
          </span>
        )}
      </div>

      {children && <div className='mt-3 pl-8 text-sm leading-relaxed text-ink/60'>{children}</div>}
    </label>
  );
}
