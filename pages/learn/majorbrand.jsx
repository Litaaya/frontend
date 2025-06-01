import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
export default function MajorBrandPage(){
  return (
    <>
      <Navbar />
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-6">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
            <h1 className="text-4xl font-serif mb-6 text-center text-black">MajorBrand</h1>
            <img src="/images/majorbrand.jpg" alt="MajorBrand" className="w-full max-h-96 object-cover rounded-lg mb-6"/>
            <p className="text-lg leading-relaxed text-black">
              Major Brand is the clothing of fashion brands that have more or less reputation in the fashion industry such as vogue, channel, H&M, etc.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}