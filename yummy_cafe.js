const menuData = {
    "french-fries": [
      { id: "ff1", name: "Salted Fries", price: 40, emoji: "🍟" },
      { id: "ff2", name: "Masala Fries", price: 50, emoji: "🍟" },
      { id: "ff3", name: "Peri Peri Fries", price: 50, emoji: "🍟" },
      { id: "ff4", name: "Mix Masala Fries", price: 50, emoji: "🍟" },
      { id: "ff5", name: "Hot-n-Spicy Fries", price: 60, emoji: "🍟" },
      { id: "ff6", name: "Cheese Fries", price: 60, emoji: "🍟" },
      { id: "ff7", name: "Loaded Fries", price: 70, emoji: "🍟" }
    ],
    "momos": [
      { id: "mm1", name: "Steam Momos (Half)", price: 40, emoji: "🥟" },
      { id: "mm2", name: "Steam Momos (Full)", price: 70, emoji: "🥟" },
      { id: "mm3", name: "Fry Momos (Half)", price: 40, emoji: "🥟" },
      { id: "mm4", name: "Fry Momos (Full)", price: 70, emoji: "🥟" },
      { id: "mm5", name: "Kurkure Momos (Full)", price: 70, emoji: "🥟" },
      { id: "mm6", name: "Baked Cheese Momos (Full)", price: 80, emoji: "🥟" },
      { id: "mm7", name: "Momos Platter (Full)", price: 99, emoji: "🥟" }
    ],
    "pasta": [
      { id: "ps1", name: "White Sauce With Cheese", price: 80, emoji: "🍝" },
      { id: "ps2", name: "Red Sauce With Cheese", price: 80, emoji: "🍝" },
      { id: "ps3", name: "Mix Sauce Pasta", price: 80, emoji: "🍝" },
      { id: "ps4", name: "Mix Sauce Pasta With Cheese", price: 90, emoji: "🍝" }
    ],
    "sweet-corn": [
      { id: "sc1", name: "Butter Masala Corn", price: 40, emoji: "🌽" },
      { id: "sc2", name: "Cheese Masala Corn", price: 50, emoji: "🌽" },
      { id: "sc3", name: "Schezwan Masala Corn", price: 50, emoji: "🌽" }
    ],
    "maggie": [
      { id: "mg1", name: "Plain Cheese Maggie", price: 40, emoji: "🍜" },
      { id: "mg2", name: "Veg Maggie", price: 50, emoji: "🍜" },
      { id: "mg3", name: "Veg Cheese Maggie", price: 60, emoji: "🍜" },
      { id: "mg4", name: "Veg Paneer Maggie", price: 70, emoji: "🍜" },
      { id: "mg5", name: "Veg Paneer Cheese Maggie", price: 80, emoji: "🍜" },
      { id: "mg6", name: "Schezwan Cheese Maggie", price: 60, emoji: "🍜" },
      { id: "mg7", name: "Veg Hot-n-Cheese Maggie", price: 70, emoji: "🍜" },
      { id: "mg8", name: "Corn Maggie", price: 50, emoji: "🍜" },
      { id: "mg9", name: "Corn Cheese Maggie", price: 60, emoji: "🍜" }
    ],
    "pizza": [
      { id: "pz1", name: "Veg Cheese Pizza", price: 90, emoji: "🍕" },
      { id: "pz2", name: "Corn Cheese Pizza", price: 100, emoji: "🍕" },
      { id: "pz3", name: "Paneer Cheese Pizza", price: 110, emoji: "🍕" },
      { id: "pz4", name: "Tandoori Paneer Pizza", price: 120, emoji: "🍕" },
      { id: "pz5", name: "Paneer Kullad Pizza (Special)", price: 89, emoji: "🍕" }
    ],
    "potato-twister": [
      { id: "pt1", name: "Masala Potato Twister", price: 50, emoji: "🥔" },
      { id: "pt2", name: "Masala Cheese Twister", price: 70, emoji: "🥔" },
      { id: "pt3", name: "Cheese Potato Twister", price: 80, emoji: "🥔" }
    ],
    "sandwich": [
      { id: "sw1", name: "Corn Mayo Sandwich", price: 60, emoji: "🥪" },
      { id: "sw2", name: "Corn Mayo Cheese Sandwich", price: 70, emoji: "🥪" },
      { id: "sw3", name: "Corn Sandwich", price: 60, emoji: "🥪" },
      { id: "sw4", name: "Corn Cheese Sandwich", price: 70, emoji: "🥪" },
      { id: "sw5", name: "Veg Grill Sandwich", price: 60, emoji: "🥪" },
      { id: "sw6", name: "Veg Grill Cheese Sandwich", price: 70, emoji: "🥪" },
      { id: "sw7", name: "Paneer Sandwich", price: 70, emoji: "🥪" },
      { id: "sw8", name: "Paneer Cheese Sandwich", price: 80, emoji: "🥪" },
      { id: "sw9", name: "Double Layered Cheese Sandwich", price: 90, emoji: "🥪" },
      { id: "sw10", name: "Triple Layered Cheese Sandwich", price: 110, emoji: "🥪" }
    ],
    "burger": [
      { id: "bg1", name: "Veg Burger", price: 60, emoji: "🍔" },
      { id: "bg2", name: "Veg Cheese Burger", price: 70, emoji: "🍔" },
      { id: "bg3", name: "Veg Paneer Burger", price: 70, emoji: "🍔" },
      { id: "bg4", name: "Veg Paneer Cheese Burger", price: 80, emoji: "🍔" }
    ],
    "chinese": [
      { id: "ch1", name: "Manchurian Noodles (Half)", price: 50, emoji: "🥡" },
      { id: "ch2", name: "Manchurian Noodles (Full)", price: 70, emoji: "🥡" },
      { id: "ch3", name: "Manchurian Rice (Half)", price: 50, emoji: "🥡" },
      { id: "ch4", name: "Manchurian Rice (Full)", price: 70, emoji: "🥡" }
    ],
    "noodles": [
      { id: "nd1", name: "Noodles (Half)", price: 30, emoji: "🍜" },
      { id: "nd2", name: "Noodles (Full)", price: 50, emoji: "🍜" },
      { id: "nd3", name: "Paneer Noodles (Half)", price: 50, emoji: "🍜" },
      { id: "nd4", name: "Paneer Noodles (Full)", price: 70, emoji: "🍜" },
      { id: "nd5", name: "Schezwan Noodles (Half)", price: 40, emoji: "🍜" },
      { id: "nd6", name: "Schezwan Noodles (Full)", price: 60, emoji: "🍜" }
    ],
    "patties": [
      { id: "pt1", name: "Plain Cheese Patties", price: 25, emoji: "🥮" },
      { id: "pt2", name: "Veg Plain Patties", price: 30, emoji: "🥮" },
      { id: "pt3", name: "Veg Cheese Patties", price: 40, emoji: "🥮" },
      { id: "pt4", name: "Veg Corn Patties", price: 35, emoji: "🥮" },
      { id: "pt5", name: "Corn Cheese Patties", price: 45, emoji: "🥮" },
      { id: "pt6", name: "Paneer Patties", price: 50, emoji: "🥮" },
      { id: "pt7", name: "Paneer Cheese Patties", price: 60, emoji: "🥮" },
      { id: "pt8", name: "Spicy Cheese Patties", price: 50, emoji: "🥮" }
    ],
    "fried-rice": [
      { id: "fr1", name: "Fried Rice (Half)", price: 30, emoji: "🍚" },
      { id: "fr2", name: "Fried Rice (Full)", price: 50, emoji: "🍚" },
      { id: "fr3", name: "Paneer Rice (Half)", price: 50, emoji: "🍚" },
      { id: "fr4", name: "Paneer Rice (Full)", price: 70, emoji: "🍚" },
      { id: "fr5", name: "Schezwan Rice (Half)", price: 40, emoji: "🍚" },
      { id: "fr6", name: "Schezwan Rice (Full)", price: 60, emoji: "🍚" }
    ]
  };
  
  // Function to initialize the menu
  function initializeMenu() {
    const menuItemsContainer = document.getElementById("menu-items");
    const categoryTabs = document.getElementById("category-tabs");
    const categoryButtons = document.querySelectorAll(".category-btn");
    
    // Function to display menu items based on category
    function displayMenuItems(category) {
      // Clear the menu items container
      menuItemsContainer.innerHTML = '';
      
      // If category is "all", display all items from all categories
      if (category === "all") {
        for (const cat in menuData) {
          menuData[cat].forEach(item => {
            createMenuItemCard(item);
          });
        }
      } else {
        // Display items for selected category
        if (menuData[category]) {
          menuData[category].forEach(item => {
            createMenuItemCard(item);
          });
        }
      }
    }
    
    // Function to create a menu item card
    function createMenuItemCard(item) {
      const menuItem = document.createElement("div");
      menuItem.className = "menu-item";
      menuItem.setAttribute("data-id", item.id);
      
      menuItem.innerHTML = `
        <div class="menu-item-content">
          <div class="item-emoji">${item.emoji}</div>
          <h3 class="item-name">${item.name}</h3>
          <p class="item-price">₹${item.price}</p>
        </div>
      `;
      
      menuItemsContainer.appendChild(menuItem);
    }
    
    // Add event listeners to category buttons
    categoryButtons.forEach(button => {
      button.addEventListener("click", function() {
        // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove("active"));
        
        // Add active class to clicked button
        this.classList.add("active");
        
        // Get the category and display items
        const category = this.getAttribute("data-category");
        displayMenuItems(category);
      });
    });
    
    // Display all menu items by default
    displayMenuItems("all");
  }
  
  // Initialize the menu once the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", initializeMenu);