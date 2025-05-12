import { Button } from "@heroui/button";
import Link from "next/link";

const AboutPage= () => {
  return (
   <div className="flex justify-center items-center h-screen">
     <div className="text-center space-y-4">
      <h1 className="text-2xl text-red-500 font-bold">Welcome To Channel Twenty</h1>
<p>Channeltwenty is a Professional News paper Platform. Here we will only provide you with interesting content that you will enjoy very much. We are committed to providing you the best of News paper, with a focus on reliability and News paper, Online portal. we strive to turn our passion for News paper into a thriving website. We hope you enjoy our News paper as much as we enjoy giving them to you.</p>
<p>I will keep on posting such valuable anf knowledgeable information on my Website for all of you. Your love and support matters a lot.</p>
<p>Thank you For Visiting Our Site</p>
<p>Have a great day !</p>

<Button><Link href='/home'>Back to Home</Link></Button>
    </div>
   </div>
  );
};

export default AboutPage;