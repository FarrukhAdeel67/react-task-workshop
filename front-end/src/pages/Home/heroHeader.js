import pic1 from "../../background.jpeg";
const HeroHeader = () => {
    return (
        <div className="text-head">
            <div
                id="carouselExampleControls"
                class="carousel slide"
                data-ride="carousel"
            >
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={pic1} alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="..." alt="Second slide" />
                    </div>
                </div>
            </div>
            <div className="text-on-image">
                <h5> SUMMER COLLECTION </h5>
                <h1> Fall - Winter Collections 2023 </h1>
                <h5>
                    A specialist label creating luxury essentials.Ethically crafted with
                    an unwavering commitment to exceptional quality.{" "}
                </h5>
            </div>
        </div>
    );
};

export default HeroHeader;
