import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default function Posts() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => ({
    slug: filename.replace('.md', ''),
    title: filename.replace('.md', ''), // 假設檔案名即為文章標題
  }));

  return (
    <div className="prose mx-auto">
      <h1>文章列表</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`} className="text-blue-500 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
