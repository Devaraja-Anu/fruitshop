import CardScroll from './components/Cards'
import Navbar from './components/Navbar'
import Footers from './components/Footers';
import ScrollToTop from './components/ScrollToTop';



const Products = () => {


  return (
    <div className="min-h-screen ">
      <div>
        <Navbar />
        <div>
          <div className="h-auto pt-10 px-16 md:px-24 lg:px-16 grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            <CardScroll />
          </div>
        </div>
      </div>
      <div className='mt-10'>
        <ScrollToTop/>
        <Footers />
      </div>
    </div>
  );
}

export default Products

