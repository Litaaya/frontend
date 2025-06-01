import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
export default function CasualPage(){
  return (
    <>
      <Navbar />
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-6">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
            <h1 className="text-4xl font-serif mb-6 text-center text-black">Casual</h1>
            <img src="/images/casual.jpg" alt="Casual" className="w-full max-h-96 object-cover rounded-lg mb-6"/>
            <p className="text-lg leading-relaxed text-black">
              Casual is normal clothing, you can see it anywhere, even clothes without labels of clothing brands, can be made by any tailor from amateur to professional.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}