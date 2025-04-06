export const charities = [
  {
    id: 1,
    title: "Clean Water for Children",
    description: "Help provide clean and safe drinking water to children in rural areas. Access to clean water can prevent waterborne diseases and improve overall health and well-being of communities.",
    image: "/assets/images/causes/causes_1.jpg",
    raised: 25000,
    goal: 50000,
    category: "water"
  },
  {
    id: 2,
    title: "Education for Every Child",
    description: "Support education initiatives for underprivileged children. Your donation will help provide school supplies, books, and improve educational facilities in impoverished areas.",
    image: "/assets/images/causes/causes_2.jpg",
    raised: 18000,
    goal: 30000,
    category: "education"
  },
  {
    id: 3,
    title: "Food for Hungry Children",
    description: "Help combat hunger by providing nutritious meals to children in need. Your contribution will support food programs that ensure children don't go to bed hungry.",
    image: "/assets/images/causes/causes_3.jpg",
    raised: 12000,
    goal: 20000,
    category: "food"
  },
  {
    id: 4,
    title: "Medical Care for the Poor",
    description: "Support healthcare initiatives for those who cannot afford medical treatment. Your donation will help provide essential medical services, medicines, and healthcare facilities.",
    image: "/assets/images/causes/causes_4.jpg",
    raised: 35000,
    goal: 60000,
    category: "health"
  }
];

export function getCharityById(id) {
  return charities.find(charity => charity.id === parseInt(id));
}

export function getAllCharities() {
  return charities;
}

export function getCharitiesByCategory(category) {
  if (!category) return charities;
  return charities.filter(charity => charity.category === category);
}
