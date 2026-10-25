"""Convert the extracted glossary text (doc.txt) into cards.js."""
import json, re, sys

src, out = sys.argv[1], sys.argv[2]
cards, section, sub = [], None, None
for line in open(src, encoding="utf-8"):
    m = re.match(r"\[(\w+)\] (.*)", line.rstrip("\n"))
    if not m:
        continue
    style, text = m.groups()
    if style == "HEADING_2":
        section, sub = text.strip(), None
    elif style == "HEADING_3":
        sub = text.strip()
    elif text.startswith("* **") and section:
        t = re.match(r"\* \*\*(.+?)\*\*:?\s*(.*)", text)
        term, definition = t.group(1).rstrip(":"), t.group(2).lstrip(": ").strip()
        cards.append({"id": len(cards), "term": term, "def": definition,
                      "section": section, "sub": sub})

with open(out, "w", encoding="utf-8") as f:
    f.write("// Generated from the Data Center Site Selection Glossary.\n")
    f.write("const CARDS = " + json.dumps(cards, ensure_ascii=False, indent=1) + ";\n")
print(len(cards), "cards")
