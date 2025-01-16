import Link from 'next/link'


const page = () => {
  return (
    <div id="contect" className=" w-full h-[350px]">
      <div className="border w-[300px]">
        <h1 className="font-bold mb-3">Contact Information</h1>
        <p>+6695-807-2692</p>
        <p>91/835 Nuanjan 56 Alley, Section 1, Nuanjan Subdistrict, Bueng Kum District, Bangkok 10230, Thailand</p>
      </div>
      <div className='border w-[300px]'>
      <h1 className="font-bold mb-3">Social Media Links</h1>
        <Link href='#'>Home</Link>
        <Link href='#'>About Me</Link>
        <Link href='#'>Skill</Link>
        <Link href='#'>Project</Link>
        <Link href='#'>Contect</Link>
      </div>
      <div className="border w-[500px]">
        <h1 className="font-bold mb-3">Important Links</h1>
        <Link href='#'>facebook: Awirut jiensakul</Link><br />
        <Link href='#'>Email: luckych315@gmail.com</Link>
        <Link href='#'>Github: AwirutJr</Link>
        <Link href='#'>Linkin: Awirut Jiensakul</Link>
        <Link href='#'>IG: awirut_ck</Link>
      </div>
      <div><p>© 2025 AwirutJr. All rights reserved.</p></div>

    </div>
  )
}

export default page
