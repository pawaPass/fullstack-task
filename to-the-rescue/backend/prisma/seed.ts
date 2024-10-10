import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.employee.createMany({
    data: [
      { name: "John Doe", role: "Developer", email: "john@example.com" },
      { name: "Jane Smith", role: "Designer", email: "jane@example.com" },
      { name: "Alice Johnson", role: "Manager", email: "alice@example.com" },
      { name: "Bob Williams", role: "Developer", email: "bob@example.com" },
      { name: "Charlie Brown", role: "QA", email: "charlie@example.com" },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
