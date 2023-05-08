import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      name: 'Solar-powered lantern',
      description:
        'A lantern powered by solar energy, providing a sustainable and eco-friendly source of light to those in need.',
      image:
        'https://images.unsplash.com/photo-1507697364665-69eec30ea71e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80',
      donationItemId: 1,
      categoryIds: [1, 2],
      price: '1.34',
    },
    {
      name: 'School supplies kit',
      description:
        'A kit containing all the essential school supplies, such as notebooks, pencils, and erasers, for underprivileged children to help them succeed in their education.',
      image:
        'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      donationItemId: 2,
      categoryIds: [1, 3],
      price: '13.08',
    },
    {
      name: 'Warm winter coat',
      description:
        'A warm winter coat to protect people from the cold and help them stay warm during the winter months.',
      image:
        'https://images.unsplash.com/photo-1515434126000-961d90ff09db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      donationItemId: 3,
      categoryIds: [4],
      price: '11.67',
    },
    {
      name: 'Household cleaning supplies',
      description:
        'Household cleaning supplies, such as soap, sponges, and disinfectant, to help people maintain a clean and healthy living environment.',
      image:
        'https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      donationItemId: 4,
      categoryIds: [1, 5],
      price: '3.66',
    },
    {
      name: 'Laptops for students',
      description:
        'Laptops for underprivileged students to help them access technology and participate in virtual learning.',
      image:
        'https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      donationItemId: 5,
      categoryIds: [6, 3],
      price: '15.76',
    },
    {
      name: 'Board games',
      description:
        'Board games for families and children to play and enjoy together, promoting social interaction and entertainment.',
      image:
        'https://images.unsplash.com/photo-1632501641765-e568d28b0015?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
      donationItemId: 6,
      categoryIds: [7],
      price: '1.40',
    },
    {
      name: 'Basketballs',
      description:
        'Basketballs for children to play and stay active, promoting physical fitness and exercise.',
      image:
        'https://images.unsplash.com/photo-1494199505258-5f95387f933c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80',
      donationItemId: 7,
      categoryIds: [8],
      price: '12.53',
    },
    {
      name: "Children's books",
      description:
        'Children’s books to promote literacy and encourage a love for reading in young children.',
      image:
        'https://plus.unsplash.com/premium_photo-1661714264890-002b648f816c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80',
      donationItemId: 8,
      categoryIds: [1, 9],
      price: '14.81',
    },
    {
      name: 'Hygiene kit',
      description:
        'A hygiene kit containing essential items such as toothbrushes, toothpaste, and soap to help people maintain personal hygiene and health.',
      image:
        'https://images.unsplash.com/photo-1583947581924-860bda6a26df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1767&q=80',
      donationItemId: 9,
      categoryIds: [10],
      price: '14.17',
    },
    {
      name: 'Office furniture',
      description:
        'Office furniture such as desks, chairs, and filing cabinets for non-profit organizations to create a functional and efficient work environment.',
      image:
        'https://images.unsplash.com/photo-1520032525096-7bd04a94b5a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80',
      donationItemId: 10,
      categoryIds: [11],
      price: '3.17',
    },
    {
      name: 'Power tools',
      description:
        'Power tools such as drills and saws for people in need to complete home improvement projects and repairs.',
      image:
        'https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
      donationItemId: 11,
      categoryIds: [1, 12],
      price: '4.68',
    },
    {
      name: 'Art supplies',
      description:
        'Art supplies, such as paints, brushes, and canvas, for people to express their creativity and participate in art activities.',
      image:
        'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80',
      donationItemId: 12,
      categoryIds: [13],
      price: '16.95',
    },
    {
      name: 'Eco-friendly water bottles',
      description:
        'Eco-friendly water bottles made from reusable materials to reduce waste and promote sustainability.',
      image:
        'https://images.unsplash.com/photo-1605274280925-9dd1baacb97b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      donationItemId: 13,
      categoryIds: [2],
      price: '18.67',
    },
    {
      name: 'Sporting equipment',
      description:
        'Sporting equipment, such as soccer balls and basketballs, for children to play and stay active, promoting physical fitness and exercise.',
      image:
        'https://plus.unsplash.com/premium_photo-1664302183949-0bdc2b38286e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      donationItemId: 14,
      categoryIds: [1, 8],
      price: '3.99',
    },
    {
      name: 'Music instruments',
      description:
        'Music instruments, such as guitars and keyboards, for people to learn and enjoy playing music.',
      image:
        'https://images.unsplash.com/photo-1462965326201-d02e4f455804?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      donationItemId: 15,
      categoryIds: [2],
      price: '18.71',
    },
    {
      name: 'Blankets',
      description:
        'Blankets to provide warmth and comfort to those in need, especially during cold weather.',
      image:
        'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      donationItemId: 16,
      categoryIds: [4],
      price: '7.87',
    },
    {
      name: 'Non-perishable food',
      description:
        'Non-perishable food, such as canned goods and rice, to provide essential sustenance to those in need.',
      image:
        'https://media.istockphoto.com/id/498405596/photo/please-support-our-food-drive-holiday-canned-food-drive.jpg?s=1024x1024&w=is&k=20&c=i2gDVlGn_hiZ8R1ABwAtT_qpnyPALcyQy_7EE1shQb4=',
      donationItemId: 17,
      categoryIds: [1, 5],
      price: '11.64',
    },
    {
      name: 'First aid supplies',
      description:
        'First aid supplies, such as bandages and antiseptic wipes, to help people treat minor injuries and maintain basic health and safety.',
      image:
        'https://images.unsplash.com/photo-1603398938378-e54eab446dde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      donationItemId: 18,
      categoryIds: [10],
      price: '11.50',
    },
    {
      name: 'Gardening tools',
      description:
        'Gardening tools, such as shovels and rakes, for people to grow and maintain their own gardens, promoting self-sufficiency and sustainability.',
      image:
        'https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      donationItemId: 19,
      categoryIds: [2, 12],
      price: '13.40',
    },
    {
      name: 'Books for all ages',
      description:
        'Books for people of all ages, promoting literacy and a love for reading.',
      image:
        'https://images.unsplash.com/photo-1530538987395-032d1800fdd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      donationItemId: 20,
      categoryIds: [9],
      price: '13.83',
    },
  ],
  selectedDonationId: null,
  selectedDonationInformation: null,
};

const Donations = createSlice({
  name: 'donations',
  initialState: initialState,
  reducers: {
    resetDonations: () => {
      return initialState;
    },
    updateSelectedDonationId: (state, action) => {
      state.selectedDonationId = action.payload;
      state.selectedDonationInformation = state.items.find(
        item => item.donationItemId === action.payload,
      );
    },
  },
});
export const {resetDonations, updateSelectedDonationId} = Donations.actions;
export default Donations.reducer;
