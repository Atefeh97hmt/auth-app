
```markdown
# Authentication App

A simple and responsive authentication application built with React. This app includes user sign-in, sign-up, and password reset functionalities, providing a user-friendly interface for managing user authentication.

## Features

- **User Registration**: New users can sign up by providing their personal information.
- **User Sign-In**: Registered users can log in using their credentials.
- **Forgot Password**: Users can request a password reset link to their registered email.
- **Responsive Design**: The app is fully responsive, providing an optimal experience on both mobile and desktop devices.

## Technologies Used

**Frontend**: 
- React
- Axios (for API requests)
- Tailwind CSS (for styling)

**Backend**: 
- Node.js (Express)
- JSON Server (for mock API)

## Installation

To get started with the authentication app, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/atefeh97hmt/auth-app.git
   cd auth-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm start
   ```

4. **Start the backend** (if using JSON Server):

   - Install JSON Server globally (if not already installed):

     ```bash
     npm install -g json-server
     ```

   - Run the JSON Server with your data file (e.g., `db.json`):

     ```bash
     json-server --watch db.json --port 5000
     ```

5. Open your browser and navigate to `http://localhost:3000` to view the app.

---

## API Endpoints

The app interacts with the following endpoints (assuming you are using JSON Server):

- **GET /users**: Retrieve all users (for sign-in validation).
- **POST /users**: Create a new user (for sign-up).

---

## Usage

- **Sign Up**: Navigate to the sign-up page, fill in the required fields, and click the "Sign Up" button.
- **Sign In**: Navigate to the sign-in page, enter your credentials, and click the "Sign In" button.
- **Forgot Password**: Navigate to the forgot password page, enter your email, and click the "Reset Password" button to receive a reset link.

---

## Contributing

Contributions are welcome! If you would like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/YourFeatureName`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/YourFeatureName`.
5. Open a pull request.

---

## Contact

For any inquiries, please reach out at [hemmati.atefeh97@gmail.com](mailto:hemmati.atefeh97@gmail.com).

 ```