import { Head, Link } from '@inertiajs/react';
import { HeroHighlight, Highlight } from '@/components/ui/hero';
import { DirectionAwareHover } from '@/components/ui/cardAmin';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form } from '@inertiajs/react';


export default function Welcome() {
    return (
        <>
            <Head title="Portfolio" />

            <div className="flex flex-col min-h-screen overflow-x-hidden bg-gray-50 dark:bg-white text-gray-900 dark:text-gray-100">

                {/* Navbar */}
                <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
                    <div className="container mx-auto flex flex-wrap justify-between items-center p-4">
                        <img src="assets/LOG.png" alt="" className="h-24 w-24 sm:h-36 sm:w-36" />
                        <nav className="flex flex-wrap justify-center sm:justify-end gap-2 sm:gap-4 mt-2 sm:mt-0">
                            <Link
                                href="#me"
                                className="px-3 py-2 sm:px-6 sm:py-3 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            >
                                About
                            </Link>
                            <Link
                                href="#projects"
                                className="px-3 py-2 sm:px-6 sm:py-3 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            >
                                Projects
                            </Link>
                            <Link
                                href="#skills"
                                className="px-3 py-2 sm:px-6 sm:py-3 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            >
                                Skills
                            </Link>
                            <Link
                                href="#contact"
                                className="px-3 py-2 sm:px-6 sm:py-3 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            >
                                Contact
                            </Link>
                        </nav>

                    </div>
                </header>

                {/* Hero Section */}
                <HeroHighlight containerClassName="h-screen flex items-center justify-center px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
                        Transforming your ideas into digital realities that captivate and convert — <Highlight>built by Mennous</Highlight>
                    </h1>
                </HeroHighlight>

                {/* About Section */}
                <section id="me" className="py-16 sm:py-20 container mx-auto px-4 text-center dark:bg-gray-200">
                    <div className="flex flex-col md:flex-row items-center md:justify-around flex-wrap">
                        <div className="mt-8 md:mt-0 md:w-5/12">
                            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-black">About Me</h3>
                            <p className="text-gray-700 dark:text-gray-800 text-base sm:text-lg">
                                I am a web developer with a strong focus on backend development, specializing in PHP (Laravel), C#, and modern frontend tools like Tailwind CSS. I enjoy transforming complex ideas into clean, scalable, and reliable systems that empower businesses and improve user experiences. I make sure every project I work on is both technically solid and user-friendly. My goal is to deliver solutions that not only work seamlessly but also delight clients and their users.
                            </p>
                        </div>

                        <div className="mt-8 md:mt-0 md:w-5/12 flex justify-center">
                            <DirectionAwareHover
                                imageClassName="h-60 w-60 md:h-96 md:w-96 max-w-full object-cover"
                                children="Amin"
                                imageUrl="assets/amin.jpg"
                            />
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-16 sm:py-20 bg-gray-100 dark:bg-gray-800 w-full">
                    <div className="container mx-auto px-4 text-center">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-12 text-white">Projects</h3>
                        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            <div className="bg-white dark:bg-gray-700 rounded-lg shadow hover:scale-105 transform transition p-4 sm:p-6">
                                <h4 className="font-semibold text-xl mb-2">Restaurant website</h4>
                                <img src="assets/restaurant.png" className='m-4 mx-auto max-w-full h-auto' alt="" />
                                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">I built this restaurant website using PHP, MySQL, and Tailwind CSS. It includes features like dynamic menu management, admin panel.</p>
                                <Link href="#" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">View Project</Link>
                            </div>
                            <div className="bg-white dark:bg-gray-700 rounded-lg shadow hover:scale-105 transform transition p-4 sm:p-6">
                                <h4 className="font-semibold text-xl mb-2">Monthly Budget tracker</h4>
                                <img src="assets/budget.png" className='m-4 mx-auto max-w-full h-auto' alt="" />
                                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">A web application built with Laravel PHP, JavaScript, MySQL, and Tailwind CSS that helps users efficiently track their income, expenses, and savings. It features real-time balance updates, categorized expense tracking.</p>
                                <Link href="#" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">View Project</Link>
                            </div>
                            <div className="bg-white dark:bg-gray-700 rounded-lg shadow hover:scale-105 transform transition p-4 sm:p-6">
                                <h4 className="font-semibold text-xl mb-2">Coming soon</h4>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="py-16 sm:py-20 bg-gray-900 text-white dark:bg-gray-200">
                    <div className="container mx-auto px-4 text-center">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-12 text-black">Skills</h3>
                        <div className="space-y-6 max-w-3xl mx-auto">
                            {[
                                { name: "PHP / Laravel", level: "60%" },
                                { name: "C#", level: "10%" },
                                { name: "MySQL", level: "75%" },
                                { name: "Tailwind CSS", level: "50%" },
                                { name: "React / Inertia.js", level: "5%" },
                            ].map((skill) => (
                                <div key={skill.name} className="text-left">
                                    <div className="flex justify-between mb-1 text-sm sm:text-base">
                                        <span className="font-medium text-black">{skill.name}</span>
                                        <span className="text-gray-400">{skill.level}</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-3">
                                        <div
                                            className="bg-gradient-to-r from-indigo-900 to-blue-800 h-3 rounded-full"
                                            style={{ width: skill.level }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-16 sm:py-20 bg-gray-100 dark:bg-gray-800">
                    <div className="container mx-auto px-4 text-center">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-6">Contact Me</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-8 text-sm sm:text-base">Feel free to reach out for collaborations or freelance work.</p>
                        <Form className="max-w-md mx-auto flex flex-col gap-4" action={route("email-me")} method='post' >
                            {({ errors }) => (
                                <>

                                    <Input type="text" placeholder="Your Name" name='name'  className="px-4 py-2 rounded border dark:bg-gray-700 dark:border-gray-600 w-full" />
                                    <InputError message={errors.name} className='flex justify-start' />
                                    <Input type="email" placeholder="Your Email" name='email' className="px-4 py-2 rounded border dark:bg-gray-700 dark:border-gray-600 w-full" />
                                    <InputError message={errors.email} className='flex justify-start' />
                                    <textarea placeholder="Your Message" name='message' className="px-4 py-2 rounded border dark:bg-gray-700 dark:border-gray-600 w-full" rows={5} />
                                    <InputError message={errors.message} className='flex justify-start' />
                                    <Button type="submit" className="px-6 py-3 rounded bg-indigo-600 text-white font-semibold hover:bg-indigo-700">
                                        Send Message
                                    </Button>
                                </>
                            )}
                        </Form>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-6 text-center border-t border-gray-300 dark:bg-gray-900 dark:border-gray-700">
                    &copy; {new Date().getFullYear()} Amin. All rights reserved.
                </footer>
            </div>
        </>
    );
}
