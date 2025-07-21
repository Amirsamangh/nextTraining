import WavyBackground from "@/components/layout/WavyBackground";
import Link from "next/link";

export default function Home() {
  return (
    <section className="hero d-flex justify-content-center align-items-center h-100" id="section_1">
      <div className="container">
        <div className="row">

          <div className="col-lg-7 col-12">
            <div className="hero-text">
              <div className="hero-title-wrap d-flex align-items-center mb-4">
                <img src="/assets/images/me3.png" className="avatar-image avatar-image-large img-fluid" alt="" />

                <h1 className="hero-title ms-3 mb-0">سلام!</h1>
              </div>

              <h2 className="mb-4 dir_rtl text_3xl">من، امیرسامان، یه برنامه نویس فرانت اند هستم. به وبسایت من خوش اومدی</h2>
              <p className="mb-4"><Link className=" btn main_btn " href="/about">ادامه</Link></p>
            </div>
          </div>

          <div className="col-lg-5 col-12 position-relative">
            <div className="hero-image-wrap  position-static">
              <img src="/assets/images/logos/sass.png" className=" img-fluid hero_logo_1" alt="" />
              <img src="/assets/images/logos/github.png" className=" img-fluid hero_logo_2" alt="" />
              <img src="/assets/images/logos/next.png" className=" img-fluid hero_logo_3" alt="" />
            </div>
          </div>

        </div>
      </div>

    <WavyBackground />

    </section>
  )
}