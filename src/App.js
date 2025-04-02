import "./App.css";
import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import ProfileList from "./Components/ProfileList";
import MapView from "./Components/MapView";

function App() {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleSelectProfile = (profile, event) => {
    if (!event) return; // Prevents undefined event error
    
    setSelectedProfile(profile);
  };

  return (
    <div className="container position-relative ">
      <h1 className="text-center mb-4">Profile Explorer</h1>
      <ProfileList onSelect={handleSelectProfile} />
      {selectedProfile && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "40%",
            background: "white",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            zIndex: 1050,
          }}
        >
          <h2 className="text-center">{selectedProfile.name}</h2>
          <img
            src={selectedProfile.photo}
            alt={selectedProfile.name}
            className="d-block mx-auto rounded-circle mb-3"
            width="100"
            height="100"
            style={{objectFit:"cover"}}
          />
          <p className="text-center">{selectedProfile.profession}</p>
          <p className="text-center">{selectedProfile.description}</p>

          <MapView location={selectedProfile?.location} />
          <div className="text-center mt-3">
            <button
              className="btn btn-danger"
              onClick={() => setSelectedProfile(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <footer class="py-3 my-4">
    <p class="text-center text-muted">© 2025 Profile Explorer, Inc</p>
  </footer>
    </div>
  );
}

export default App;
