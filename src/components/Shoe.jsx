const ShoesSection = () => {
return (
<main className="shoes container">
<div className="shoes-content">
<h1>YOUR FEET DESERVE THE BEST</h1>
<p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

<div className="shoes-btn">
    <button>SHOP NOW</button>
    <button className="category">Category</button>    
    </div>
<div className="shopping">
    <p>Also Available On</p>
    <div className="brand-icon">
        <img src="/images/flipkart.png" alt="flipkart" />
        <img src="/images/amazon.png" alt="amazon" />
    </div>
</div>
</div>
<div className="shoes-img">
    <img src="/images/shoe_image.png" alt="shoes" />
</div>
</main>
);
};

export default ShoesSection;