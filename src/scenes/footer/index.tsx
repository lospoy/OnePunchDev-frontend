import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            voluptates error doloribus incidunt hic recusandae id ex possimus,
            rem, laudantium neque fugit.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">En nomine Patri, Fili, et fitipaldus</p>
          <p>Billirubinas espectus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Massa orci senectus tonteridas ad infinitum</p>
          <p>(333)421-4829</p>
        </div>
        <div className=""></div>
      </div>
    </footer>
  );
};
export default Footer;
