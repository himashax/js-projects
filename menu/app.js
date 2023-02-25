const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./menu-item.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./menu-item.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./menu-item.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./menu-item.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./menu-item.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./menu-item.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./menu-item.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./menu-item.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./menu-item.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "ramen",
        category: "dinner",
        price: 13.00,
        img: "./menu-item.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      },
  ];

const sectionCenter = document.querySelector('.section-center');
// move filter buttons cause we have to wait till the dom loads
// when something is added dynamically, can only access after it loads to the DOM
// const filterBtns = document.querySelectorAll('.filter-btn');
const btnContainer = document.querySelector('.btn-container')

// get only unique categories
// return buttons with cats
// select buttons when they are only available

// load to section when the DOM loads 
window.addEventListener("DOMContentLoaded", function(){
    displayMenuItems(menu);
    displayMenuButtons();

});

function displayMenuButtons() {
  const categories = menu.reduce(function(values, item) {
    if (!values.includes(item.category)) {
        values.push(item.category);
    }
    return values;
  }, ['all']);

  const btns = categories.map(function(category){
    return `<button class="filter-btn" type="button" data-orange=${category}>${category}</button>`
  }).join("");

  btnContainer.innerHTML = btns;
  const filterBtns = document.querySelectorAll('.filter-btn');
  // filter items
  filterBtns.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
          // can add attribute with data prefix
          // console.log(e.currentTarget.dataset.orange)
          const category = e.currentTarget.dataset.orange;
          const menuCategory = menu.filter(function(menuItem) {
              // console.log(menuItem.category)
              if (menuItem.category === category) {
                  return menuItem;
              }
          });

          if (category === 'all') {
              displayMenuItems(menu);
          } else {
              displayMenuItems(menuCategory);
          }

      })
  })
}

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item){
        // console.log(item)
        return `<article class="menu-item">
                    <img src=${item.img} class="photo" alt="menu item">
                    <div class="item-info">
                        <header>
                            <h4>${item.title}</h4>
                            <h4 class="price">${item.price}</h4>
                        </header>
                        <p class="item-text">${item.desc}</p>
                    </div>
                </article>`
    })
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}

