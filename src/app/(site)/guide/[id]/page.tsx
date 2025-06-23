import { getGuideBySlug } from "@/utils/markdownGuides";
import { MDXRemote } from "next-mdx-remote/rsc";
import { serialize } from "next-mdx-remote/serialize";

// Optionally import your custom React components to use in MDX
// import CustomButton from "@/components/CustomButton";

// const components = { CustomButton };

export default async function GuidePage({ params }: { params: { id: string } }) {
  const guide = getGuideBySlug(params.id, ["title", "content", "metadata"]);
  // Serialize the MDX content
  // Note: next-mdx-remote/rsc handles serialization in app directory
  // If you want to use custom components, pass them as the 'components' prop
  return (
    <div className="container py-10 mt-15">

      <div className="blog-details max-w-none">
        <MDXRemote source={guide.content || ""} /* components={components} */ />
      </div>
    </div>
  );
} 