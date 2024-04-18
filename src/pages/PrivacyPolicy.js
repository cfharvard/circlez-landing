import PrivacyPolicyPDF from '../static/Privacy_Policy_Circlez.pdf'

export const PrivacyPolicy = () => {
    return (
        <div className="bg-black pr-10 pl-10 pt-4" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
            <p className="text-white">
                If you are unable to view the PDF file, please click the link below to download the file.
            </p>
            <a href={PrivacyPolicyPDF} download className="text-blue-300" style={{ textDecoration: 'none', marginBottom: '20px'}}>Download Privacy Policy</a>
            <object data={PrivacyPolicyPDF} type="application/pdf" style={{height: '80%', width: '80%'}}>
                <p>It appears you don't have a PDF plugin for this browser.
                You can <a href={PrivacyPolicyPDF}>click here to
                download the PDF file.</a></p>
            </object>
        </div>
    );
}
export default PrivacyPolicy;