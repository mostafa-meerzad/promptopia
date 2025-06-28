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
      rating: 4.5,
      views: 12,
      tags: ["joke", "funny", "pizza"],
    },
    {
      content: "Give me 3 startup ideas combining AI and pets.",
      rating: 5.0,
      views: 22,
      tags: ["startup", "AI", "pets"],
    },
    {
      content: "Write a poem about loneliness and the moon.",
      rating: 3.7,
      views: 18,
      tags: ["poem", "moon", "sad"],
    },
    {
      content: "Create a 5-tweet thread about productivity hacks.",
      rating: 4.2,
      views: 7,
      tags: ["twitter", "productivity"],
    },
    {
      content: "What is quantum computing? Explain like I'm 5.",
      rating: 4.8,
      views: 33,
      tags: ["explain", "quantum", "simple"],
    },
    {
      content: "Write clear comments for this JavaScript function.",
      rating: 2.9,
      views: 4,
      tags: ["code", "JS", "comment"],
    },
    {
      content: "Give me a motivational quote to start the day.",
      rating: 4.1,
      views: 16,
      tags: ["quote", "motivation"],
    },
    {
      content: "Write a positive product review for a smart watch.",
      rating: 3.3,
      views: 6,
      tags: ["review", "product", "smartwatch"],
    },
    {
      content: "Write a funny LinkedIn bio for a data analyst.",
      rating: 4.6,
      views: 11,
      tags: ["funny", "bio", "LinkedIn"],
    },
    {
      content: "Argue both sides: Is AI a threat to humanity?",
      rating: 4.9,
      views: 27,
      tags: ["debate", "AI", "philosophy"],
    },
    {
      content: "Give advice to someone struggling with imposter syndrome.",
      rating: 4.3,
      views: 20,
      tags: ["mental health", "confidence", "advice"],
    },
    {
      content: "Suggest a productivity-boosting morning routine.",
      rating: 4.0,
      views: 9,
      tags: ["routine", "productivity", "morning"],
    },
    {
      content: "Tips for a beginner learning to code.",
      rating: 4.2,
      views: 13,
      tags: ["coding", "beginner", "learning"],
    },
    {
      content: "Plan a 3-day trip to Tokyo for a foodie.",
      rating: 4.7,
      views: 25,
      tags: ["travel", "foodie", "Tokyo"],
    },
    {
      content: "Write strong resume bullets for a project manager.",
      rating: 3.9,
      views: 8,
      tags: ["resume", "job", "PM"],
    },
    {
      content: "Give a weekly gym workout plan for beginners.",
      rating: 4.5,
      views: 17,
      tags: ["fitness", "gym", "workout"],
    },
    {
      content: "Critique this AI-generated poem.",
      rating: 3.5,
      views: 6,
      tags: ["critique", "poetry", "AI"],
    },
    {
      content: "Recommend 5 books about human psychology.",
      rating: 4.4,
      views: 19,
      tags: ["books", "psychology", "recommendation"],
    },
    {
      content: "Generate a fantasy RPG character with backstory.",
      rating: 4.6,
      views: 21,
      tags: ["fantasy", "RPG", "character"],
    },
    {
      content: "Create a 30-day plan to learn TypeScript.",
      rating: 4.9,
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
