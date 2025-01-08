import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import { Metadata } from 'next';

// Fetch data directly in the component
export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filePath = path.join(postsDirectory, `${slug}.md`);

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    throw new Error(`Post not found: ${slug}`);
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const processedContent = await remark().use(html).process(fileContents);
  const contentHtml = processedContent.toString();

  return (
    <article className="prose mx-auto">
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
}

// Generate static paths
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace('.md', ''),
  }));
}

// Optionally, you can define metadata for the page
export const metadata: Metadata = {
  title: 'Post',
};
