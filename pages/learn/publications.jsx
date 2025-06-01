import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
export default function PublicationsPage(){
  return (
    <>
      <Navbar />
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-6">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
            <h1 className="text-4xl font-serif mb-6 text-center text-black">Publications</h1>
            <img src="/images/publications.jpg" alt="Publications" className="w-full max-h-96 object-cover rounded-lg mb-6"/>
            <p className="text-lg leading-relaxed text-black">
              Publications are outfits that have appeared in fashion magazines, included in collections published in newspapers. This is the fashion closest 
              to the phrase "trend" because it can be easily accessed by users interested in fashion.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}