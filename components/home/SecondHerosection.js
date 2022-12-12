import Image from "next/image";
import coding from "../../public/assets/images/coding.jpg";


const SecondHerosection = () => {
    return (
        <div>
            <div className="bg-slate-800">
                <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
                   


                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 border-solid border-2 border-teal-800 rounded-full ">
                    <Image
                    className={"rounded-full object-cover"}
                    src={coding}
                    width={450}
                    height={450}
                    />
                        
                    </div>

                    <div className="mx-12">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        <span className="block py-3 text-teal-500 text-4xl">About Myself</span>
                        </h2>
                        <span className="text-white text-lg">
                        <p>Hi! I’m Habibor Rahaman (Habib). I’m extremely passionate about anything related to technology. Also deeply interested in design and visual art. My objective will be a good full-stack developer, I every day working hard every moment since to turn that passion into reality.</p>
                        </span> <br/>

                        <span className="text-white text-lg">
                        <p>Hi! I’m Habibor Rahaman (Habib). I’m extremely passionate about anything related to technology. Also deeply interested in design and visual art. My objective will be a good full-stack developer, I every day working hard every moment since to turn that passion into reality.
                        Skills: Skills: HTML | CSS | Bootstrap | Tailwind CSS | React Bootstrap | Material UI | React.js | React Native | JavaScript | TypeScript | Python | PHP | C | C++ | Node.js | Express.js | Next.js | Django | Fast API | Laravel | MongoDB | SQL lite | MySQL | PostgreSQL | GraphQL |
                        </p>
                        </span>



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
                


                </div>
            </div>
        </div>
    );
}

export default SecondHerosection;