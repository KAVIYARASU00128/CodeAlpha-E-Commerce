const express = require('express');
const router = express.Router();

const products = [
  // Electronics category (Wireless Earbuds, Smartwatch, etc.)
  { id: 1, category: 'Electronics', name: 'Wireless Earbuds', price: 2999, image: '/images/wireless-earbuds.jpg' },
  { id: 2, category: 'Electronics', name: 'Smartwatch', price: 4999, image: '/images/smartwatch.jpg' },
  { id: 3, category: 'Electronics', name: 'Bluetooth Speaker', price: 3499, image: '/images/bluetooth-speaker.jpg' },
  { id: 4, category: 'Electronics', name: 'Laptop Backpack', price: 1999, image: '/images/laptop-backpack.jpg' },
  { id: 5, category: 'Electronics', name: 'Power Bank', price: 1299, image: '/images/power-bank.jpg' },
  { id: 6, category: 'Electronics', name: 'Portable Hard Drive', price: 3999, image: '/images/portable-hard-drive.jpg' },
  { id: 7, category: 'Electronics', name: 'Smartphone Stand', price: 499, image: '/images/smartphone-stand.jpg' },
  { id: 8, category: 'Electronics', name: 'Ring Light', price: 2499, image: '/images/ring-light.jpg' },
  { id: 9, category: 'Electronics', name: 'Fitness Tracker', price: 3499, image: '/images/fitness-tracker.jpg' },
  { id: 10, category: 'Electronics', name: 'Noise-Canceling Headphones', price: 8999, image: '/images/noise-canceling-headphones.jpg' },
  { id: 11, category: 'Electronics', name: 'Wireless Keyboard', price: 2199, image: '/images/wireless-keyboard.jpg' },
  { id: 12, category: 'Electronics', name: 'Wireless Mouse', price: 999, image: '/images/wireless-mouse.jpg' },
  { id: 13, category: 'Electronics', name: 'Laptop Cooling Pad', price: 799, image: '/images/laptop-cooling-pad.jpg' },
  { id: 14, category: 'Electronics', name: 'Phone Case', price: 399, image: '/images/phone-case.jpg' },
  { id: 15, category: 'Electronics', name: 'Screen Protector', price: 299, image: '/images/screen-protector.jpg' },
  { id: 16, category: 'Electronics', name: 'USB Flash Drive', price: 599, image: '/images/usb-flash-drive.jpg' },

  // Home & Fitness category (Gaming Chair, Dumbbell Set, etc.)
  { id: 17, category: 'Home & Fitness', name: 'Gaming Chair', price: 7999, image: '/images/gaming-chair.jpg' },
  { id: 18, category: 'Home & Fitness', name: 'Mechanical Keyboard', price: 4999, image: '/images/mechanical-keyboard.jpg' },
  { id: 19, category: 'Home & Fitness', name: 'LED Desk Lamp', price: 1499, image: '/images/led-desk-lamp.jpg' },
  { id: 20, category: 'Home & Fitness', name: 'Portable Projector', price: 15999, image: '/images/portable-projector.jpg' },
  { id: 21, category: 'Home & Fitness', name: 'Action Camera', price: 8999, image: '/images/action-camera.jpg' },
  { id: 22, category: 'Home & Fitness', name: 'Tripod Stand', price: 2499, image: '/images/tripod-stand.jpg' },
  { id: 23, category: 'Home & Fitness', name: 'Smart Home Bulb', price: 799, image: '/images/smart-home-bulb.jpg' },
  { id: 24, category: 'Home & Fitness', name: 'VR Headset', price: 19999, image: '/images/vr-headset.jpg' },
  { id: 25, category: 'Home & Fitness', name: 'Air Purifier', price: 13999, image: '/images/air-purifier.jpg' },
  { id: 26, category: 'Home & Fitness', name: 'Coffee Maker', price: 4999, image: '/images/coffee-maker.jpg' },
  { id: 27, category: 'Home & Fitness', name: 'Electric Kettle', price: 2199, image: '/images/electric-kettle.jpg' },
  { id: 28, category: 'Home & Fitness', name: 'Water Bottle (Smart)', price: 1999, image: '/images/water-bottle.jpg' },
  { id: 29, category: 'Home & Fitness', name: 'Yoga Mat', price: 1299, image: '/images/yoga-mat.jpg' },
  { id: 30, category: 'Home & Fitness', name: 'Dumbbell Set', price: 2999, image: '/images/dumbbell-set.jpg' },
  { id: 31, category: 'Home & Fitness', name: 'Resistance Bands', price: 599, image: '/images/resistance-bands.jpg' },
  { id: 32, category: 'Home & Fitness', name: 'Foldable Treadmill', price: 29999, image: '/images/foldable-treadmill.jpg' },

  // Accessories & Others (Camping Tent, DSLR Camera, Shoe Rack etc.)
  { id: 33, category: 'Accessories', name: 'Camping Tent', price: 5299, image: '/images/camping-tent.jpg' },
  { id: 34, category: 'Accessories', name: 'Sleeping Bag', price: 1999, image: '/images/sleeping-bag.jpg' },
  { id: 35, category: 'Accessories', name: 'Hiking Backpack', price: 3999, image: '/images/hiking-backpack.jpg' },
  { id: 36, category: 'Accessories', name: 'Drone with Camera', price: 34999, image: '/images/drone.jpg' },
  { id: 37, category: 'Accessories', name: 'DSLR Camera', price: 45999, image: '/images/dslr-camera.jpg' },
  { id: 38, category: 'Accessories', name: 'Camera Lens Kit', price: 15999, image: '/images/camera-lens-kit.jpg' },
  { id: 39, category: 'Accessories', name: 'Wireless Printer', price: 6999, image: '/images/wireless-printer.jpg' },
  { id: 40, category: 'Accessories', name: 'Office Desk Organizer', price: 999, image: '/images/desk-organizer.jpg' },
  { id: 41, category: 'Accessories', name: 'Study Table', price: 6999, image: '/images/study-table.jpg' },
  { id: 42, category: 'Accessories', name: 'Ergonomic Chair', price: 8999, image: '/images/ergonomic-chair.jpg' },
  { id: 43, category: 'Accessories', name: 'Wall Clock', price: 399, image: '/images/wall-clock.jpg' },
  { id: 44, category: 'Accessories', name: 'Bedside Lamp', price: 1599, image: '/images/bedside-lamp.jpg' },
  { id: 45, category: 'Accessories', name: 'Bedsheet Set', price: 2499, image: '/images/bedsheet-set.jpg' },
  { id: 46, category: 'Accessories', name: 'Kitchen Knife Set', price: 3599, image: '/images/kitchen-knife-set.jpg' },
  { id: 47, category: 'Accessories', name: 'Non-stick Cookware Set', price: 4999, image: '/images/cookware-set.jpg' },
  { id: 48, category: 'Accessories', name: 'Vacuum Cleaner', price: 6499, image: '/images/vacuum-cleaner.jpg' },
  { id: 49, category: 'Accessories', name: 'Washing Machine Cover', price: 1999, image: '/images/washing-machine-cover.jpg' },
  { id: 50, category: 'Accessories', name: 'Shoe Rack', price: 1799, image: '/images/shoe-rack.jpg' }, // <-- fixed comma here

  { id: 51, category: 'Clothes', name: 'T-Shirt', price: 599, image: '/images/tshirt1.jpg' },
  { id: 52, category: 'Clothes', name: 'Polo Shirt', price: 899, image: '/images/polo-shirt.jpg' },
  { id: 53, category: 'Clothes', name: 'Formal Shirt', price: 1299, image: '/images/formal-shirt.jpg' },
  { id: 54, category: 'Clothes', name: 'Hoodie', price: 1799, image: '/images/hoodie.jpg' },
  { id: 55, category: 'Clothes', name: 'Sweatshirt', price: 1599, image: '/images/sweatshirt.jpg' },
  { id: 56, category: 'Clothes', name: 'Jacket', price: 2999, image: '/images/jacket.jpg' },
  { id: 57, category: 'Clothes', name: 'Blazer', price: 3999, image: '/images/blazer.jpg' },
  { id: 58, category: 'Clothes', name: 'Jeans', price: 1299, image: '/images/jeans.jpg' },
  { id: 59, category: 'Clothes', name: 'Chinos', price: 1399, image: '/images/chinos.jpg' },
  { id: 60, category: 'Clothes', name: 'Cargo Pants', price: 1499, image: '/images/cargo-pants.jpg' },
  { id: 61, category: 'Clothes', name: 'Shorts', price: 799, image: '/images/shorts.jpg' },
  { id: 62, category: 'Clothes', name: 'Track Pants', price: 999, image: '/images/track-pants.jpg' },
  { id: 63, category: 'Clothes', name: 'Kurta', price: 1199, image: '/images/kurta.jpg' },
  { id: 64, category: 'Clothes', name: 'Saree', price: 2999, image: '/images/saree.jpg' },
  { id: 65, category: 'Clothes', name: 'Lehenga', price: 4999, image: '/images/lehenga.jpg' },
  { id: 66, category: 'Clothes', name: 'Skirt', price: 799, image: '/images/skirt.jpg' },
  { id: 67, category: 'Clothes', name: 'Maxi Dress', price: 1599, image: '/images/maxi-dress.jpg' },
  { id: 68, category: 'Clothes', name: 'Midi Dress', price: 1399, image: '/images/midi-dress.jpg' },
  { id: 69, category: 'Clothes', name: 'Jumpsuit', price: 1799, image: '/images/jumpsuit.jpg' },
  { id: 70, category: 'Clothes', name: 'Formal Suit', price: 4999, image: '/images/formal-suit.jpg' },

  // Food category addition
  { id: 71, category: 'Food', name: 'Basmati Rice', price: 1599, image: '/images/basmati-rice.jpg' },
  { id: 72, category: 'Food', name: 'Wheat Flour (Atta)', price: 299, image: '/images/wheat-flour.jpg' },
  { id: 73, category: 'Food', name: 'Cooking Oil (Sunflower)', price: 499, image: '/images/sunflower-oil.jpg' },
  { id: 74, category: 'Food', name: 'Mustard Oil', price: 479, image: '/images/mustard-oil.jpg' },
  { id: 75, category: 'Food', name: 'Ghee', price: 699, image: '/images/ghee.jpg' },
  { id: 76, category: 'Food', name: 'White Sugar', price: 299, image: '/images/white-sugar.jpg' },
  { id: 77, category: 'Food', name: 'Brown Sugar', price: 349, image: '/images/brown-sugar.jpg' },
  { id: 78, category: 'Food', name: 'Tea Powder', price: 399, image: '/images/tea-powder.jpg' },
  { id: 79, category: 'Food', name: 'Coffee Powder', price: 429, image: '/images/coffee-powder.jpg' },
  { id: 80, category: 'Food', name: 'Instant Noodles', price: 59, image: '/images/instant-noodles.jpg' },
  { id: 81, category: 'Food', name: 'Pasta', price: 109, image: '/images/pasta.jpg' },
  { id: 82, category: 'Food', name: 'Breakfast Cereal', price: 199, image: '/images/breakfast-cereal.jpg' },
  { id: 83, category: 'Food', name: 'Biscuits', price: 129, image: '/images/biscuits.jpg' },
  { id: 84, category: 'Food', name: 'Chips (Potato Wafers)', price: 79, image: '/images/potato-chips.jpg' },
  { id: 85, category: 'Food', name: 'Pickles', price: 229, image: '/images/pickles.jpg' },
  { id: 86, category: 'Food', name: 'Jam', price: 219, image: '/images/jam.jpg' },
  { id: 87, category: 'Food', name: 'Honey', price: 449, image: '/images/honey.jpg' },
  { id: 88, category: 'Food', name: 'Dry Fruits (Almonds)', price: 799, image: '/images/almonds.jpg' },
  { id: 89, category: 'Food', name: 'Cashews', price: 999, image: '/images/cashews.jpg' },
  { id: 90, category: 'Food', name: 'Spices (Turmeric Powder)', price: 179, image: '/images/turmeric-powder.jpg' }
];

let cart = [];

router.get('/', (req, res) => {
  const categoryFilter = req.query.category;

  let filteredProducts = products;
  if (categoryFilter) {
    filteredProducts = products.filter(p => p.category === categoryFilter);
  }
  res.render('index', { products: filteredProducts, categoryFilter, categories: ['Food', 'Clothes', 'Accessories', 'Electronics', 'Home & Fitness'] });
});

router.get('/login', (req, res) => {
  res.render('login', { error: null, success: null });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'user' && password === 'pass') {
    res.render('login', { error: null, success: 'Logged in successfully!' });
  } else {
    res.render('login', { error: 'Invalid username or password', success: null });
  }
});

router.post('/add-to-cart/:id', (req, res) => {
  const productId = Number(req.params.id);
  const product = products.find(p => p.id === productId);
  if (product) {
    const cartItem = cart.find(c => c.id === productId);
    if (cartItem) {
      cartItem.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    res.redirect('/?added=' + encodeURIComponent(product.name));
  } else {
    res.redirect('/');
  }
});

router.get('/cart', (req, res) => {
  res.render('cart', { cart });
});

module.exports = router;
