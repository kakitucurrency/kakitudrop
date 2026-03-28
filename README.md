# KakituDrop

Kakitu cryptocurrency (KSHS) Faucet. Easy, clean and fast!

Visit: https://drop.kakitu.org

### Introduction

This project was created to help bring <a href="https://kakitu.org">Kakitu</a> to the masses.

Faucets are efficient ways to introduce cryptocurrency to new users.
Any amount is enough to show the benefits of Kakitu cryptocurrency: simple, instant, no fees.

KakituDrop is not only another Kakitu faucet, but an open source Kakitu Faucet.

It's built with **React**, **Next.JS**, **Tailwind** and **Material UI**

### Features:

- Clean and responsive UI with light and dark mode
- Automatic, rounded amount based on 0.01% of balance
- Custom checkbox.
- QR code reader.
- Transactions history with geolocation.
- PoW cache, allowing for always instant transactions.
- Public API for faucet data.
- KSHS Price
- Error tracking with Sentry
- Anti-spam and anti-bot barriers such as:
  - Cryptographically signed tickets with amount, ip and expiration
  - Invisible anti-bot verification
  - Limit per Kakitu account
  - Limit per IP address

### API

To ensure scalability and fast transactions, we created a separate codebase just for the API, found in the following repository: https://github.com/kakitucurrency/kakitudrop-api

### Donations

KakituDrop is a free, voluntary and open source initiative.
We don't use ads, we don't sell personal data.
Our focus is to bring Kakitu to the masses.

If you like it consider making a small donation, helping to distribute Kakitu to other users.

https://drop.kakitu.org/donate

### Contact:

hello@kakitu.org
