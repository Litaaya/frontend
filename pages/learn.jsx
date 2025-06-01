import Navbar from '../components/Navbar';
import Footer   from '../components/Footer';
import LearnSection from '../components/LearnSection';

export default function LearnPage() {
  return (
    <>
      <Navbar />
      <main className="py-12 px-6">
        <h1 className="text-3xl font-serif mb-8">Fashion Labels</h1>
        <LearnSection />
      </main>
      <Footer />
    </>
  );
}
