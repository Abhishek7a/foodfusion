# Food Fusion Frontend 🎨

Modern, responsive frontend application for Food Fusion - a food ordering platform. Built with React, TypeScript, Redux, and Tailwind CSS.


## ✨ Features

- **User Authentication**: Login and sign up with JWT token management
- **Food Browsing**: Browse food items by categories with beautiful cards
- **Shopping Cart**: Add/remove items, manage quantities, view totals
- **Order Management**: Place orders with shipping details
- **Order Tracking**: Track order status
- **User Profile**: View and manage user profile
- **Search Functionality**: Search for food items across the platform
- **Responsive Design**: Mobile-first, fully responsive UI
- **Modern UI/UX**: Clean, intuitive interface with Tailwind CSS
- **Toast Notifications**: User-friendly notifications for actions
- **Infinite Scroll**: Smooth scrolling for food item lists

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Redux Toolkit** - State management
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls
- **React Icons** - Icon library
- **React Toastify** - Toast notifications
- **React Infinite Scroll** - Infinite scrolling component
- **js-cookie** - Cookie management
- **Headless UI** - Accessible UI components

## 📁 Project Structure

```
foodfusion-master/
├── public/                 # Static assets
│   ├── index.html
│   ├── logo1.png
│   └── manifest.json
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Banner.tsx      # Hero banner component
│   │   ├── Cart.tsx        # Shopping cart sidebar
│   │   ├── Checkout.tsx    # Checkout form component
│   │   ├── FoodCard.tsx    # Food item card
│   │   ├── Footer.tsx      # Footer component
│   │   ├── ItemCard.tsx    # Individual item card
│   │   ├── Navbar.tsx      # Navigation bar
│   │   ├── OrderForm.tsx   # Order form component
│   │   ├── OrderTrack.tsx  # Order tracking component
│   │   ├── ProductList.tsx # Product listing component
│   │   └── ScrollToTop.tsx # Scroll to top utility
│   ├── pages/              # Page components
│   │   ├── Home.tsx        # Home page
│   │   ├── Login.tsx       # Login page
│   │   ├── SignUp.tsx      # Registration page
│   │   ├── CheckOutPage.tsx # Checkout page
│   │   ├── ItemPage.tsx    # Individual item detail page
│   │   ├── ItemList.tsx    # Category item list page
│   │   ├── OrderPage.tsx   # Order confirmation page
│   │   ├── TrackPage.tsx   # Order tracking page
│   │   ├── UserProfile.tsx # User profile page
│   │   ├── UserInfo.tsx    # User information component
│   │   ├── SearchResults.tsx # Search results page
│   │   └── PageNotFound.tsx  # 404 page
│   ├── Redux/              # Redux store configuration
│   │   ├── Store.ts        # Redux store setup
│   │   └── Reduser/
│   │       └── Reducer.ts  # Redux reducers
│   ├── assets/             # Images and static assets
│   │   ├── logo.jpg
│   │   ├── logo1.png
│   │   ├── main_logo.png
│   │   └── background.avif
│   ├── types/              # TypeScript type definitions
│   │   └── assets.d.ts
│   ├── App.tsx             # Main App component
│   ├── App.css             # App styles
│   ├── index.tsx           # Application entry point
│   └── index.css           # Global styles
├── build/                  # Production build (generated)
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md               # This file
```

## ⚙️ Configuration

### API Base URL

Update the API base URL in your API calls. The default backend URL is:
```
http://localhost:5001
```

To configure for different environments, create a `.env` file:

```env
REACT_APP_API_URL=http://localhost:5001
```

Then use it in your code:
```typescript
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';
```

### Authentication Token

The application uses JWT tokens stored in cookies. Tokens are automatically sent with API requests via the `Authorization` header.

## 🚀 Running the Application

### Development Mode

```bash
npm start
```

This will:
- Start the development server
- Open `http://localhost:3000` in your browser
- Enable hot-reloading on file changes

### Production Build

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

### Run Tests

```bash
npm test
```

## 📜 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (irreversible)
- `npm run predeploy` - Build before deployment
- `npm run deploy` - Deploy to GitHub Pages

## 🗺️ Pages & Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `Home` | Home page with banner and food categories |
| `/login` | `Login` | User login page |
| `/SignUp` | `SignUp` | User registration page |
| `/checkout` | `CheckOutPage` | Checkout and order placement |
| `/item/:id` | `ItemPage` | Individual food item details |
| `/productList/:id` | `ItemList` | Food items by category |
| `/search` | `SearchResults` | Search results page |
| `/orderPage` | `OrderPage` | Order confirmation page |
| `/orderTrack` | `TrackPage` | Order tracking page |
| `/userProfile` | `UserProfile` | User profile and settings |
| `*` | `PageNotFound` | 404 error page |

## 🧩 Components

### Core Components

- **Navbar**: Main navigation with cart icon and user menu
- **Banner**: Hero section with promotional content
- **FoodCard**: Displays food categories on home page
- **Cart**: Shopping cart sidebar with add/remove functionality
- **ItemCard**: Individual food item card
- **Footer**: Site footer with links and information

### Feature Components

- **Checkout**: Order form with shipping details
- **OrderForm**: Form for entering order information
- **OrderTrack**: Order tracking interface
- **ProductList**: Grid/list view of products
- **ScrollToTop**: Button to scroll to top of page

## 🔌 API Integration

The frontend communicates with the backend API using **Axios**.

### Authentication Flow

1. User submits login/signup form
2. API returns JWT token
3. Token stored in HTTP-only cookie
4. Token included in `Authorization` header for protected routes

### API Endpoints Used

- `POST /login` - User login
- `POST /signUp` - User registration
- `POST /isLogin` - Verify authentication
- `POST /orderDetails` - Submit order
- `POST /fetchUserDetails` - Get user details
- `POST /updateOrderDetails` - Update user details


## 🎯 Key Features Implementation

### Shopping Cart
- Add items from product pages
- View cart in slide-out sidebar
- Update quantities
- Remove items
- Calculate totals

### Authentication
- JWT token-based authentication
- Protected routes
- Persistent login sessions
- User profile management

### Search
- Real-time search functionality
- Filter results
- Display search results page

## 🔒 Security Considerations

- JWT tokens stored in HTTP-only cookies
- API calls include credentials
- Input validation on forms
- XSS protection with React's built-in escaping

## 🐛 Troubleshooting

### Common Issues

1. **API Connection Errors**
   - Ensure backend server is running
   - Check API URL configuration
   - Verify CORS settings on backend

2. **Authentication Issues**
   - Clear browser cookies
   - Check token expiration
   - Verify JWT secret matches backend

3. **Build Errors**
   - Clear `node_modules` and reinstall
   - Check TypeScript errors
   - Verify all dependencies are installed

## 📝 Notes

- The application uses React Router v6
- State is managed with Redux Toolkit
- Styling is done with Tailwind CSS
- API calls use Axios with credentials
- Icons from React Icons library
