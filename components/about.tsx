import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function About({ 
   className,
 ...props
}: React.ComponentProps<"div">) {
return(
<div className={cn("flex flex-col p-10" , className)} {...props}>
<div>
<h1>DEV-PAIR</h1>
<h5>Dev-Pair offer 1:1 mentorship classes for personalized guidance, strategy, and support,
pairing students with experienced mentors for tailored academic planning, doubt clearing,
motivation, and skill development, moving beyond generic coaching to address individual 
strengths, weaknesses, and goals for better focus and confidence in challenging subjects or
 competitive exams. Mentors act as coaches, providing accountability, emotional support, and 
 practical advice to help students navigate academic hurdles and achieve holistic growth. </h5>
 <br/>
 <Button asChild variant="outline"><Link href="/www.google.com">Start Learning</Link></Button>
 <br/><br/>
 <Image src="/SM.jpg" alt="" width={500} height={100} className="rounded-xl align-items-center"/>
 </div>
 <br/><br/><br/>
  <h1>Reasons to Join DevPair:</h1>
 <div className="flex-3 flex-row gap-5 p-10">
 <br/>
 <ul className="flex flex-col gap-10">
   <li>
 <Image src="/SM illustration.jpg" alt="" width={200} height={0}/>
 <h5>1:1 mentorship is where an experienced person (mentor) provides personalized guidance, support, and 
    advice to one specific individual (mentee) to help them develop skills, achieve 
    career goals, and navigate challenges through confidential, focused conversations</h5>
    </li>
 <li>
<Image src="/student-mentor-activities.jpg" alt="" width={200} height={0}/>
 <h5>1:1 mentorship offers personalized guidance, accelerated growth, and 
    increased confidence by tailoring advice to individual goals, fostering a 
    safe space for questions, and providing direct accountability, leading to 
    better skill development, stress management, networking, and achievement of
    specific objectives, unlike group settings</h5></li>
  <li>
<Image src="/teacher.jpg" alt="" width={200} height={0}/>
 <h5>Dev-Pair offers 1:1 mentorship for students where they have a conversation with mentor 
    and get their doubts cleared, and get proper guidence to acheive their goals.
    Dev-Pair foucuses on personalized learning, accountability, and emotional support
    to help students overcome academic challenges and reach their full potential.
 </h5>
 </li>
 </ul>
 </div>
 <br/><br/>
</div>
)
}
