import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
export default function TraditionalPage(){
  return (
    <>
      <Navbar />
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-6">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
            <h1 className="text-4xl font-serif mb-6 text- text-black">Traditional</h1>
            <img src="/images/traditional.jpg" alt="Traditional" className="w-full max-h-96 object-cover rounded-lg mb-6"/>
            <p className="text-lg leading-relaxed text-black">
              Traditional refers to traditional clothing, associated with a particular culture or a particular time period, traditional clothing would not normally 
              be considered a "trend" because although quite popular, the design of this clothing is often used on special occasions 
              rather than being used by consumers.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}