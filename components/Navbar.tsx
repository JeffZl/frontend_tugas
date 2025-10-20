import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="bg-gray-900/80 w-full fixed top-0 left-0 backdrop-blur-2xl z-20 shadow-xl">
            <div className="flex justify-between max-w-5xl px-8 py-5 mx-auto">
                <div className="">
                    <Image src="/logo.svg" width={50} height={50} alt="logo" />
                </div>
                <div className="flex items-center gap-5 text-gray-300">
                    <Link className="hover:text-white transition-colors" href="#about">About Me</Link>
                    <Link className="hover:text-white transition-colors" href="#framework">Framework</Link>
                    <Link className="hover:text-white transition-colors" href="#contact">Contact</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar