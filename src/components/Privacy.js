import NavBar from "./NavBar";
import PrivacyPolicy from "./../static/Privacy_Policy_Circlez.pdf";

const Privacy = () => {
    return (
        <div>
            <div className="bg-black min-h-screen flex justify-center">
                <div>
                    <p>
                        If you are unable to view the PDF file, please click the link below to download the file.
                    </p>
                    <a href={PrivacyPolicy} download>Download Privacy Policy</a>
                </div>
            <object data={PrivacyPolicy} type="application/pdf" className="w-10/12 h-5/6">
                    <p>It appears you don't have a PDF plugin for this browser.
                    You can <a href={PrivacyPolicy}>click here to
                    download the PDF file.</a></p>
                </object>
            </div>
        </div>

    );
}

export default Privacy;