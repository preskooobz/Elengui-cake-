import heroSlideOne from '../assets/aboutsection.jpg'
import heroSlideTwo from '../assets/backgroundherocaroussel2.jpg'
import heroSlideThree from '../assets/backgroundherocaroussel3.jpg'
import cakeOne from '../assets/produits_carrouselle01.jpg'
import cakeTwo from '../assets/gateau2.jpg'
import cakeThree from '../assets/gateau4.jpg'
import cakeFour from '../assets/gateau5.jpg'
import cakeFive from '../assets/produit05.jpg'
import cakeSix from '../assets/produits06.jpg'
import cakeSeven from '../assets/produits07.jpg'


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
    title: 'Gâteau signature',
    description: 'Une pièce généreuse pensée pour marquer les moments forts.',
    image: cakeFour,
  },
  {
    title: 'Produit gourmand',
    description: 'Un format pratique et raffiné pour le quotidien.',
    image: cakeFive,
  },
  {
    title: 'Collection douce',
    description: 'Des textures moelleuses avec une finition élégante.',
    image: cakeSix,
  },
  {
    title: 'Pâtisserie maison',
    description: 'Des créations simples, fraîches et très visuelles.',
    image: cakeSeven,
  },
]

export const whatsappMessage = encodeURIComponent(
  'Bonjour Elengui Cake, je souhaite passer une commande.',
)

export const whatsappUrl = `https://wa.me/242064389948?text=${whatsappMessage}`