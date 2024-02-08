import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const ContactHero = () => (
    
    <>
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} min-h-[100vh]`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Ilk</span> Ay Üçün {" "}
            <span className="text-white">50%</span> Endirim
          </p>
        </div>


        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Elə Indi <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Bizimlə</span>{" "}
          </h1>
          {/* <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div> */}
          
        </div>


        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Əlaqə Saxla.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Mütəxəssislərdən ibarət komandamız ehtiyaclarınıza ən uyğun olan 
        təhsil metodunu müəyyən etmək üçün ən yaxşı metodologiyadan istifadə edir. 
        </p>
      </div>
      
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        {/* <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" /> */}
        <iframe className="z-[2]" src="https://docs.google.com/forms/d/e/1FAIpQLSfQRzejL0gOHy43dKIZc7LsuVP8rtZTSb-vmYzSy2N5VGuC_Q/viewform?embedded=true" 
          width="640" height="686" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      {/* <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div> */}
    </section>
    </>
  );

export default ContactHero;
