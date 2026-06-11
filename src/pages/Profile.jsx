import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Profile.css";

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

    // Name Validation
    if (form.name.trim().length < 3) {
      alert(
        "Name must contain at least 3 characters"
      );
      return;
    }

    // Email Validation
    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(form.email)) {
      alert("Please enter a valid email");
      return;
    }

    // Genre Validation
    if (!form.genre.trim()) {
      alert(
        "Favorite Genre cannot be empty"
      );
      return;
    }

    // Bio Validation
    if (form.bio.trim().length < 10) {
      alert(
        "Bio must contain at least 10 characters"
      );
      return;
    }

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
          placeholder="Enter Name"
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
          placeholder="Enter Email"
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
          placeholder="Tell us about yourself..."
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
    </div>
  );
}

export default Profile;
