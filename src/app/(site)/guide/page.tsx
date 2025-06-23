import Link from "next/link";
import { getAllGuides } from "@/utils/markdownGuides";

function formatGuideName(slug: string) {
  return slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function GuideListPage() {
  const guides = getAllGuides(["title", "slug", "excerpt"]);

  return (
    <div className="container py-10 mt-12">
      <h1 className="text-3xl font-bold mb-6">Guides</h1>
      <ul className="space-y-4">
        {guides.map((guide: any) => (
          <li key={guide.slug} className="border-b pb-2">
            <Link href={`/guide/${guide.slug}`}
              className="text-xl text-dark hover:underline">
              {guide.title || formatGuideName(guide.slug)}
            </Link>
            {guide.excerpt && (
              <p className="text-gray-600 text-sm mt-1">{guide.excerpt}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
} 