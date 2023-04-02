import Blogs from "@/components/Blogs";
import Facilites from "@/components/Facilites";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Herosection from "@/components/Herosection";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
   <><Header /><Herosection /> <Features/> <Facilites/> <Testimonial/> <Blogs/> <Footer/></>
  )
}