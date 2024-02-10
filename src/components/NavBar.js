import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="sticky top-0 z-10 flex bg-black justify-between md:flex pb-5 pt-5 lg:pr-32 border shadow-lg">
        <h1 className="text-center text-white text-4xl ml-5 font-bold background mt-5 mb-5 rob "> Circlez </h1>
        <div className=" hidden md:block text-zinc-500 text-lg bg-black">
            <div className='mt-5 mb-5 bg-black'>
            <Link className='mr-10 bg-black inter' to="/">Home</Link>
            <Link className='mr-10 bg-black inter' to="/about">About</Link>
            <Link className='mr-10 bg-black inter' to="/work">Our Work</Link>
            <Link className='mr-10 bg-black inter' to="/team">Team</Link>
            <Link className='mr-10 bg-black inter' to="/contact">Contact</Link>
            <Link className='mr-10 bg-black inter' to="/board">Board</Link>
            <Link className='mr-10 bg-black inter' to="/blog">Blog</Link>
            {/* <Link className='bg-black geo p-4 border-white border-2 rounded-3xl' to="/login">Waitlist</Link> */}
            </div>

        </div>
        <div className="block md:hidden text-center mt-3 mb-3">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/work">Our Work</Link>
            <Link to="/team">Team</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/blog">Blog</Link>
        </div>
    </div>
     );
}
 
export default NavBar;