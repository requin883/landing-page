export const Header = () => {

  return (
    <header className="bg-[#F5F7FA] fixed top-0 left-0 right-0 w-full z-10">
      <nav className="flex justify-between items-center px-[144px] py-4">
        <div className="logo flex items-center space-x-2">
          <img src="./public/main_logo_white.png" alt="Logo" />
          <p className="font-bold text-[1.5em]">Nextcent</p>
        </div>
        <ul className="flex space-x-8">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#feature">Feature</a></li>
          <li><a href="#product">Product</a></li>
          <li><a href="#testimonial">Testimonial</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <div>
          <button className="py-3 px-8 text-primary rounded-sm">Login</button>
          <button className="py-3 px-8 bg-primary text-white rounded-sm">Sign up</button>
        </div>
      </nav>
    </header>
  );
}