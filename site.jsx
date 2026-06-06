/* ============ Lab/note — V7 site (cover → open → page) ============ */
const L = window.LN7;

/* ---------- logos ---------- */
function LabnoteWM() {
  return <span className="ln-wm">Lab<span className="sl">/</span>note</span>;
}
function AICanLogo() {
  return (
    <svg className="aican" viewBox="44 0 424 160" role="img" aria-label="AICan">
      <path d="M109.24,66.58a15.39,15.39,0,1,1-21.76,0A15.4,15.4,0,0,1,109.24,66.58ZM62,41.1A55,55,0,0,0,102.78,135a8.81,8.81,0,0,0,7.41-13.07l-6.86-12.38A19.94,19.94,0,0,0,88,99.34a29.33,29.33,0,1,1,32.29-32.07,19.72,19.72,0,0,0,10.17,15.17l12.37,6.85a8.82,8.82,0,0,0,13.08-7.42A55,55,0,0,0,62,41.1Z" fill="#f15a24"></path>
      <path d="M206.44,55.69a5.75,5.75,0,0,0-5.72-4.07,6,6,0,0,0-5.71,4l-27.43,65.51a7.31,7.31,0,0,0-.56,2.61A6,6,0,0,0,168.7,128a5.68,5.68,0,0,0,4.3,1.83,5.9,5.9,0,0,0,3.28-1,6.41,6.41,0,0,0,2.33-2.76l5.31-13h33.69l5.21,13a5.73,5.73,0,0,0,2.3,2.77,6.14,6.14,0,0,0,3.31,1,5.89,5.89,0,0,0,4.32-1.76,5.75,5.75,0,0,0,1.76-4.22,7.06,7.06,0,0,0-.57-2.53Zm6.95,47H188.15L200.9,71.58Z" fill="currentColor"></path>
      <path d="M250.68,51.62a6,6,0,0,0-4.3,1.7,5.8,5.8,0,0,0-1.77,4.37v66.08a6,6,0,0,0,6.07,6.07,5.82,5.82,0,0,0,4.38-1.77,6,6,0,0,0,1.7-4.3V57.69a5.85,5.85,0,0,0-6.08-6.07Z" fill="currentColor"></path>
      <path d="M296.94,65.67a25,25,0,0,1,13.47-3.85,26.17,26.17,0,0,1,9.49,1.44A27.54,27.54,0,0,1,327.44,68a6.31,6.31,0,0,0,4.05,1.5A5.76,5.76,0,0,0,335.43,68a5.11,5.11,0,0,0,1.75-4,6.76,6.76,0,0,0-.47-2.59,5.51,5.51,0,0,0-1.86-2.19,39.82,39.82,0,0,0-11.27-6.61,39.17,39.17,0,0,0-13.17-2A37.36,37.36,0,0,0,290.81,56a38.8,38.8,0,0,0-14,14.52,40.8,40.8,0,0,0-5.1,20.15,41.32,41.32,0,0,0,5.1,20.3,38.32,38.32,0,0,0,14,14.52,37.51,37.51,0,0,0,19.59,5.32A38.19,38.19,0,0,0,335,122.1L335,122a6.23,6.23,0,0,0,.37-8.46,5,5,0,0,0-3.81-1.64,6.64,6.64,0,0,0-3.82,1.37c-5.52,4.15-11.36,6.24-17.36,6.24a25,25,0,0,1-13.47-3.84,28.23,28.23,0,0,1-9.81-10.47,30.87,30.87,0,0,1,0-29A28,28,0,0,1,296.94,65.67Z" fill="currentColor"></path>
      <path d="M386.5,77.76h0a27.63,27.63,0,0,0-14.12-3.69,28.17,28.17,0,0,0-14.21,3.69,26.79,26.79,0,0,0-10.08,10.13,28.62,28.62,0,0,0-3.64,14.31,30.29,30.29,0,0,0,3.38,14.27,25.8,25.8,0,0,0,9.34,10.1,25.86,25.86,0,0,0,24.23,1.22,25.18,25.18,0,0,0,6.87-4.84v1a6,6,0,1,0,12,0V102.2a28.35,28.35,0,0,0-3.69-14.31A27.46,27.46,0,0,0,386.5,77.76ZM364.07,87.1a16,16,0,0,1,22.46,6.2,18.67,18.67,0,0,1,2.13,8.9,18.34,18.34,0,0,1-2.13,8.84,16.22,16.22,0,0,1-22.46,6.16,16.33,16.33,0,0,1-5.89-6.17A18,18,0,0,1,356,102.2a18.28,18.28,0,0,1,2.17-8.89A16.23,16.23,0,0,1,364.07,87.1Z" fill="currentColor"></path>
      <path d="M463,86A21.65,21.65,0,0,0,454.16,77,27.05,27.05,0,0,0,432,75.75a23,23,0,0,0-6.12,3.58,5.66,5.66,0,0,0-1.58-3.22,6.42,6.42,0,0,0-8.58,0A5.79,5.79,0,0,0,414,80.43V124a6.07,6.07,0,0,0,10.31,4.26A5.93,5.93,0,0,0,426,124V96.44a10,10,0,0,1,1.73-5.79,12.32,12.32,0,0,1,4.88-4.15,15.8,15.8,0,0,1,7-1.55c4.39,0,7.95,1.27,10.58,3.77S454.14,95,454.14,100v24a6,6,0,1,0,12,0V100A29.2,29.2,0,0,0,463,86Z" fill="currentColor"></path>
    </svg>);

}
function Brand({ brand }) {
  return brand === "aican" ? <AICanLogo /> : <LabnoteWM />;
}

/* ---------- note card ---------- */
function NoteCard({ note }) {
  const parts = note.by.split(" · ");
  const name = parts[0];
  const meta = parts.slice(1).join(" · ");
  return (
    <figure className="note-c">
      <span className="tab"></span>
      <span className="qm">&rdquo;</span>
      <blockquote dangerouslySetInnerHTML={{ __html: note.b }} />
      <figcaption><span className="nm">{name}</span><span className="mt">{meta}</span></figcaption>
    </figure>);

}

/* ---------- Cover (original layout, current palette) ---------- */
function Cover({ onOpen, opening, t }) {
  return (
    <div className={"cover-scene" + (opening ? " is-open" : "")}>
      <div className="nb-tilt">
        <div className="notebook" onDoubleClick={onOpen} title={t.cover.hint}>
          <div className="nb-spine"><i></i><i></i></div>

          <div className="nb-top">
            <span className="nb-meta">{t.cover.meta}</span>
            <span className="nb-meta"></span>
          </div>

          <div className="nb-label">
            <div className="lh"><span className="c1">DIVISION</span><span className="c2">LN · RESEARCH NOTES</span></div>
            <div className="lr">
              <span className="k">PROJECT</span><span className="v"><b>Lab / note</b></span>
              <span className="k">SUBJECT</span><span className="v">AI × Research Practice</span>
              <span className="k">NO.</span><span className="v">LN-2026-0606</span>
            </div>
          </div>

          <div className="nb-word">
            <div className="wm">Lab<span className="sl">/</span>note</div>
            <div className="sub">{t.cover.sub}</div>
          </div>

          <div className="nb-foot">
            <span className="cr">LAB/NOTE  ×  AICAN</span>
            <span className="hint"><span className="pulse"></span>{t.cover.hint} →</span>
          </div>
        </div>
      </div>
    </div>);

}

/* ---------- FAQ ---------- */
function Faq({ t }) {
  const [open, setOpen] = React.useState(0);
  return (
    <div className="faq-list">
      {t.faq.map((f, i) =>
      <div key={i} className={"faq-row" + (open === i ? " open" : "")}>
          <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
            <span>{f.q}</span><span className="pl">+</span>
          </button>
          <div className="faq-a"><div><p>{f.a}</p></div></div>
        </div>
      )}
    </div>);

}

/* ---------- shuffle helper ---------- */
function pickBatch(n, k, exclude) {
  const idx = Array.from({ length: n }, (_, i) => i);
  for (let i = idx.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  const out = idx.slice(0, k);
  if (exclude && out.join() === exclude.join()) return pickBatch(n, k, exclude);
  return out;
}

/* ---------- Site ---------- */
function Site({ show, lang, setLang, dark, setDark, onLogo }) {
  const t = L[lang];
  const A = t.about;
  const N = L.noteList;
  const [batch, setBatch] = React.useState(() => pickBatch(N.length, 2));

  return (
    <div className={"site" + (show ? " show" : "")}>
      <header className="hd">
        <div className="wrap">
          <button className="logo" onClick={onLogo} title={t.nav.back}><LabnoteWM /></button>
          <div className="ctrl">
            <div className="lang" onClick={() => setLang((l) => l === "zh" ? "en" : "zh")} title="中 / EN">
              <span className={lang === "zh" ? "on" : ""}>中</span>
              <span className={lang === "en" ? "on" : ""}>EN</span>
            </div>
            <button className="tog" onClick={() => setDark((d) => !d)} title={t.nav.dark} style={{ height: "3px" }}>
              {dark ? <MoonI /> : <SunI />}
            </button>
          </div>
        </div>
      </header>

      {/* hero — open spread: about | binding | notes */}
      <section className="hero">
        <div className="wrap spread">
          <div className="page about">
            <p className="eyebrow" style={{ color: "rgb(230, 0, 0)" }}>{A.eyebrow}</p>
            <h1>{A.h[0]}<br />{A.h[1]}</h1>
            {A.p.map((p, i) => <p key={i}>{p}</p>)}
            <p dangerouslySetInnerHTML={{ __html: A.pHtml }} />
            <div className="cta-group">
              {A.ctas.map((c, i) =>
              <a key={i} className={"cta " + (c.primary ? "primary" : "ghost")}
                 href={c.url} target="_blank" rel="noopener noreferrer">
                  <span className="lead"><span className="ar" style={c.primary ? { color: "rgb(255, 255, 255)" } : undefined}>→</span>{c.lead}</span>
                  <span className="note">{c.note}</span>
                </a>
              )}
            </div>
          </div>

          <div className="bind" aria-hidden="true">
            {Array.from({ length: 18 }).map((_, i) => <i key={i}></i>)}
          </div>

          <div className="page notes">
            <div className="notes-col">
              {batch.map((i) => <NoteCard key={i} note={N[i][lang]} />)}
            </div>
            <div className="notes-foot">
              <button className="shuffle" onClick={() => setBatch((b) => pickBatch(N.length, 2, b))}>
                <RefreshI />{t.notes.shuffle}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* callout */}
      <section className="sec">
        <div className="wrap">
          <div className="callout">
            <h3>{t.callout.h}</h3>
            {t.callout.p.map((p, i) => <p key={i} dangerouslySetInnerHTML={{ __html: p }} />)}
          </div>
        </div>
      </section>

      {/* full notes wall */}
      <section className="sec wall-sec">
        <div className="wrap">
          <p className="eyebrow">{t.wall.eyebrow}</p>
          <h2 className="wall-title">{t.wall.title}</h2>
          <div className="wall">
            {N.map((n, i) => <NoteCard key={i} note={n[lang]} />)}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec">
        <div className="wrap">
          <p className="eyebrow" style={{ fontSize: "15px", color: "rgb(230, 0, 0)" }}>FAQ</p>
          <Faq t={t} />
        </div>
      </section>

      {/* hosts */}
      <section className="sec">
        <div className="wrap">
          <p className="eyebrow" style={{ fontSize: "15px", color: "rgb(230, 0, 0)" }}>{t.hostsTitle}</p>
          <div className="hosts">
            {t.hosts.map((h, i) =>
            <div key={i} className="host">
                <div className="n"><Brand brand={h.brand} /></div>
                <div className="r">{h.r}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className="ft">
        <div className="wrap">
          <span>{t.foot[0]}</span>
          <span>{t.foot[1]}</span>
        </div>
      </footer>
    </div>);

}

/* ---------- App ---------- */
function App() {
  const [phase, setPhase] = React.useState(location.hash === "#open" ? "open" : "cover");
  const [dark, setDark] = React.useState(false);
  const [lang, setLang] = React.useState("zh");

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);
  React.useEffect(() => {
    document.documentElement.setAttribute("lang", lang === "zh" ? "zh" : "en");
    document.body.classList.toggle("locked", phase === "cover");
  }, [phase, lang]);

  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function open() {
    if (phase !== "cover") return;
    setPhase("opening");
    setTimeout(() => {setPhase("open");window.scrollTo(0, 0);}, reduce ? 0 : 950);
  }
  function toCover() {window.scrollTo(0, 0);setPhase("cover");}

  return (
    <React.Fragment>
      {phase !== "open" && <Cover onOpen={open} opening={phase === "opening"} t={L[lang]} />}
      <Site show={phase !== "cover"} lang={lang} setLang={setLang}
      dark={dark} setDark={setDark} onLogo={toCover} />
    </React.Fragment>);

}

/* ---------- icons ---------- */
function SunI() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="4"></circle>
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path></svg>);

}
function MoonI() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"></path></svg>);

}
function RefreshI() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path><path d="M21 3v5h-5"></path>
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path><path d="M3 21v-5h5"></path></svg>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
