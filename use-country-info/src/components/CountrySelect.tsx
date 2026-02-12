import React, { useEffect, useMemo, useRef, useState } from "react";

export type CurrencyMap = Record<
  string,
  {
    name: string;
    symbol: string;
  }
>;

export type CountryOption = {
  cca3: string;
  name: string;
  flagPng?: string;
  flagEmoji?: string;
  ddi?: string;
  countryCallingCode?: {
    root?: string;
    suffixes?: string[];
  };
  currencies?: CurrencyMap;
};

type Props = {
  options: CountryOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export function CountrySelect({
  options,
  value,
  onChange,
  placeholder = "Selecione...",
}: Props) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const ref = useRef<HTMLDivElement | null>(null);

  const selected = useMemo(
    () => options.find((o) => o.cca3 === value),
    [options, value]
  );

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const openMenu = () => {
    setOpen(true);
    setActiveIndex(
      Math.max(
        0,
        options.findIndex((o) => o.cca3 === value)
      )
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        openMenu();
      }
      return;
    }
    if (e.key === "Escape") {
      setOpen(false);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(options.length - 1, i + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(0, i - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const opt = options[activeIndex];
      if (opt) {
        onChange(opt.cca3);
        setOpen(false);
      }
    }
  };

  const ddiLabel = (o?: CountryOption) => {
    if (!o) return "";

    const value = o.countryCallingCode?.root ?? o.ddi;

    if (!value) return "";
    const digits = String(value).replace(/^\+/, "");
    return ` (+${digits})`;
  };

  return (
    <div className="cs" ref={ref}>
      <button
        type="button"
        className="cs-control"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => (open ? setOpen(false) : openMenu())}
        onKeyDown={handleKeyDown}
      >
        {selected ? (
          <>
            {selected.flagPng ? (
              <img className="cs-flag" src={selected.flagPng} alt="" />
            ) : (
              <span className="cs-flag-emoji" aria-hidden>
                {selected.flagEmoji || "🏳️"}
              </span>
            )}
            <span className="cs-label">
              {selected.name}
              {ddiLabel(selected)}
            </span>
          </>
        ) : (
          <span className="cs-placeholder">{placeholder}</span>
        )}
        <span className="cs-caret" aria-hidden>
          ▾
        </span>
      </button>

      {open && (
        <ul className="cs-menu" role="listbox" tabIndex={-1}>
          {options.map(
            (
              {
                cca3,
                name,
                flagPng,
                flagEmoji,
                countryCallingCode,
                currencies,
                ddi,
              },
              i
            ) => (
              <li
                key={cca3}
                role="option"
                aria-selected={cca3 === value}
                className={`cs-option ${i === activeIndex ? "is-active" : ""} ${
                  cca3 === value ? "is-selected" : ""
                }`}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => {
                  onChange(cca3);
                  setOpen(false);
                }}
              >
                {flagPng ? (
                  <img className="cs-flag" src={flagPng} alt="" />
                ) : (
                  <span className="cs-flag-emoji" aria-hidden>
                    {flagEmoji || "🏳️"}
                  </span>
                )}
                <span className="cs-option-text">
                  {name}
                  {ddiLabel({
                    cca3,
                    name,
                    flagPng,
                    flagEmoji,
                    countryCallingCode,
                    currencies,
                    ddi,
                  })}
                </span>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
}
