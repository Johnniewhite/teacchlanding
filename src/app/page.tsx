import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Values } from '@/components/Values';
import { Subsidiaries } from '@/components/Subsidiaries';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full overflow-x-hidden">
      <Hero />
      <Services />
      <Values />
      <Subsidiaries />
      <Contact />
      <Footer />
    </main>
  );
}
