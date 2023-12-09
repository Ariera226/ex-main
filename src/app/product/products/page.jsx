import React from 'react';

export default function Product() {
  const product = [
    {
      title: 'Female Hoodie Crop top with Mask',
      price: `${Math.floor(Math.random() * (100000 - 30000 + 1)) + 30000}`,
      modelSrc:
        'https://sketchfab.com/models/5ae4337c11464ccda6050085e4878cf0/embed?ui_theme=dark&dnt=1',
    },
    {
      title: 'Pencil Skirt Sleeveless Dress',
      price: `${Math.floor(Math.random() * (100000 - 30000 + 1)) + 30000}`,
      modelSrc:
        'https://sketchfab.com/models/0a035326ed6c403183a407baec543604/embed?ui_theme=dark',
    },
    {
      title: 'Female Turtle-neck one piece',
      price: `${Math.floor(Math.random() * (100000 - 30000 + 1)) + 30000}`,
      modelSrc:
        'https://sketchfab.com/models/9f471178fe004dc180fc612736182100/embed',
    },
    {
      title: 'Outer / Jumper / Down Jacket',
      price: `${Math.floor(Math.random() * (100000 - 30000 + 1)) + 30000}`,
      modelSrc:
        'https://sketchfab.com/models/de1f1663c8b346ca999247504e9cd605/embed',
    },
    {
      title: 'Armjak. 19th century.',
      price: `${Math.floor(Math.random() * (100000 - 30000 + 1)) + 30000}`,
      modelSrc:
        'https://sketchfab.com/models/c5a53cf7ffe046e0973590ed6f139da3/embed',
    },
    {
      title: 'Men Short Sleeved Solid Color Polo',
      price: `${Math.floor(Math.random() * (100000 - 30000 + 1)) + 30000}`,
      modelSrc:
        'https://sketchfab.com/models/670dad551f4243e39f116f5e5e038a5e/embed',
    },
    {
      title: 'Sage Collection: Cargo Pants',
      price: `${Math.floor(Math.random() * (100000 - 30000 + 1)) + 30000}`,
      modelSrc:
        'https://sketchfab.com/models/ba7b2a55f4f04164bc087ab87322317a/embed',
    },
    {
      title: 'Men Long Sleeved Collar Stand Polo',
      price: `${Math.floor(Math.random() * (100000 - 30000 + 1)) + 30000}`,
      modelSrc:
        'https://sketchfab.com/models/cbcff5c160854e83a689572d1e3fde83/embed',
    },
    {
      title: 'Jacket',
      price: `${Math.floor(Math.random() * (100000 - 30000 + 1)) + 30000}`,
      modelSrc:
        'https://sketchfab.com/models/b82c3b5584114a40b6d7e028f680c1d0/embed',
    },
    {
      title: 'LEATHER JACKET',
      price: `${Math.floor(Math.random() * (100000 - 30000 + 1)) + 30000}`,
      modelSrc:
        'https://sketchfab.com/models/9ae7c88201eb42cdbb072d551c89d042/embed',
    },
  ];
  return (
    <div className="product-container">
      <h2 className="product-heading text-black font-extrabold max-w-2xl mt-3 ml-4 mb-3">
        Product All-Directon View
      </h2>
      <div
        className="sketchfab-embed-wrapper"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          textAlign: 'center',
          marginBottom: '20px',
        }}
      >
        {product.map((product, index) => (
          <div
            key={index}
            style={{ textAlign: 'center', marginBottom: '20px' }}
          >
            <iframe
              title={product.title}
              frameBorder="0"
              allowFullScreen
              mozAllowFullScreen="true"
              webkitAllowFullScreen="true"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              xr-spatial-tracking
              execution-while-out-of-viewport
              execution-while-not-rendered
              web-share
              src={product.modelSrc}
            ></iframe>
            <p style={{ fontWeight: 'bold', fontSize: '16px', color: 'black' }}>
              {product.title}
            </p>
            <p style={{ color: 'gray' }}>{`₩${product.price}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
