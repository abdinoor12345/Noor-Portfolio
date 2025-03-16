import React from "react";

function App() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "86a60b8a-b67f-493a-919a-c0edb3b0fbe6"); // Replace with your Web3Forms access key

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert("Form submitted successfully!");
    } else {
      console.error("Error", res);
      alert("Form submission failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 w-full max-w-5xl">
        
        {/* Sign-Up Form */}
        <div className="bg-white p-8 rounded-lg shadow-none">
          <h2 className="text-2xl font-bold mb-6 text-center">Get In Touch</h2>
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 bg-transparent border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 bg-transparent border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500" required />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <input type="text" id="subject" name="subject" className="mt-1 block w-full px-3 py-2 bg-transparent border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows="4" className="mt-1 block w-full px-3 py-2 bg-transparent border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500" required></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-white p-8 rounded-lg shadow-none flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6">lets talk</h2>
          <div className="space-y-3 text-gray-700">
            <p><strong>Location:</strong> 123 Street, Nairobi, Kenya</p>
            <p><strong>Phone:</strong> +254 700 123456</p>
            <p><strong>Email:</strong> contact@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
