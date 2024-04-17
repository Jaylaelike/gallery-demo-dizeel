import { db } from "~/server/db";

export const dynamic = "force-dynamic";
  
const mockUrls = [
  "https://utfs.io/f/048732e4-5da2-4cec-b3fe-bd7dfd3774ac-ejso3p.png",
  "https://utfs.io/f/9a0a558c-6d46-49fd-89a9-58621a28308d-ejso2u.png",
  "https://utfs.io/f/6a97c5c4-c75a-471c-b315-f069db1ede28-ejso1z.png",
  "https://utfs.io/f/b4eac059-9508-4e26-afd7-9a48da9efe91-ejso14.png",
];

const mcokImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name} </div>
        ))}

        {[...mcokImages, ...mcokImages, ...mcokImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
