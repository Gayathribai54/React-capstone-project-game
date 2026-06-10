import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Profile.css";
import Footer from "../components/Footer.jsx";
function Profile() {
  const [form, setForm] = useState(() => {
    const profile = JSON.parse(
      localStorage.getItem("profile") || "null"
    );

    return (
      profile || {
        name: "",
        email: "",
        genre: "",
        bio: ""
      }
    );
  });

  const [savedProfile, setSavedProfile] = useState(() => {
    return JSON.parse(
      localStorage.getItem("profile") || "null"
    );
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "profile",
      JSON.stringify(form)
    );

    setSavedProfile(form);

    alert("Profile Saved Successfully!");
  };

  return (
    <div className="profile-page">
      <Navbar />
      <h1>🎮 Gamer Profile</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value
            })
          }
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value
            })
          }
        />

        <input
          type="text"
          placeholder="Favorite Genre"
          value={form.genre}
          onChange={(e) =>
            setForm({
              ...form,
              genre: e.target.value
            })
          }
        />

        <textarea
          placeholder="Bio"
          value={form.bio}
          onChange={(e) =>
            setForm({
              ...form,
              bio: e.target.value
            })
          }
        />

        <button type="submit">
          Save Profile
        </button>
      </form>

      {savedProfile && (
        <div className="profile-card">
          <h2>Saved Profile</h2>

          <p>
            <strong>Name:</strong>{" "}
            {savedProfile.name}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {savedProfile.email}
          </p>

          <p>
            <strong>Favorite Genre:</strong>{" "}
            {savedProfile.genre}
          </p>

          <p>
            <strong>Bio:</strong>{" "}
            {savedProfile.bio}
          </p>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Profile;