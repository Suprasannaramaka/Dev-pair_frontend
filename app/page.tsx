 "use client";
 import Navbar from '@/components/ui/Navbar';
import Image from 'next/image';
export default function Page() {
  return (
    <main className="main-container">
      <Navbar />
      <div className="content">
      <p>The Best online 1-on-1 Mentor-Student Platform</p>
      <p>Connect with mentors and students for personalized learning experiences.</p>
      <br/>
      <Image src="/student-mentor.jpg" height={300} width={800} alt="student-mentor" className="rounded-lg h-300 w-[800]"/>
      <br/>
      <p className="pr-50 flex flex-row items-center pl-50 gap-2.5">
        Follow us on:
        <Image src="/linkdin-logo.webp" alt="LinkedIn" width="20" height="5"/><a href="https://www.linkedin.com/company/devpair">LinkedIn</a>
        <Image src="/instagram-logo.png" alt="Instagram" width="20" height="5" /><a href="https://www.instagram.com/devpair">Instagram</a>
        <Image src="/telegram-logo.png" alt="Telegram" width="20" height="5" /><a href="https://www.telegram.com/company/devpair">Telegram</a>
      </p>
    </div>
    </main>
  )
  }