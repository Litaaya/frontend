import Navbar from '../components/Navbar';
import Footer   from '../components/Footer';
import FashionAnalyze from '../components/FashionAnalyze';

export default function StylistPage() {
  return (
    <>
      <Navbar />
      <main className="py-12 px-6">
        <h1 className="text-3xl font-serif mb-8">Fashion Analyze</h1>
        <FashionAnalyze />
      </main>
      <Footer />
    </>
  );
}
