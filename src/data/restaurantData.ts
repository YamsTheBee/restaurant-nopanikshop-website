export interface Horaire {
  id: string;
  day: string;
  hours: string;
}

export const restaurantInfo = {
  name: "NoPanik Shop",
  address: "7 Passage du Prado, 75010 Paris",
  phone: "09 81 33 19 15",
  
  socials: {

    instagram: "https://instagram.com/nopanikshop",
    facebook: "https://facebook.com/nopanikshop",
    whatsapp: "https://wa.me/33621744523", 
  },

  horaires: [
    { id: "lun-sam", day: "Lun - Sam", hours: "10h30 - 20h00" },
    { id: "dimanche", day: "Dimanche", hours: "Fermé" },
  ] as Horaire[],
};