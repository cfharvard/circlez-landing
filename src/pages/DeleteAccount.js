import { Typography } from "@mui/material";
import HomeDelete from "../static/home_delete.jpeg"
import ProfileDelete from "../static/profile_delete.jpg"
import PreDelete from "../static/pre_delete.jpg"
import ConfirmDelete from "../static/confirm_delete.jpg"


export const DeleteAccount = () => {
    return (
        <div className="min-h-screen bg-black m-0">
            <div className="p-20 h-3/4" >
                <p className="text-white text-7xl font-bold">Account Deletion</p>
                <p className="text-white text-2xl m-4 ml-0">We are sorry to see you go! To delete your account, please follow the instructions below.</p>
                <div className="flex flex-row overflow-wrap max-h-96 space-x-3.5">
                <div className="flex flex-col items-center">
                        <p className="text-white text-xl mb-4">Step 1: In your homepage, click the profile icon in the top right corner of your screen.</p>
                        <img src={HomeDelete} alt="Home Page" className=" h-full w-1/2"/>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-white text-xl mb-4">Step 2: Once you see your profile, navigate to the "Edit Profile"</p>
                    <img src={ProfileDelete} alt="Home Page" className=" h-full w-1/2"/>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-white text-xl mb-4">Step 3: To delete your account, press the "Delete Account" button.</p>
                    <img src={PreDelete} alt="Home Page" className=" h-full w-1/2"/>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-white text-xl mb-4">Step 4: To confirm your account deletion, press "Confirm" in the pop up.</p>
                    <img src={ConfirmDelete} alt="Home Page" className=" h-full w-1/2"/>
                </div>
                </div>
            </div>
        </div>
    );
}
export default DeleteAccount;