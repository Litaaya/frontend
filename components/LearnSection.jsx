import Link from 'next/link'

const topics = [
  { id: 'casual',       title: 'Casual',       img: '/images/casual.jpg',      path: '/learn/casual' },
  { id: 'majorbrand',   title: 'MajorBrand',   img: '/images/majorbrand.jpg',  path: '/learn/majorbrand' },
  { id: 'publications', title: 'Publications', img: '/images/publications.jpg',path: '/learn/publications' },
  { id: 'runway',       title: 'Runway',       img: '/images/runway.jpg',      path: '/learn/runway' },
  { id: 'traditional',  title: 'Traditional',  img: '/images/traditional.jpg', path: '/learn/traditional' },
]

export default function LearnSection() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 bg-white p-6 rounded-lg shadow">
        {topics.map(t => (
          <div key={t.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
            <img
              src={t.img}
              alt={t.title}
              className="h-80 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2 text-black">{t.title}</h3>
              <Link
                href={t.path}
                className="text-pink-600 hover:underline"
              >
                See more information →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
