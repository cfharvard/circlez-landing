import NavBar from "./NavBar";
import goals from "../static/dual_image.png";
const Work = () => {
    return ( 
        <div>
            <div className="bg-black min-h-screen text-white grid lg:grid-cols-4 b">
                <h1 className="text-5xl md:text-6xl text-center w-screen md:py-10 lg:col-span-4 lg:inter font-bold mt-10" >Our Work</h1>
                    <div className="col-span-2 mb-10 md:mb-20 flex justify-center" >
                        <img src={goals} alt='' className="lg:ml-44 mt-8" />
                    </div>
                    
                    <div className="md:pr-44 md:pl-44 pl-16 pr-10 md:col-span-2 lg:mt-5">
                        <div className="rounded-lg mb-10 ">
                            <p className="text-2xl pt-8 mb-2 md:inter text-left font-bold"> Academics<span className="text-blue-400">.</span> </p>
                            <p className="text-sm pr-5 md:inter text-left text-zinc-400"> We hope to boost classroom productivity and by working hand-in-hand with teachers and educators. The teacher can focus on establishing relationships with students and educating, while we focus on motivating and creating a positive goal-oriented mindset.</p>
                        </div>
                        <div className="rounded-lg mb-10 text-left"> 
                            <p className="text-2xl pt-8 mb-2 md:inter font-bold "> Athletics<span className="text-blue-400">.</span> </p>
                            <p className="text-sm pr-5 md:inter text-zinc-400"> Student-athletes, bodybuilders, gym rats: Circlez is the app for you. We have tons of features coming soon which will allow you to track workout time, challenge your friends, and break personal and group records.</p>
                        </div>
                        <div className="text-left rounded-lg mb-10">
                            <p className="text-2xl pt-8 mb-2 md:inter font-bold text-white"> Organizations<span className="text-blue-400">.</span> </p>
                            <p className="text-sm pr-5 pb-8 md:inter text-zinc-400"> We partner with organizations such as non-profits, businesses, and gyms in order to provide their customers access to goal-tracking software. This helps create a positive environment and elevates the organization's mission. </p>
                        </div>
                    </div>
            </div>
        </div>
    );
}
 
export default Work;
