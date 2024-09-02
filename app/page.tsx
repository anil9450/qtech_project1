import Image from "next/image";
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="mt-8">
        <div className="flex bg-yellow-700 p-12">
          <div className="w-96 mt-4">
            <h1 className="text-2xl font-bold">
              An inspiring desing delivered to your inbox every morning
            </h1>
            <span className="text-xs mt-8">
              Our team scouts the internets for the best design, illustrations
              and arts and delivers a trully inspiring one every day to your
              inbox
            </span>
            <h1 className="mt-8">Show me how it looks</h1>
            <div className="flex mt-8">
              <input
                type="text"
                className="rounded border-2 border-black p-0 h-10"
                placeholder="Your e-mail address"
              />
              <div className="pl-2">
                <button
                  type="button"
                  className="text-white bg-gray-800 font-medium rounded text-sm px-5 py-2.5 me-2 mb-2"
                >
                  Register Now
                </button>
              </div>
            </div>
            <span className="text-white text-xs ml-8">
              Free - No Spam - No Data Sharing
            </span>
          </div>
          <div className="ml-32">
            <img src="./sketch_img.jpg" className="h-72" />
          </div>
        </div>
        <div>
          <div className="flex justify-between bg-black text-white p-12 text-sm">
            <div className="p-4">
              <p>Prompt Generator</p>
              <p>Dweep Daily</p>
              <p>All Contributors</p>
              <p>Your Data on Dweep.io</p>
              <p>Contribute to Dweep</p>
            </div>

            <div className="p-4 text-end">
              <p>Dweep.io</p>
              <p>Made with love in india</p>
              <p className="flex text-lg text-yellow-700 ml-32">
                <CiLinkedin />
                <CiInstagram />
              </p>
              <br />
              <p>hello@dweep.io</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
