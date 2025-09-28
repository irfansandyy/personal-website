"use client"
import { useRef, useState } from "react";
import { Highlight, type Language, themes } from "prism-react-renderer";
const theme = themes.vsDark;

export default function CodeBlock({ file, languageItem, codeItems }: { file: string, languageItem: Language, codeItems: string }) {
  const [checked, setChecked] = useState(false);
  const timerRef = useRef<number | null>(null);

  const handleClick = async () => {
    try { await navigator.clipboard.writeText(codeItems); } catch {}
    setChecked(true);
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setChecked(false), 1500);
  };
  return (
    <div className="flex max-w-[66.5625rem] w-[91vw] flex-col bg-code-block rounded-2xl border-2 border-solid border-background-accent">
      <div className="flex flex-row items-center justify-between bg-background rounded-t-2xl px-6 py-3 border-b-2 border-solid border-background-accent">
        <span className="text-xl font-normal text-secondary-text">{file}</span>
        <div onClick={handleClick} role="button" aria-label={checked ? "Copied" : "Copy code"} tabIndex={0} onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleClick()} className="w-8 h-8 flex justify-around items-center bg-background hover:bg-background-accent/50 rounded-md transition-colors duration-300 ease-in-out cursor-pointer">
          {checked ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9.55 15.15L18.025 6.675C18.225 6.475 18.4583 6.375 18.725 6.375C18.9917 6.375 19.225 6.475 19.425 6.675C19.625 6.875 19.725 7.11267 19.725 7.388C19.725 7.66333 19.625 7.90067 19.425 8.1L10.25 17.3C10.05 17.5 9.81666 17.6 9.55 17.6C9.28333 17.6 9.05 17.5 8.85 17.3L4.55 13C4.35 12.8 4.254 12.5627 4.262 12.288C4.27 12.0133 4.37433 11.7757 4.575 11.575C4.77566 11.3743 5.01333 11.2743 5.288 11.275C5.56266 11.2757 5.8 11.3757 6 11.575L9.55 15.15Z" fill="#929292" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" className="[&_path]:stroke-secondary-text">
              <path d="M6.5 11C6.5 8.172 6.5 6.757 7.379 5.879C8.257 5 9.672 5 12.5 5H15.5C18.328 5 19.743 5 20.621 5.879C21.5 6.757 21.5 8.172 21.5 11V16C21.5 18.828 21.5 20.243 20.621 21.121C19.743 22 18.328 22 15.5 22H12.5C9.672 22 8.257 22 7.379 21.121C6.5 20.243 6.5 18.828 6.5 16V11Z" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M6.5 19C5.70435 19 4.94129 18.6839 4.37868 18.1213C3.81607 17.5587 3.5 16.7956 3.5 16V10C3.5 6.229 3.5 4.343 4.672 3.172C5.844 2.001 7.729 2 11.5 2H15.5C16.2956 2 17.0587 2.31607 17.6213 2.87868C18.1839 3.44129 18.5 4.20435 18.5 5" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          )}
        </div>
      </div>
      <Highlight theme={theme} code={codeItems} language={languageItem}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre style={style} className={`${className} p-6 overflow-auto text-base md:text-xl font-normal font-mono min-w-full rounded-b-2xl`}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}