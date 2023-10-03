import Image from 'next/image'
import Link from 'next/link'
import Hero_Image from 'public/Total-Fashion-Hero.jpg'

export default function Home() {
  return (
    <>
      <div>
        <Image 
          src={Hero_Image}
          alt="Total Fasion Roxbury"
          />
        <p> A family operated bussiness, proudly serving the White Center community. </p>
      </div>
      <div>
        <ul>
          <li>Monday 9AM-6PM</li>
          <li>Tuesday 9AM-6PM</li>
          <li>Wednesday 9AM-6PM</li>
          <li>Thursday 9AM-6PM</li>
          <li>Friday 9AM-6PM</li>
          <li>Saturday 10AM-4PM</li>
        </ul>
        <p>Gmaps here</p>
      </div>
      <div>
        <p>sliding pictures here</p>
      </div>
    </>
);
}
