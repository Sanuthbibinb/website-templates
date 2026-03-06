import { Helmet } from "react-helmet";

const Metahelmet = () => {
    return (
       <Helmet>
         <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CafeOrCoffeeShop",
            name: "Zamindar Cafe",
            image: "https://zamindarcafe.vercel.app/cafeimg1.webp",
            address: {
              "@type": "PostalAddress",
              streetAddress: "13th Main Road",
              addressLocality: "Honnasandra",
              addressRegion: "Karnataka",
              addressCountry: "India"
            },
            servesCuisine: "Tea, Coffee, Snacks",
            priceRange: "₹30 - ₹200",
            telephone: "+919676728598",
            url: "https://zamindarcafe.vercel.app/",
            openingHours: "Mo-Su 6:00-22:00"
          })}
        </script>
<title>Zamindar Cafe | Best Tea & Coffee Cafe in Honnasandra, Bengaluru</title>

<meta 
name="description" 
content="Zamindar Cafe is a cozy tea and coffee cafe in Honnasandra, Bengaluru serving signature teas, bubble shakes, mocktails and quick bites. Visit us for the best cafe experience." 
/>

<meta 
name="keywords" 
content="Zamindar Cafe, cafe in Honnasandra, tea cafe Bengaluru, best cafe near Honnasandra, coffee shop Bengaluru, bubble tea cafe Bangalore, Zamindar cafe menu"
/>

<meta name="author" content="Zamindar Cafe" />

<meta property="og:title" content="Zamindar Cafe | Tea, Coffee & Quick Bites in Bengaluru" />

<meta property="og:description" content="Experience signature teas, coffee, shakes and quick bites at Zamindar Cafe in Honnasandra Bengaluru." />

<meta property="og:type" content="website" />

<meta property="og:image" content="/cafeimg1.webp" />

<meta property="og:location" content="Honnasandra, Bengaluru, Karnataka" />

<meta name="robots" content="index, follow" />

<link rel="canonical" href="https://zamindarcafe.vercel.app/" />

</Helmet>
    );
};


export default Metahelmet;