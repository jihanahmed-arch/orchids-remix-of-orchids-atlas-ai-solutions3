import React from 'react';

const StatementBlock: React.FC = () => {
  const links = [
    { label: 'Leadership', href: '#leadership' },
    { label: 'The Facts', href: '#facts' },
    { label: 'Global Presence', href: '#global' },
    { label: 'Investors', href: '#investors' },
    { label: 'News', href: '#news' },
    { label: 'Partners', href: '#partners' },
    { label: 'Sustainability', href: '#sustainability' },
  ];

  return (
    <section className="bg-white py-[80px] px-10 md:px-20 lg:px-40 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="border-b border-[#E5E5E5] pb-2 mb-4">
          <h2 className="text-[32px] md:text-[50px] font-bold tracking-[0.15em] text-black uppercase leading-[1.2]">
            Accelerating the industry.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 items-start">
          <div className="md:col-span-4">
            <a
              href="#who-we-are"
              className="text-[14px] font-semibold tracking-[0.2em] text-black uppercase hover:opacity-70 transition-opacity"
            >
              Who We Are
            </a>
          </div>

          <div className="md:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[12px] font-medium tracking-[0.15em] text-black uppercase transition-colors hover:text-[#737373] whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatementBlock;
