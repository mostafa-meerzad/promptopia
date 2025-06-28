import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create users first
  const user1 = await prisma.user.upsert({
    where: { id: "cmc7vfswq00003uwoo2fhten7" },
    update: {},
    create: {
      id: "cmc7vfswq00003uwoo2fhten7",
      email: "user1@example.com",
      name: "User One",
      image: "https://i.pravatar.cc/150?u=user1",
    },
  });

  const user2 = await prisma.user.upsert({
    where: { id: "cmc9c87yz00003utcmqefduzc" },
    update: {},
    create: {
      id: "cmc9c87yz00003utcmqefduzc",
      email: "user2@example.com",
      name: "User Two",
      image: "https://i.pravatar.cc/150?u=user2",
    },
  });

  const prompts = [
    {
      content: "Tell me a dad joke about pizza.",
      views: 12,
      tags: ["joke", "funny", "pizza"],
    },
    {
      content: "Give me 3 startup ideas combining AI and pets.",
      views: 22,
      tags: ["startup", "AI", "pets"],
    },
    {
      content: "Write a poem about loneliness and the moon.",
      views: 18,
      tags: ["poem", "moon", "sad"],
    },
    {
      content: "Create a 5-tweet thread about productivity hacks.",
      views: 7,
      tags: ["twitter", "productivity"],
    },
    {
      content: "What is quantum computing? Explain like I'm 5.",
      views: 33,
      tags: ["explain", "quantum", "simple"],
    },
    {
      content: "Write clear comments for this JavaScript function.",
      views: 4,
      tags: ["code", "JS", "comment"],
    },
    {
      content: "Give me a motivational quote to start the day.",
      views: 16,
      tags: ["quote", "motivation"],
    },
    {
      content: "Write a positive product review for a smart watch.",
      views: 6,
      tags: ["review", "product", "smartwatch"],
    },
    {
      content: "Write a funny LinkedIn bio for a data analyst.",
      views: 11,
      tags: ["funny", "bio", "LinkedIn"],
    },
    {
      content: "Argue both sides: Is AI a threat to humanity?",
      views: 27,
      tags: ["debate", "AI", "philosophy"],
    },
    {
      content: "Give advice to someone struggling with imposter syndrome.",
      views: 20,
      tags: ["mental health", "confidence", "advice"],
    },
    {
      content: "Suggest a productivity-boosting morning routine.",
      views: 9,
      tags: ["routine", "productivity", "morning"],
    },
    {
      content: "Tips for a beginner learning to code.",
      views: 13,
      tags: ["coding", "beginner", "learning"],
    },
    {
      content: "Plan a 3-day trip to Tokyo for a foodie.",
      views: 25,
      tags: ["travel", "foodie", "Tokyo"],
    },
    {
      content: "Write strong resume bullets for a project manager.",
      views: 8,
      tags: ["resume", "job", "PM"],
    },
    {
      content: "Give a weekly gym workout plan for beginners.",
      views: 17,
      tags: ["fitness", "gym", "workout"],
    },
    {
      content: "Critique this AI-generated poem.",
      views: 6,
      tags: ["critique", "poetry", "AI"],
    },
    {
      content: "Recommend 5 books about human psychology.",
      views: 19,
      tags: ["books", "psychology", "recommendation"],
    },
    {
      content: "Generate a fantasy RPG character with backstory.",
      views: 21,
      tags: ["fantasy", "RPG", "character"],
    },
    {
      content: "Create a 30-day plan to learn TypeScript.",
      views: 30,
      tags: ["learning", "typescript", "plan"],
    },
  ];

  const author1Prompts = prompts.slice(0, 12).map((prompt) => ({
    ...prompt,
    authorId: user1.id,
  }));

  const author2Prompts = prompts.slice(12).map((prompt) => ({
    ...prompt,
    authorId: user2.id,
  }));

  await prisma.prompt.createMany({
    data: [...author1Prompts, ...author2Prompts],
  });

  console.log("✅ Users and prompt data seeded!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
