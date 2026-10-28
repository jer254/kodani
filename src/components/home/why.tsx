const principles = [
  { title: "Records stay whole", text: "A learner's classes, results and promotions from every year stay on file, so their history is never lost." },
  { title: "Each school's data stays separate", text: "Schools share one platform, and no school can see another's records." },
  { title: "People see only what they should", text: "A teacher, a bursar and a parent each get the access their job needs. The server checks every request." },
  { title: "Built in Kenya", text: "Made for the CBC and for the way Kenyan schools handle fees, results and parents." },
];

function LedgerSheet() {
  return (
    <div className="paper paper-margin pb-7 pl-[3.75rem] pr-4 sm:pl-[4.5rem] sm:pr-6 pt-7 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.5)]">
      <p className="flex h-7 items-center text-base font-bold leading-none">Mathematics, Term 2</p>
      <p className="flex h-7 items-center text-sm leading-none">Amani W., Grade 7 Hawk</p>
      <p className="flex h-7 items-center gap-3 text-sm leading-none">
        Entered by the teacher
        <span className="hand text-2xl leading-none text-stamp line-through decoration-2">62</span>
      </p>
      <p className="flex h-7 items-center text-sm leading-none text-ink/60">Approved, published and locked</p>
      <p className="flex h-7 items-center text-sm font-semibold leading-none">Correction requested</p>
      <p className="flex h-7 items-center text-sm leading-none">Reason: marks were added up wrongly</p>
      <p className="flex h-7 items-center text-sm leading-none">Approved by the deputy principal</p>
      <p className="flex h-7 items-center gap-3 text-sm font-semibold leading-none">
        Now showing
        <span className="hand -rotate-3 rounded-full border-2 border-stamp px-3 text-2xl leading-8">67</span>
        <span className="hidden text-xs font-normal text-ink/60 sm:inline">62 is kept on file</span>
      </p>
      <p className="flex h-14 items-center"><span className="hand text-[24px] leading-7 !text-stamp">Sample record, shown for illustration.</span></p>
    </div>
  );
}

export function Why() {
  return (
    <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-6">
        <h2 className="text-4xl font-extrabold leading-[0.98] tracking-tighter sm:text-6xl">
          A correction is added, never erased.
        </h2>
        <p className="mt-6 max-w-lg text-lg leading-8 text-ink/75">
          Schools keep records for decades. Kodani software keeps the full history, so any result or payment can
          always be explained.
        </p>
        <div className="mt-12 max-w-xl -rotate-1">
          <LedgerSheet />
        </div>
      </div>

      <dl className="grid content-start gap-x-10 gap-y-9 sm:grid-cols-2 lg:col-span-6 lg:pt-4">
        {principles.map((p) => (
          <div key={p.title} className="border-t-[3px] border-ink pt-4">
            <dt className="text-xl font-extrabold leading-snug">{p.title}</dt>
            <dd className="mt-2 leading-7 text-ink/75">{p.text}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
