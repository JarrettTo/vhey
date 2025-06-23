import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const guidesDirectory = join(process.cwd(), "markdown/guides");

export function getGuideSlugs() {
  return fs.readdirSync(guidesDirectory);
}

export function getGuideBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(guidesDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string | object;
  };

  const items: any = {};

  function processImages(content: string) {
    return content.replace(/!\[.*?\]\((.*?)\)/g, '<img src="$1" alt="" />');
  }

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = processImages(content);
    }
    if (field === "metadata") {
      items[field] = { ...data, coverImage: data.coverImage || null };
    }
    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllGuides(fields: string[] = []) {
  const slugs = getGuideSlugs();
  const guides = slugs
    .map((slug) => getGuideBySlug(slug, fields))
    .sort((guide1, guide2) => (guide1.date > guide2.date ? -1 : 1));

  return guides;
} 