import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// URL de l'image d'arrière-plan (remplacez par une URL valide si nécessaire)
const backgroundImage = 'https://via.placeholder.com/800x600';

const DateComponent = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('fr-FR', options);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('fr-FR');
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="p-4 bg-white shadow-md rounded-lg overflow-auto max-h-192 relative" // Doublé la hauteur maximale ici
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <img
        src="https://gabonmeca.com/uploads/article/cp026.jpg" // Remplacez par une image d'horloge réelle
        alt="Clock"
        className="absolute top-2 right-2 w-16 h-16 object-cover opacity-70" // Taille de l'image d'horloge augmentée
      />

      <div className="flex flex-col h-full bg-white bg-opacity-80 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Date et Heure Actuelles</h2> {/* Taille du texte augmentée */}
        <p className="text-xl mb-4">Date : <strong>{formatDate(currentDate)}</strong></p> {/* Taille du texte augmentée */}
        <p className="text-xl">Heure : <strong>{formatTime(currentDate)}</strong></p> {/* Taille du texte augmentée */}
      </div>
    </motion.div>
  );
};

export default DateComponent;
