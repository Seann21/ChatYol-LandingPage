# Portfolio Website V2

![Preview](public/images/desktopportofolio.png)

<p align='center'>My portfolio with multipage changes from the first revision (rework from <a href="https://github.com/tfkhdyt/web-portfolio-v3">tfkhdyt</a> portfolio v3)</p>

## Build With

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.npmjs.com/package/typescript)
- [Mantine](https://mantine.dev/)
- [React Hook Form](https://www.npmjs.com/package/react-hook-form)
- [Zod](https://www.npmjs.com/package/zod)
- [Jotai](https://www.npmjs.com/package/jotai)
- [React Icons](https://www.npmjs.com/package/react-icons)
- [Framer Motion](https://www.npmjs.com/package/framer-motion)
- [NProgress](https://www.npmjs.com/package/nprogress)
- [Next-SEO](https://www.npmjs.com/package/next-seo)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- Any Node.js package manager (npm, yarn, **pnpm**)

### Installation

```bash
git clone https://github.com/Seann21/Portofolio-V2.git
cd Portofolio-V2
pnpm install
# npm install
# yarn install
```

For message form support, create empty .env file and put your Message Form API URL.

```env
NEXT_PUBLIC_MESSAGE_FORM_API='Your API URL'
```

More info about [Message Form API](https://github.com/tfkhdyt/message-form-to-telegram-api)

### Usage

```bash
# development
pnpm dev

# production
pnpm build
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
