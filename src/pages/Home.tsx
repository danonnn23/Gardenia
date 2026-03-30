import heroBg from '../assets/hero_bg04.jpg'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom'
import DeliveryMap from '../components/DeliveryMap.tsx'

const heroTitles = [
    "Краса, що розквітає для вас",
    "Естетика у кожній деталі, ніжність у кожному букеті",
    "Природа, втілена в букеті",
    "Ваші почуття, розказані квітами",
    "Дозвольте квітам сказати те, на що не вистачає слів"
]

const Home = () => {
    const [heroIndex, setHeroIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setHeroIndex((prev) => (prev + 1) % heroTitles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className='w-screen flex flex-col items-center'>
                <section className="w-11/12  grid grid-cols-1">
                    <h1 className='h-30 flex items-center justify-center text-5xl font-great-vibes text-black text-center my-20'>
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={heroTitles[heroIndex]} // Ключ змушує React думати, що це новий елемент
                                initial={{ y: 20, opacity: 0 }} // Початковий стан: трохи знизу і прозорий
                                animate={{ y: 0, opacity: 1 }}   // Кінцевий: на місці і видимий
                                exit={{ y: -20, opacity: 0 }}   // Куди зникає: трохи вгору і в прозорість
                                transition={{ duration: 0.5 }}  // Тривалість анімації
                                className='block'
                            >
                                {heroTitles[heroIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </h1>
                    <img src={heroBg} alt="" className='rounded-4xl' />
                    <h3 className='text-3xl font-serif text-center text-emerald-950 my-10'>Відкрийте світ, де кожен букет розповідає історію. Наші флористи створюють не просто композиції, а незабутні моменти для вас та ваших близьких.</h3>
                    <div className='flex justify-center'>
                        <NavLink to="/shop" className="bg-[#8d9e88] px-5 py-4 text-4xl rounded-2xl">Обрати букет</NavLink>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home