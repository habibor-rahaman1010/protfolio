import Image from "next/image";
import pro from "../../public/assets/images/profile.jpg";


const HeoroSection = () => {
    return (
        <div>
            <div className="bg-slate-800">
                <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        <span className="block py-2 text-slate-50 text-2xl">Hello i'm</span>
                        <span className="block py-3 text-teal-500 text-4xl">Habibor Rahaman.</span>
                        <span className="block py-5 text-teal-300 text-5xl">Full Stack Developer !</span>
                        </h2>
                        <div className="text-white mb-4">
                            <span className="inline-block p-4"><li>Web Developer</li></span>
                            <span className="inline-block p-4"><li>Programmer</li></span>
                            <span className="inline-block p-4"><li>Software Engineer</li></span>
                        </div>

                        <div className="inline-flex rounded-md shadow">
                          
                            <a className="inline-flex items-center justify-center rounded-md border border-transparent
                             bg-teal-600 px-5 py-3 text-base font-medium text-white hover:bg-teal-700
                            cursor-pointer
                            "
                            href='https://drive.google.com/file/d/1IjC4w1Wydk3XWAf_Jd-JZg0JbzE46aVA/view?usp=share_link'
                         
                            >
                            Get Resume
                            </a>
                            
                    
                        </div>
                        <div className="ml-3 inline-flex rounded-md shadow ">
                            <a
                            href="#"
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
                            >
                            Learn more
                            </a>
                        </div>
                    </div>


                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 border-solid border-2 border-teal-800 rounded-full ">
                    <Image
                    className={"rounded-full object-cover"}
                    src={pro}
                    width={500}
                    height={500}
                />
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeoroSection;