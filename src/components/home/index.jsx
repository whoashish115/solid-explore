"use client";

import { useState } from "react";
import { HiSearch } from "react-icons/hi";
export const ENGINES = {
  Google: "https://www.google.com/search?q=",
  Bing: "https://www.bing.com/search?q=",
  DuckDuckGo: "https://duckduckgo.com/?q=",
  Yandex: "https://yandex.com/search/?text=",
  Baidu: "https://www.baidu.com/s?wd=",
  Brave: "https://search.brave.com/search?q=",
  Startpage: "https://www.startpage.com/do/search?q=",
  Qwant: "https://www.qwant.com/?q=",
  Mojeek: "https://www.mojeek.com/search?q=",
  Swisscows: "https://swisscows.com/en/web?query=",
  Gibiru: "https://gibiru.com/results.html?q=",
  You: "https://you.com/search?q=",
  Yahoo: "https://search.yahoo.com/search?p=",
  AOL: "https://search.aol.com/aol/search?q=",
  Ecosia: "https://www.ecosia.org/search?q=",
  MetaGer: "https://metager.org/meta/meta.ger3?focus=web&eingabe=",
  Searx: "https://searx.be/search?q=",
  Presearch: "https://engine.presearch.org/search?q=",
  Neeva: "https://neeva.com/search?q=", // (shut down 2023 but was popular)
  InfinitySearch: "https://infinitysearch.co/search?q=",
  Yep: "https://yep.com/web?q=",
  OneSearch: "https://www.onesearch.com/yhs/search?p="
};

export const FILE_TYPES = {
  PDF_FILES: ["pdf"],
  DOCUMENTS: ["doc", "docx", "txt", "rtf", "odt", "ods", "odp"],
  SPREADSHEETS: ["xls", "xlsx", "csv"],
  TEXT_FILES: ["txt", "rtf", "xml"],
  PRESENTATIONS: ["ppt", "pptx", "key"],
  ARCHIVES: ["zip", "rar", "7z", "tar", "gz"],
  PASSWORD_FILES: [
    "pwd", "passwd", "shadow", "htpasswd", "wp-config", "kdbx",
    "cred", "secrets", "keychain", "pfx"
  ],
  LOGIN_FILES: [
    "login", "logon", "auth", "session", "token", "cookies",
    "signin", "cert", "jwt", "oauth"
  ],
  DATABASE_FILES: [
    "db", "sql", "sqlite", "mdb", "accdb", "frm",
    "ibd", "myd", "ndf", "ora"
  ],
  LOG_FILES: ["log", "csv", "json", "xml", "audit", "trace", "debug", "out", "err"],
  CONFIG_FILES: [
    "cfg", "ini", "conf", "xml", "json", "yml",
    "toml", "env", "cnf", "properties"
  ],
  BACKUP_FILES: ["bak", "backup", "tar", "old", "bkp", "arc"],
  EXECUTABLES: ["exe", "msi", "bat", "sh", "apk"],
  CODE_FILES: ["js", "ts", "py", "java", "cpp", "c", "cs", "html", "css", "php", "rb", "go"],
  MEDIA_FILES: ["mp4", "mp3", "wav", "mov", "avi", "flv", "mkv", "webm"],
  DESIGN_FILES: ["psd", "ai", "xd", "fig", "sketch", "svg", "indd"],
  INSTALLER_FILES: ["iso", "img", "dmg", "msu", "cab"],
  SCRIPT_FILES: ["sh", "bash", "ps1", "cmd", "zsh"],
  SYSTEM_FILES: ["dll", "sys", "vxd", "drv"],
  FONT_FILES: ["ttf", "otf", "woff", "woff2", "eot"],
  TEMP_FILES: ["tmp", "temp", "~", ".bak"],
   PACKAGE_MANAGERS: ["json", "lock", "toml", "poetry", "yarn", "pnpm"],
  LICENSE_FILES: ["license", "lic", "licx", "eula", "terms"],
  ENCRYPTED_FILES: ["gpg", "pgp", "aes", "enc", "vault"],
  SYSTEM_LOGS: ["journal", "dmesg", "syslog"],
  EMAIL_FILES: ["eml", "msg", "mbox", "pst"]
};
export const FileSelect = ({ onChange }) => {
  const [FileState, setFileState] = useState(() => {
    const initial = {};
    Object.entries(FILE_TYPES).forEach(([category, extensions]) => {
      initial[category] = {
        selected: false,
        extensions: extensions.reduce(
          (acc, ext) => ({ ...acc, [ext]: false }),
          {}
        )
      };
    });
    return initial;
  });

  const changeType = (category, checked) => {
    const updatedFileState = {
      ...FileState,
      [category]: {
        ...FileState[category],
        selected: checked,
        extensions: Object.fromEntries(
          Object.keys(FileState[category].extensions).map(ext => [ext, checked])
        )
      }
    };
    setFileState(updatedFileState);

    const updated = Object.entries(updatedFileState).flatMap(([cat, state]) =>
      state.selected ? FILE_TYPES[cat] : []
    );
    onChange(updated);
  };

  const changeExt = (category, extension, checked) => {
    const updatedCategory = {
      ...FileState[category],
      extensions: {
        ...FileState[category].extensions,
        [extension]: checked
      }
    };
    const updatedFileState = {
      ...FileState,
      [category]: updatedCategory
    };
    setFileState(updatedFileState);

    const updated = Object.entries(updatedFileState).flatMap(([cat, state]) =>
      Object.entries(state.extensions)
        .filter(([, selected]) => selected)
        .map(([ext]) => ext)
    );
    onChange(updated);
  };

  return (
   <div className="space-y-6">
  {Object.entries(FILE_TYPES).map(([category, extensions]) => (
    <div
      key={category}
      className="bg-box rounded-2xl p-2 md:p-3 lg:p-5 border-2 border-outline hover:border-primary"
    >
      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={FileState[category]?.selected || false}
          onChange={e => changeType(category, e.target.checked)}
          className="appearance-none w-4 h-4 rounded-md border-2 border-title/30 hover:border-primary checked:bg-primary  focus:outline-none focus:ring-2 focus:ring-title  duration-200 shadow-inner "
        />
        <span className="text-primary font-bold text-sm md:text-base tracking-wide uppercase">
          {category.replace(/_/g, " ")}
        </span>
      </label>

      <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 md:gap-2">
        {extensions.map(ext => (
          <label
            key={ext}
            className="flex items-center gap-3 px-2 rounded-full   duration-300  text-sm text-title"
          >
            <input
              type="checkbox"
              checked={FileState[category]?.extensions[ext] || false}
              onChange={e => changeExt(category, ext, e.target.checked)}
              className="appearance-none w-4 h-4 rounded-md border-2 border-title/30 checked:border-primary checked:bg-primary  focus:outline-none focus:ring-2 focus:ring-title duration-200 shadow-inner "
            />
            <span className="font-mono text-sm md:text-base lg:text-lg tracking-wider text--primary">
              .{ext}
            </span>
          </label>
        ))}
      </div>
    </div>
  ))}
</div>

  );
};

export default function Home() {
  const [query, setQuery] = useState("");
  const [customFile, setCustomFile] = useState("");
  const [domain, setDomain] = useState("");
  const [inUrl, setInUrl] = useState("");
  const [inTitle, setInTitle] = useState("");
  const [exactPhrase, setExactPhrase] = useState("");
  const [excludeWords, setExcludeWords] = useState("");
  const [beforeDate, setBeforeDate] = useState("");
  const [afterDate, setAfterDate] = useState("");
  const [customSite, setCustomSite] = useState("");
  const [selectedEngine, setSelectedEngine] = useState("Google");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [showQuery, setShowQuery] = useState(false);

  const buildQuery = () => {
    let dQuery = query ? `${query}` : "";
    if (exactPhrase) dQuery += ` \"${exactPhrase}\"`;
    if (selectedTypes.length > 0) {
      dQuery += ` ${selectedTypes.map(type => `filetype:${type}`).join(" OR ")}`;
    } else if (customFile) {
      dQuery += ` filetype:${customFile}`;
    }
    if (excludeWords) dQuery += ` -${excludeWords.split(/\s+/).join(" -")}`;
    if (domain) dQuery += ` site:${domain}`;
    if (inUrl) dQuery += ` inurl:${inUrl}`;
    if (inTitle) dQuery += ` intitle:${inTitle}`;
    if (beforeDate) dQuery += ` before:${beforeDate}`;
    if (afterDate) dQuery += ` after:${afterDate}`;
    if (customSite) dQuery += ` site:${customSite}`;

    window.open(`${ENGINES[selectedEngine]}${encodeURIComponent(dQuery)}`, "_blank");
  };

  return (
    <main className=" px-6 md:px-12 py-8">
      <div className="max-w-6xl mx-auto grid gap-10">
        <div className="grid gap-4">
          <div className="text-center text-6xl md:text-7xl  py-10">
          <div className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl gap-2 flex items-center justify-center ">
            <HiSearch className=" text-primary"/>
      <h1 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary  to-title flex justify-center items-center">
         Solid Explore
      </h1>
    </div>
      <p className="mt-4 text-sm sm:text-base text-start md:text-center lg:text-lg xl:text-xl text-paragraph font-medium">
        Explore deep web files with style. Filter by type. Choose your engine. Hack the search.
      </p>
    </div>
    
         
               <div className="text-right">
          <button
            onClick={() => setShowQuery(prev => !prev)}
            className="text-sm uppercase  text-title font-bold cursor-pointer underline"
          >
            {showQuery ? "Hide" : "Show"} Search Query
          </button>
          {showQuery && (
            <div className="mt-2 p-3 bg-highlight border-2 border-outline rounded-full text-sm font-mono text-title">
              {(query || selectedTypes.length || customFile || domain || inUrl || inTitle || exactPhrase || excludeWords || beforeDate || afterDate || customSite) ? (
                `${query} ${exactPhrase ? `\"${exactPhrase}\"` : ""} ${selectedTypes.length > 0 ? selectedTypes.map(t => `filetype:${t}`).join(" OR ") : customFile ? `filetype:${customFile}` : ""} ${excludeWords ? `-${excludeWords.split(/\s+/).join(" -")}` : ""} ${domain ? `site:${domain}` : ""} ${inUrl ? `inurl:${inUrl}` : ""} ${inTitle ? `intitle:${inTitle}` : ""} ${beforeDate ? `before:${beforeDate}` : ""} ${afterDate ? `after:${afterDate}` : ""} ${customSite ? `site:${customSite}` : ""}`
              ) : "(No query built yet)"}
            </div>
          )}
        </div>
         <input
            type="text"
            placeholder="Type keywords..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full px-4 py-2 md:py-3 focus:ring-0 border-2 border-transparent focus:border-primary hover:border-primary outline-none rounded-full text-sm md:text-base bg-box"
          />
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          <div className="space-y-3">
            <label className="block text-sm">Search Engine</label>
          <div className="relative w-full">
  <select
    value={selectedEngine}
    onChange={e => setSelectedEngine(e.target.value)}
    className="w-full appearance-none px-4 py-2 border-2 border-transparent rounded-full bg-box text-title focus:outline-none focus:border-primary hover:border-primary pr-10"
  >
    {Object.keys(ENGINES).map(engine => (
      <option key={engine} value={engine}>
        {engine}
      </option>
    ))}
  </select>

  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
    <svg
      className="w-4 h-4 text-paragraph"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </div>
</div>

            <label className="block text-sm">Exact Phrase</label>
            <input
              type="text"
              value={exactPhrase}
              onChange={e => setExactPhrase(e.target.value)}
              className="w-full px-3 py-1 md:py-2 text-sm md:text-base focus:ring-0 border-2 border-transparent focus:border-primary hover:border-primary outline-none rounded-full bg-box"
            />

            <label className="block text-sm">Exclude Words</label>
            <input
              type="text"
              value={excludeWords}
              onChange={e => setExcludeWords(e.target.value)}
              className="w-full px-3 py-1 md:py-2 text-sm md:text-base focus:ring-0 border-2 border-transparent focus:border-primary hover:border-primary outline-none rounded-full bg-box"
            />

            <label className="block text-sm">Before Date (YYYY-MM-DD)</label>
            <input
              type="text"
              value={beforeDate}
              onChange={e => setBeforeDate(e.target.value)}
              className="w-full px-3 py-1 md:py-2 text-sm md:text-base focus:ring-0 border-2 border-transparent focus:border-primary hover:border-primary outline-none rounded-full bg-box"
            />

            <label className="block text-sm">After Date (YYYY-MM-DD)</label>
            <input
              type="text"
              value={afterDate}
              onChange={e => setAfterDate(e.target.value)}
              className="w-full px-3 py-1 md:py-2 text-sm md:text-base focus:ring-0 border-2 border-transparent focus:border-primary hover:border-primary outline-none rounded-full bg-box"
            />

            <label className="block text-sm">Custom Site Filter</label>
            <input
              type="text"
              value={customSite}
              onChange={e => setCustomSite(e.target.value)}
              className="w-full px-3 py-1 md:py-2 text-sm md:text-base focus:ring-0 border-2 border-transparent focus:border-primary hover:border-primary outline-none rounded-full bg-box"
            />

            <label className="block text-sm">Domain Filter</label>
            <input
              type="text"
              value={domain}
              onChange={e => setDomain(e.target.value)}
              className="w-full px-3 py-1 md:py-2 text-sm md:text-base rounded-full  bg-box"
            />

            <label className="block text-sm">In URL</label>
            <input
              type="text"
              value={inUrl}
              onChange={e => setInUrl(e.target.value)}
              className="w-full px-3 py-1 md:py-2 text-sm md:text-base focus:ring-0 border-2 border-transparent focus:border-primary hover:border-primary outline-none rounded-full bg-box"
            />

            <label className="block text-sm">In Title</label>
            <input
              type="text"
              value={inTitle}
              onChange={e => setInTitle(e.target.value)}
              className="w-full px-3 py-1 md:py-2 text-sm md:text-base focus:ring-0 border-2 border-transparent focus:border-primary hover:border-primary outline-none rounded-full bg-box"
            />

            <label className="block text-sm">Custom Filetype</label>
            <input
              type="text"
              value={customFile}
              onChange={e => setCustomFile(e.target.value)}
              className="w-full px-3 py-1 md:py-2 text-sm md:text-base focus:ring-0 border-2 border-transparent focus:border-primary hover:border-primary outline-none rounded-full bg-box"
            />

            <button
              onClick={buildQuery}
              className="w-full py-3 mt-4 bg-primary text-title rounded-full font-semibold"
            >
              Search Now
            </button>
          </div>

          <div className="md:col-span-1 xl:col-span-2">
            <h2 className="text-lg font-semibold mb-2">Choose File Types</h2>
            <FileSelect onChange={setSelectedTypes} />
          </div>
        </div>

   
      </div>
    </main>
  );
}
