import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
export default function RunwayPage(){
  return (
    <>
      <Navbar />
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-6">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
            <h1 className="text-4xl font-serif mb-6 text-center text-black">Runway</h1>
            <img src="/images/runway.jpg" alt="Runway" className="w-full max-h-96 object-cover rounded-lg mb-6"/>
            <p className="text-lg leading-relaxed text-black">
              Runway is the fashion that has appeared on the catwalks, although quite close to the phrase trend, 
              this can be considered a "high-end" fashion, difficult to access, often of interest to fashion designers.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}