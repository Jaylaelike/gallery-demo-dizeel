import { SignedIn, SignedOut } from "@clerk/nextjs";

import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

import Image from "next/image";
import Link from "next/link";

// const mockUrls = [
//   "https://utfs.io/f/048732e4-5da2-4cec-b3fe-bd7dfd3774ac-ejso3p.png",
//   "https://utfs.io/f/9a0a558c-6d46-49fd-89a9-58621a28308d-ejso2u.png",
//   "https://utfs.io/f/6a97c5c4-c75a-471c-b315-f069db1ede28-ejso1z.png",
//   "https://utfs.io/f/b4eac059-9508-4e26-afd7-9a48da9efe91-ejso14.png",
// ];

// const mcokImages = mockUrls.map((url, index) => ({
//   id: index + 1,
//   url,
// }));

async function Images() {
  const images = await getMyImages();
  console.log(images);

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {/* {images.map((post) => (
      <div key={post.id}>{post.name} </div>
    ))} */}

      {images.map((image) => (
        <div key={image.id} className="flex h-48 w-48 flex-col">
          <Link href={`/img/${image.id}`}> 
          <Image
            src={image.url}
            style={{ objectFit: "contain" }}
            width={192}
            height={192}
            alt={image.name}
          />
          </Link>
          <div> {image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          {" "}
          Please sign in
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
