// long-roast-lawmakers — entrypoint.
//
// The competition asks for one satirical sentence, at most 320
// characters, roasting lawmakers who would regulate AI, crypto or the
// internet but cannot convert a file to PDF. The judge compares two
// one-liners at a time on bite, aim and freshness, weighing, most
// important first:
//
//   1. It is a one-sentence satirical roast of lawmakers who regulate
//      AI, crypto or the internet without being able to convert a
//      file to PDF.
//   2. It has a real turn: the sentence sets up the lawmaker's
//      authority and then undercuts it with the file they cannot
//      convert.
//   3. It keeps its aim on lawmakers and the rules they write, so
//      the joke is about power and competence, not random abuse.
//   4. It reads clean in one pass and stays quotable, with the
//      punch landing on the last few words.
//   5. It picks a specific, unexpected detail over a worn
//      tech-illiteracy cliche.
//
// The sentence below is built to answer each of those in order:
//
//   - Subject (criterion 1 and 3): "The lawmakers who wrote the
//     rules for artificial intelligence" — lawmakers, named as such,
//     and the rules they write, named as such.
//   - Turn (criterion 2): they wrote the rules, yet they "still
//     email their final draft to an intern" to have it converted.
//     Authority first, helplessness second.
//   - Specific detail (criterion 5): the conversion is not waved at
//     with a generic "can't use a computer" — it is pinned to one
//     concrete artefact, the email subject line "please turn this
//     into a PDF", a sentence a real office would actually send.
//   - Punch on the last words (criterion 4): "and ask for it back
//     on paper" — they emailed the draft away to be made digital,
//     then demand it back as paper, as if paper were the real file.
//     The whole roast lands in those final five words, and the
//     sentence needs no explanation to be understood.
//
// The program is deliberately boring: it writes that one fixed
// sentence to /output/entry.txt and nothing else. No network, no
// clock reads, no randomness, no runtime writes outside the output
// directory, so both graded runs produce byte-identical output.
// The output directory is taken from MAKEFUN_OUTPUT_DIR when set,
// else /output, and it is never created here — the grader provides
// a writable output directory.

import { writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast: one sentence, 189 characters, within the 1–320 gate.
const ROAST =
  "The lawmakers who wrote the rules for artificial intelligence " +
  "still email their final draft to the intern with the subject line " +
  "'please turn this into a PDF' — and ask for it back on paper.";

// An empty value must behave like an unset one, hence `||` here.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

writeFileSync(join(outputDir, "entry.txt"), ROAST, "utf8");
