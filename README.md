# Pet Adoption Site

A Node.js-powered pet adoption website that showcases available pets, adoption resources, a pet care blog, a shop, and more. This site allows users to view and adopt pets, access useful information, and shop for pet supplies.

## Features

- **Home Page**: Display featured pets available for adoption.
- **Available Pets**: List of pets currently up for adoption.
- **Pet Care**: Information and resources on how to take care of your pets.
- **Blog**: Helpful articles and updates for pet owners.
- **Shop**: Purchase pet-related items and supplies.
- **Success Stories**: Heartwarming adoption stories.
- **Sponsorship**: Option to sponsor a pet's care.
- **FAQ**: Frequently Asked Questions to assist users.
- **Contact Page**: Contact form for inquiries.

## Tech Stack

- **Backend**: Node.js with Express
- **Frontend**: HTML, CSS, JavaScript
- **Styling**: Custom CSS for layout and design
- **Hosting**: Deployed on Vercel

## Installation

To run this project locally, follow these steps:

1. **Clone this repository** to your local machine:

   ```bash
   git clone https://github.com/yourusername/pet-adoption-site.git
   ```

2. Navigate to the project directory:

   ```bash
   cd pet-adoption-site
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the server locally:

   ```bash
   npm start
   ```

This will run the application on http://localhost:3000.

## Directory Structure

```
pet-adoption-site/
├── public/
│   ├── css/
│   │   └── styles.css
│   ├── images/
│   │   └── [many .jpg files for the website]
│   ├── js/
│   │   ├── script.js
│   │   └── contact.js
│   ├── about.html
│   ├── blog.html
│   ├── cart.html
│   ├── contact.html
│   ├── faq.html
│   ├── index.html
│   ├── pet-care.html
│   ├── pet-resources.html
│   ├── pets.html
│   ├── shop.html
│   ├── sponsorship.html
│   ├── success-stories.html
│   └── training-tips.html
├── package.json
└── server.js
```

## Usage

- **Home Page**: View a featured pet and navigate to other pages.
- **Available Pets**: Browse through pets available for adoption.
- **Shop**: Explore and purchase pet supplies.
- **Contact Form**: Fill out the contact form for any inquiries or support.

## API Endpoints

- `GET /api/pets`: Fetch available pets.
- `POST /api/contact`: Submit the contact form.
- `POST /api/cart/add`: Add an item to the cart.
- `GET /api/cart`: View the items in the cart.
- `POST /api/sponsor`: Sponsor a pet.

## Deployment

The website is hosted and deployed on Vercel. The production URL is:

https://wp-pet-adoption.vercel.app

You can also deploy this site by following the instructions on Vercel’s platform.

### Deployment Steps

To deploy this project on Vercel:

1. Make sure you have the Vercel CLI installed.

2. Run the following command in the project folder:

   ```bash
   vercel
   ```

3. Follow the prompts to log in, select the scope, and configure the project.

4. To deploy to production:

   ```bash
   vercel --prod
   ```

Once deployed, Vercel will provide a unique URL for your project.

## Contributing

If you’d like to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature-name).
3. Make your changes and commit them (git commit -m 'Add feature').
4. Push to your fork (git push origin feature-name).
5. Create a pull request on GitHub.

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Acknowledgments

Express for creating a lightweight and powerful backend framework.  
Vercel for easy deployment.  
Thank you for checking out the Pet Adoption Site!
