import heroSlideOne from '../assets/aboutsection.jpg'
import heroSlideTwo from '../assets/backgroundherocaroussel2.jpg'
import heroSlideThree from '../assets/backgroundherocaroussel3.jpg'
import cakeOne from '../assets/gateau.jpg'
import cakeTwo from '../assets/gateau2.jpg'
import cakeThree from '../assets/gateau4.jpg'
import cakeFour from '../assets/gateau5.jpg'

export const navItems = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Produits', href: '#produits' },
  { label: 'A propos', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const heroSlides = [heroSlideOne, heroSlideTwo, heroSlideThree]

export const products = [
  {
    title: 'Viennoiserie',
    description: 'Pains et douceurs préparés chaque matin.',
    image: cakeOne,
  },
  {
    title: "Gateaux d'anniversaire",
    description: 'Des gâteaux festifs, généreux et élégants.',
    image: cakeTwo,
  },
  {
    title: 'Douceurs',
    description: 'Des créations légères et gourmandes.',
    image: cakeThree,
  },
  {
    title: 'Box Gourmande',
    description: 'Un assortiment chic pour vos petits instants.',
    image: cakeFour,
  },
]

export const whatsappMessage = encodeURIComponent(
  'Bonjour Elengui Cake, je souhaite passer une commande.',
)

export const whatsappUrl = `https://wa.me/242064389948?text=${whatsappMessage}`