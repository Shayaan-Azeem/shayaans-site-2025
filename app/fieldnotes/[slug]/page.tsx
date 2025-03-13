import Link from 'next/link';

// This would typically come from a database or CMS
const blogPosts = [
  {
    title: "The Human Simulation Lab",
    date: "Jul 2024",
    image: "/photo2.jpg",
    slug: "human-simulation-lab-1"
  },
  {
    title: "The Human Simulation Lab",
    date: "Jul 2024",
    image: "/droneblue.png",
    slug: "human-simulation-lab-2"
  },
  {
    title: "The Human Simulation Lab",
    date: "Jul 2024",
    image: "/roboticsphoto.jpg",
    slug: "human-simulation-lab-3"
  }
];

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(post => post.slug === params.slug);

  return (
    <div className="bg-black text-white min-h-screen p-6">
      <div className="absolute top-8 left-8">
        <Link href="/fieldnotes" className="text-sm hover:text-gray-300 transition-colors">
          S3 / ... / fieldnotes / {params.slug}
        </Link>
      </div>
      
      <article className="max-w-3xl mx-auto pt-20">
        <div className="relative w-full h-[200px] mb-8 rounded-lg overflow-hidden">
          <img 
            src={post?.image} 
            alt={post?.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif italic mb-2">{post?.title}</h1>
          <p className="text-gray-300 text-sm">{post?.date}</p>
        </div>
        
        <div className="prose prose-invert max-w-none px-6">
          {/* Blog content will go here */}
          <p>Content coming soon...</p>
        </div>
      </article>
    </div>
  );
} 