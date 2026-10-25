# Data Center Flashcards

An iPhone-friendly flashcard app (progressive web app) built from the *Data Center Site Selection Glossary*: 201 terms across 7 sections.

## Using it

- **Tap** the card to flip it.
- **Term first / Definition first** at the top chooses which side you see first.
- **Got it** (or swipe right) sends the card to the back of the deck.
- **Again soon** (or swipe left) puts the card in the middle of the deck so it comes back sooner.
- The settings button (top left) lets you pick sections, shuffle, return to glossary order, or reset progress.
- Your progress and card order are saved on the device, and the app works offline.

## Installing on iPhone

1. Open the site in **Safari**.
2. Tap **Share**, then **Add to Home Screen**.
3. Launch it from the home screen. It opens full screen like an app.

## Hosting

The app is plain static files with no build step. To host it on GitHub Pages: repo **Settings → Pages → Deploy from a branch → `master` / `(root)`**. The site will be at `https://umiamiq.github.io/Data_Center_Flashcards/`.

## Updating the cards

`cards.js` is generated from the glossary text by `tools/build_cards.py`. After changing app files, bump `CACHE` in `sw.js` so installed copies refresh.
