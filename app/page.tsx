import Image from 'next/image'
import Link from 'next/link'
import Hero_Image from 'public/Total-Fashion-Hero.jpg'
import Footer from './../components/footer'

export default function Home() {
  return (
    <>
      <div>
        <Image 
          src={Hero_Image}
          alt="Total Fasion Roxbury"
          />
        <p> A family operated bussiness, proudly serving the White Center community. </p>
           <div>
                <p>sliding pictures here</p>
            </div> 
      </div>
   </>
);
}
