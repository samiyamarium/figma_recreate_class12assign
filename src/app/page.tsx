import Image from 'next/image';
import lo from'./lo.png';
import wo from './wo.png';
 import s1 from './s1.png';
 import s2 from './s2.png';
 import s3 from './s3.png';
 import s4 from './s4.png';
export default function  Home(){
  return(
    <div>
      <div className='  bg-[#043873]   text-white '>
        <div className='px-[180] flex m-2 p-4 text-xs font-sans gap-80 tracking-wider '><Image className="w-36 h-6" src={lo} alt='' /><ul className='flex gap-4 tracking-wide text-white font-sans'>
      <li>Products</li>
      <li>Solutions</li>
      <li>Resources</li>
      <li>Pricing</li>
      </ul>
  <button className='rounded-md text-[#043873] bg-[#FFE492] font-sans px-4 tracking-wide  py-1'>Login</button>
      </div><br/><br/>
      <div className='flex py-20 '><div className='px-[180]'><div className='pt-20 font-sans  text-5xl font-bold py-4'><b>Get More Done with<br/> whitespace</b></div><div className='font-sans text-xs '>Project management software that enables your teams to collaborate, plan, <br/>analyze and manage everyday tasks</div><br/><br/><button className='bg-[#4F9CF9] px-4 py-4 font-sans rounded-md text-xs  '>Try WhiteSpace free &#x2192;</button></div>
      <div className='flex-1 mx-24  w-[560] h-[390] bg-sky-200'></div>
      </div> 
     <div className='flex py-8 bg-white'>
      <div className='bg-white px-[180] '><div className='pt-20 text-black font-sans  text-5xl font-bold py-4'><b>Project<br/> Management</b></div><br/><div className='font-sans  text-black text-[10]  '>Images, videos, PDFs and audio files are supported. Create math expressions and <br/>diagrams directly from the app. Take photos with the mobile app and save<br/> them to a note.</div><br/><br/><button className='bg-[#4F9CF9] px-4 py-4 font-sans rounded-md text-xs  '>Get Started &#x2192;</button></div>
      <div className='flex-1 mx-28 pt-20 w-[510] h-[390] bg-sky-300'></div></div>
   
      <div className='flex py-8 bg-white'>
        <div className='pt-12 px-[180] flex'> <Image className='w-[450] '  src={wo} alt=''/>
      <div className='bg-white px-[180]  ] '><div className=' pt-40 text-black font-sans  text-5xl font-bold py-4'><b>Work together</b></div><br/><div className='font-sans  text-black text-[10]  '> With whitepace, share your notes with your colleagues and collaborate on them.<br/>
You can also publish a note to the internet and share the URL with others.
</div><br/><br/><button className='bg-[#4F9CF9] px-4 py-4 font-sans rounded-md text-xs  '>Try it Now &#x2192;</button></div>
      </div></div>
      <div className='flex py-20'><div className='px-[180]'><div className='pt-16 font-sans  text-5xl font-bold py-4'><b>Use as Extension</b></div><div className='font-sans pr-4 '>Use the web clipper extension, available on Chrome and Firefox, to save web pages<br/> or take screenshots as notes.
      </div><br/><br/><button className='bg-[#4F9CF9] px-4 py-4 font-sans rounded-md text-xs  '>Let&apos;s Go &#x2192;</button></div>
      <div className='flex-1 mx-20  w-[560] h-[390] bg-sky-200'></div>
      </div> 
      <div className='flex py-8 bg-white '>
      <div className=' pt-20 flex-1 mx-8   w-[550] h-[560] bg-sky-200'></div>
      <div className='  mx-8 pt-28'><div className='pt-12 text-black font-sans  text-4xl font-bold py-4'><b>Customise it
      to<br/> your needs</b></div><br/><div className='font-sans  text-black text-[10]  '>Customise the app with plugins, custom themes and multiple text editors &#40;Rich<br/> Text or Markdown&#41;. Or create your own scripts and plugins using the Extension API.</div><br/><br/><button className='bg-[#4F9CF9] px-4 py-4 font-sans rounded-md text-xs  '>Let&apos;s Go &#x2192;</button></div>
     </div>
     <div className=' mx-60 '><div className=' pt-20 text-white font-sans  text-5xl  font-bold py-4'><b>Your work, everywhere you are</b></div>
     <br/><div className='px-4 font-sans  text-white text-[8]  '>Access your notes from your computer, phone or tablet by synchronising with various services, including whitespace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</div><br/><br/><div className='px-[300]'><button className='bg-[#4F9CF9] px-4 py-4 mx-96 font-sans rounded-md text-xs  '>Try TasKey &#x2192;</button></div></div>
    <div ><div className='bg-white pt-16 font-sans text-5xl text-black text-center font-bold'><b>Our Sponsors</b><br/><br/><div className='ml-80 flex gap-36 w-28 h-8 ' ><Image src={s1} alt=''/><Image src={s2} alt=''/><Image src={s3} alt=''/><Image src={s4} alt=''/></div><br/></div></div>
     <div className=' flex pt-20 px-[180] text-white gap-32'>
      <div ><ul>
        <li><Image className='w-32  ' src={lo} alt=''/></li>
      <li className='fonr-sans  justify-evenly py-8 '>whitepace was created for<br/> the new ways we live and<br/> work. We make a better<br/> workspace around the world</li>
      </ul></div>
      <div ><ul className='space-y-2 pr-24' >
        <li><b>Products</b></li><br/>
      <li className='text-yellow-500 space-y-2'>Overview</li>
      <li className='space-y-2 '>Pricing</li>
      <li className='space-y-2 '>Customer stories</li></ul></div>
      <div><ul className='space-y-2 pr-24'>
        <li className='space-y-2 '><b>Resources</b></li><br/>
      <li className='space-y-2 '>Blog</li>
      <li className='space-y-2 '>Guides & Tutorials</li>
      <li className='space-y-2 '>Help center</li></ul></div>
      <div ><ul className='space-y-8'>
        <li className='space-y-4'><b>Company</b></li>
      <li className='space-y-2'>About us</li>
      <li>Careers</li></ul></div>
     </div>
     </div></div>
     
  )
}
