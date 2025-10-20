import Navbar from "@/components/Navbar"
import Image from "next/image"
import Link from "next/link"

const framework = [
    { name: "Javascript" },
    { name: "Typescript" },
    { name: "React" },
    { name: "Angular" }
]

const concact = [
    { name: "Linkedin" },
    { name: "Email" },
    { name: "Github" }
]

const page = () => {
    return (
        <div className="bg-gray-900">
            <Navbar />
            
            <main className="max-w-5xl mx-auto px-4 pt-10">
                {/* Hero */}
                <div className="flex items-center justify-center text-center min-h-[70vh]">
                    <div className="w-1/2 text-left">
                        <h2 className="text-6xl font-extrabold mb-3 text-purple-500">Front End Developer</h2>

                        <p className="text-lg text-gray-400 mb-7">I'm a Professional Front-End Developer With 5 Years of Experience. I'm Able To Create Website Using Next.JS, Laravel, Angular, Etc.</p>

                        <Link href="#about" className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded-lg">More About Me</Link>
                    </div>
                    <div className="w-1/2 flex justify-center">
                        <div className="w-80 h-80 rounded-full overflow-hidden">
                            <Image
                                src="/images.jpeg"
                                alt="Photo"
                                width={9999999}
                                height={9999999}
                                objectFit="cover"
                            />
                        </div>
                    </div>
                </div>

                {/* About Me */}
                <section className="py-20" id="about">
                    <h2 className="text-4xl font-bold text-center pb-8">About Me</h2>
                    <div className="bg-gray-800 p-8 rounded-xl">
                        <p className="text-gray-400 text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum exercitationem laborum autem sint facere debitis nemo labore, eveniet earum mollitia optio illum hic quod soluta quo ipsam sed reiciendis tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolor minima laboriosam, voluptas, deleniti iste nisi soluta architecto quam cum maiores quaerat, ex sequi? Iusto, odit? Quam natus sequi possimus?
                        </p>
                    </div>
                </section>

                {/* Framework */}
                <section id="framework" className="py-20">
                    <h2 className="text-4xl font-bold text-center pb-8">Framework</h2>

                    <div className="flex justify-between items-center">
                        {framework.map(({ name }) => (
                            <div key={name} className="bg-gray-800 flex flex-col items-center p-4 rounded-lg ">
                                <p className="text-xl font-bold">{name}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Concact */}
                <section className="py-20" id="contact">
                    <h2 className="text-4xl font-bold text-center pb-8">Contact Me</h2>

                    <div className="flex items-center gap-5 justify-center">
                        {concact.map(({ name }) => (
                            <div key={name} className="bg-gray-800 flex flex-col items-center p-4 rounded-lg ">
                                <p className="text-xl font-bold">{name}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}

export default page