import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.prompt.createMany({
    data: [
      {
        title: "Dad Joke Generator",
        content: "Tell me a dad joke about pizza.",
        rating: 4.5,
        views: 12,
        tags: ["joke", "funny", "pizza"],
      },
      {
        title: "Startup Idea Helper",
        content: "Give me 3 startup ideas combining AI and pets.",
        rating: 5.0,
        views: 22,
        tags: ["startup", "AI", "pets"],
      },
      {
        title: "Poem Creator",
        content: "Write a poem about loneliness and the moon.",
        rating: 3.7,
        views: 18,
        tags: ["poem", "moon", "sad"],
      },
      {
        title: "Twitter Thread Wizard",
        content: "Create a 5-tweet thread about productivity hacks.",
        rating: 4.2,
        views: 7,
        tags: ["twitter", "productivity"],
      },
      {
        title: "Explain Like I'm 5",
        content: "What is quantum computing? Explain like I'm 5.",
        rating: 4.8,
        views: 33,
        tags: ["explain", "quantum", "simple"],
      },
      {
        title: "Code Comment Generator",
        content: "Write clear comments for this JavaScript function.",
        rating: 2.9,
        views: 4,
        tags: ["code", "JS", "comment"],
      },
      {
        title: "Daily Motivation",
        content: "Give me a motivational quote to start the day.",
        rating: 4.1,
        views: 16,
        tags: ["quote", "motivation"],
      },
      {
        title: "Product Review",
        content: "Write a positive product review for a smart watch.",
        rating: 3.3,
        views: 6,
        tags: ["review", "product", "smartwatch"],
      },
      {
        title: "Funny Bios",
        content: "Write a funny LinkedIn bio for a data analyst.",
        rating: 4.6,
        views: 11,
        tags: ["funny", "bio", "LinkedIn"],
      },
      {
        title: "AI Debate Prompt",
        content: "Argue both sides: Is AI a threat to humanity?",
        rating: 4.9,
        views: 27,
        tags: ["debate", "AI", "philosophy"],
      },
    ],
  });

  console.log("✅ Prompt seed data inserted!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
