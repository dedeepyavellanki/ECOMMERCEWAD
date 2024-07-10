import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const products = [
  { id: 1, name: 'OnePeice', description: 'ZORO', price: 100, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFPtqzyPG1OBVrmAZbBlTshdNrx3c2ienJAQ&s' },
  { id: 2, name: 'DemonSlayer', description: 'NEZUKO', price: 100, imageUrl: 'https://imgix.ranker.com/list_img_v2/2225/1002225/original/1002225-u3?fit=crop&fm=pjpg&q=80&dpr=2&w=1200&h=720' },
  { id: 3, name: 'JujutsuKasaine', description: 'SATORU GOJO', price: 100, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUFcnU5Sdb3t_YU9JRG_NPbHpsI2thWGxmKA&s' },
  { id: 4, name: 'NarutoShippuden', description: 'KAKASHI HATAKE', price: 100, imageUrl: 'https://c4.wallpaperflare.com/wallpaper/41/353/240/naruto-shippuuden-anime-manga-hatake-kakashi-wallpaper-thumb.jpg' },
  { id: 5, name: 'NarutoShippuden', description: 'NARUTO UZUMAKI', price: 100, imageUrl: 'https://i.pinimg.com/564x/b9/97/c2/b997c2335234cdd7ef61d36e8bf8bbdf.jpg' },
  { id: 6, name: 'OnePeice', description: 'MONKEY-D-LUFFY', price: 100, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5uo7bYziF0YLUO6i0VgYw7_tRNNHXBAaKMigO_cF5XPWveWLMk7sgzGHqkmBUhiQ09Xs&usqp=CAU' }
];

const Catalogue = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <main className="container mt-5">
      <h1 className="text-center mb-4">Catalogue</h1>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={product.imageUrl} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">${product.price}</p>
                <button className="btn btn-purple" style={{backgroundColor:'#7E57C2'}} onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Catalogue;
