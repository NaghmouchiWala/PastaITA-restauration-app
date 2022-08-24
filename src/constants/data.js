import images from './images';

const wines = [
  {
    title: 'Spaghetti Tomato Vegi',
    price: '9 dinars',
    tags: 'livré | Sauce Tomates Cerise Basilic',
  },
  {
    title: 'Pasta Tuna',
    price: '12 dinars',
    tags: 'livré | Sauce Tomate, Oignons, Olives, Basilic, Ail, Thon',
  },
  {
    title: 'Spaghetti Bolognaise',
    price: '14 dinars',
    tags: 'livré | Tomates pelées, Viande de boeuf hachée, Oignons, Fromage Parmesan',
  },
  {
    title: 'Spaghetti Aux Fruits De Mer',
    price: '19 dinars',
    tags: 'livré | Sauce Tomate, Oignons, Crevettes, Moules, Poulpes, Calamars',
  },
  {
    title: 'Lasagnes à la bolognaise',
    price: '21 dinars ',
    tags: 'livré | Boeuf Haché, Sauce Tomate, Oignons, Fromage Râpé, Mozarrela',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Le bon goût',
    
  },
  {
    imgUrl: images.award01,
    title: 'Repas chauds',
    
  },
  {
    imgUrl: images.award05,
    title: 'Repas chauds',
    
  },
  {
    imgUrl: images.award03,
    title: 'Chef exceptionnel',
    
  },
];

export default { wines, cocktails, awards };
