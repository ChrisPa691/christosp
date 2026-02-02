export const navRoot = 'sticky top-0 z-1000 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 bg-(--surface) border-b border-(--border) backdrop-blur-md bg-(--surface)/90';
export const navInner = 'flex justify-between items-center h-16 flex-nowrap gap-6';
export const brand = 'flex items-center gap-1.5 text-(--text-primary) no-underline text-xl font-semibold tracking-wide transition-all hover:opacity-90 whitespace-nowrap';
export const navList = 'flex list-none m-0 p-0 gap-2 flex-nowrap';
export const navLinkBase = 'relative block px-5 py-3 no-underline text-base font-semibold rounded transition-all whitespace-nowrap overflow-hidden';
export const navLinkActive = 'text-(--text-primary) bg-(--surface-elevated) shadow-inner after:w-2/3';
export const navLinkInactive = 'text-(--text-secondary) hover:text-(--text-primary) hover:bg-(--surface-elevated) after:w-0';
export const socialWrap = 'flex items-center gap-4 ml-2 pl-2 shrink-0';
export const socialLink = 'text-(--text-secondary) hover:text-(--text-primary) transition-colors flex items-center justify-center';
export const navCtaWrap = 'pl-3 border-l border-(--border) ml-2';

// underline/slide effect using pseudo-element utility classes
export const navLinkBaseWithUnderline = `${navLinkBase} after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-0.5 after:bg-(--accent) after:transition-all after:duration-200`;
