import Footer from "../components/Footer";
import Header from "../componenets/Header";

function Search() {
    return (
        <div >
            <Header />
            <main className = "flex">
                <section>
                    <p className = "text-xs">300+ trips for 5 number of guests</p>
                    <h1 className ="test-3xl font-semibold mt-2 mb-6"> Trips to Kheerganga</h1>
                
                    <div className="hidden lg:inline-flex mb-5 space-x-3
                    text-gray-800 whitespace-nowrap">
                            <p className="button">Cancellation Flexibility</p>
                            <p className="button">Type of Trip</p>
                            <p className="button">Price</p>
                            <p className="button">Accomodation Type</p>
                            <p className="button">More filters</p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}