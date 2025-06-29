# 🧠 Promptopia

Promptopia is a full-stack AI prompt sharing application where users can create, manage, and explore high-quality AI prompts. Built with the latest web technologies, it offers a smooth and responsive experience for prompt creators and explorers alike.

## 🌐 Live Demo

[🔗 Visit Promptopia](https://promptopia-black-beta.vercel.app/)

---

## 🚀 Purpose

Promptopia allows users to share and discover AI prompts across different domains — whether for ChatGPT, Midjourney, or other AI tools. It aims to become a go-to community for prompt engineering enthusiasts.

---

## ✨ Features

- 🔐 **OAuth Authentication** (Google only)
- 📝 **Create** new AI prompts
- ✏️ **Edit** your own prompts
- ❌ **Delete** prompts you created
- 🔍 **Search** prompts by keyword
- 📋 **Copy** prompts to clipboard
- 🔄 **Responsive** and modern design
- 🔎 **Public & Private** prompt visibility
- 📈 **Top Rated** section
- 💖 **Like Prompt** like a prompt

---

## 🔒 Authentication

- Users can sign in with their **Google account** via OAuth.
- Only authenticated users can create, edit, or delete prompts.

---

## 🛠️ Tech Stack

- **Frontend:** [Next.js 15](https://nextjs.org/) (App Router), [TypeScript](https://www.typescriptlang.org/), [Chakra UI](https://chakra-ui.com/)
- **Backend:** [Prisma ORM](https://www.prisma.io/), [PostgreSQL](https://www.postgresql.org/)
- **Forms & Validation:** [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/)
- **HTTP Requests:** [Axios](https://axios-http.com/)
- **Authentication:** [NextAuth.js](https://next-auth.js.org/)

---

## 🧑‍💻 Getting Started (Development)

```bash
# 1. Clone the repository
git clone https://github.com/mostafa-meerzad/promptopia.git
cd promptopia

# 2. Install dependencies
npm install

# 3. Setup environment variables
cp .env.example .env
# Add your DATABASE_URL, NEXTAUTH_SECRET, GOOGLE_CLIENT_ID, etc.

# 4. Push Prisma schema and seed (optional)
npx prisma db push

# 5. Run development server
npm run dev
```

---

## ✅ Environment Variables

```env
DATABASE_URL=postgresql://user:password@localhost:5432/promptopia
NEXTAUTH_SECRET=your-secret
NEXTAUTH_URL="http://localhost:3000"
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret
```

---

## 📸 Screenshots

![home-page](./home-page.png)
![prompts-page](./prompts-page.png)
![create-form](./create-form.png)
![dashboard-page](./dashboard-page.png)

---

## 🧭 Roadmap

- 🌑 Dark mode support
- 💬 likes on prompts
- 🏷️ Prompt tags and categories
- 📊 Prompt analytics (views, copies)

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

[MIT](LICENSE)

---

## 🙌 Acknowledgements

Built with ❤️ by [Mostafa Meerzad](https://www.linkedin.com/in/mostafa-meerzad-a753371b7/)
